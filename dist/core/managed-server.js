import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { Yad2Error } from './errors.js';
import { ProcessEvent, StdioMode } from './enums/http.js';
const PACKAGE = 'playwright-http-server';
const ENTRY = 'cli.js';
const READY = 'Browser initialized';
const PORT_PATTERN = /running on http:\/\/localhost:(\d+)/;
const STARTUP_TIMEOUT_MS = 120000;
export class Yad2BrowserUnavailableError extends Yad2Error {
    detail;
    constructor(detail) {
        super(`Could not start the browser transport (${PACKAGE}): ${detail}\n` +
            `Install it and its browser once:\n` +
            `  npm install ${PACKAGE}\n` +
            `  npx playwright install chromium\n` +
            `Or point at a server you already run: createBrowserClient({ port }).`);
        this.detail = detail;
    }
}
const FAILURE_PATTERN = /(Browser failed to start|Executable doesn't exist|playwright install)[^\n]*/i;
const diagnosis = (problem, log, code) => {
    const hit = FAILURE_PATTERN.exec(problem) ?? FAILURE_PATTERN.exec(log);
    return hit ? hit[0] : `exited with code ${code}`;
};
const entryPath = () => {
    const require = createRequire(import.meta.url);
    return join(dirname(require.resolve(PACKAGE)), ENTRY);
};
const awaitReady = (child) => new Promise((resolve, reject) => {
    let port;
    let log = '';
    let problem = '';
    const timer = setTimeout(() => reject(new Yad2BrowserUnavailableError(`no browser after ${STARTUP_TIMEOUT_MS}ms\n${log.slice(-400)}`)), STARTUP_TIMEOUT_MS);
    const finish = (outcome) => {
        clearTimeout(timer);
        outcome();
    };
    child.stdout?.on(ProcessEvent.Data, (chunk) => {
        const text = chunk.toString();
        log += text;
        port ??= Number(PORT_PATTERN.exec(text)?.[1]) || undefined;
        if (port !== undefined && text.includes(READY))
            finish(() => resolve(port));
    });
    child.stderr?.on(ProcessEvent.Data, (chunk) => {
        problem += chunk.toString();
    });
    child.once(ProcessEvent.Error, (error) => finish(() => reject(new Yad2BrowserUnavailableError(error.message))));
    child.once(ProcessEvent.Close, (code) => finish(() => reject(new Yad2BrowserUnavailableError(`exited with code ${code}\n${log.slice(-400)}`))));
});
let shared = null;
const launch = async () => {
    let entry;
    try {
        entry = entryPath();
    }
    catch {
        throw new Yad2BrowserUnavailableError('package not installed');
    }
    const child = spawn(process.execPath, [entry], { stdio: [StdioMode.Ignore, StdioMode.Pipe, StdioMode.Pipe] });
    const kill = () => child.kill();
    process.once(ProcessEvent.Exit, kill);
    try {
        const port = await awaitReady(child);
        child.stdout?.removeAllListeners();
        child.removeAllListeners(ProcessEvent.Close);
        return {
            port,
            stop: async () => {
                shared = null;
                process.off(ProcessEvent.Exit, kill);
                child.kill();
            },
        };
    }
    catch (error) {
        child.kill();
        throw error;
    }
};
export const sharedServer = () => {
    shared ??= launch();
    return shared;
};
