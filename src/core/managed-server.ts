import { spawn, type ChildProcess } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { Yad2Error } from './errors.js';
import { ProcessEvent, Signal, StdioMode } from './enums/http.js';

export interface ManagedServer {
  readonly port: number;
  readonly stop: () => Promise<void>;
}

const PACKAGE = 'playwright-http-server';
const ENTRY = 'cli.js';
const READY = 'Browser initialized';
const PORT_PATTERN = /running on http:\/\/localhost:(\d+)/;
const STARTUP_TIMEOUT_MS = 120000;

export class Yad2BrowserUnavailableError extends Yad2Error {
  constructor(readonly detail: string) {
    super(
      `Could not start the browser transport (${PACKAGE}): ${detail}\n` +
        `Install it and its browser once:\n` +
        `  npm install ${PACKAGE}\n` +
        `  npx playwright install chromium\n` +
        `Or point at a server you already run: createBrowserClient({ port }).`,
    );
  }
}

const FAILURE_PATTERN = /(Browser failed to start|Executable doesn't exist|playwright install)[^\n]*/i;

const diagnosis = (problem: string, log: string, code: number | null): string => {
  const hit = FAILURE_PATTERN.exec(problem) ?? FAILURE_PATTERN.exec(log);
  return hit ? hit[0] : `exited with code ${code}`;
};

const entryPath = (): string => {
  const require = createRequire(import.meta.url);
  return join(dirname(require.resolve(PACKAGE)), ENTRY);
};

const awaitReady = (child: ChildProcess): Promise<number> =>
  new Promise((resolve, reject) => {
    let port: number | undefined;
    let log = '';
    let problem = '';

    const timer = setTimeout(
      () => reject(new Yad2BrowserUnavailableError(`no browser after ${STARTUP_TIMEOUT_MS}ms\n${log.slice(-400)}`)),
      STARTUP_TIMEOUT_MS,
    );

    const finish = (outcome: () => void) => {
      clearTimeout(timer);
      outcome();
    };

    child.stdout?.on(ProcessEvent.Data, (chunk: Buffer) => {
      const text = chunk.toString();
      log += text;
      port ??= Number(PORT_PATTERN.exec(text)?.[1]) || undefined;
      if (port !== undefined && text.includes(READY)) finish(() => resolve(port as number));
    });

    child.stderr?.on(ProcessEvent.Data, (chunk: Buffer) => {
      problem += chunk.toString();
    });

    child.once(ProcessEvent.Error, (error) => finish(() => reject(new Yad2BrowserUnavailableError(error.message))));
    child.once(ProcessEvent.Close, (code) =>
      finish(() => reject(new Yad2BrowserUnavailableError(`exited with code ${code}\n${log.slice(-400)}`))),
    );
  });

let shared: Promise<ManagedServer> | null = null;

const launch = async (): Promise<ManagedServer> => {
  let entry: string;
  try {
    entry = entryPath();
  } catch {
    throw new Yad2BrowserUnavailableError('package not installed');
  }

  const child = spawn(process.execPath, [entry], { stdio: [StdioMode.Ignore, StdioMode.Pipe, StdioMode.Pipe] });
  // child.kill() from inside an 'exit' handler trips a libuv assertion on Windows
  // (UV_HANDLE_CLOSING in async.c) once a Chromium page session is live, turning a
  // successful run into exit code 127. process.kill() signals the pid directly without
  // touching the ChildProcess handle, so it is safe during teardown.
  const reap = () => {
    child.unref();
    if (child.pid !== undefined && child.exitCode === null) {
      try {
        process.kill(child.pid, Signal.Kill);
      } catch {
        /* already gone */
      }
    }
  };
  process.once(ProcessEvent.Exit, reap);

  try {
    const port = await awaitReady(child);
    child.stdout?.removeAllListeners();
    child.removeAllListeners(ProcessEvent.Close);
    return {
      port,
      stop: async () => {
        shared = null;
        process.off(ProcessEvent.Exit, reap);
        child.kill();
      },
    };
  } catch (error) {
    child.kill();
    throw error;
  }
};

export const sharedServer = (): Promise<ManagedServer> => {
  shared ??= launch();
  return shared;
};

/** Stop the shared server if one was ever started. Never spawns one just to shut it down. */
export const disposeSharedServer = async (): Promise<void> => {
  const pending = shared;
  if (!pending) return;
  await pending.then(
    (server) => server.stop(),
    () => {
      shared = null;
    },
  );
};
