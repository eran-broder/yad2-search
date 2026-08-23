import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import type { Transport, TransportResponse } from '../transport.js';
import { createRateLimiter } from '../rate-limiter.js';

const run = promisify(execFile);

export interface CurlTransportOptions {
  readonly binary?: string;
  readonly minIntervalMs?: number;
  readonly timeoutSeconds?: number;
  readonly maxBufferBytes?: number;
}

const DEFAULT_BINARY = 'curl';
const DEFAULT_MIN_INTERVAL_MS = 1000;
const DEFAULT_TIMEOUT_SECONDS = 20;
const DEFAULT_MAX_BUFFER_BYTES = 64 * 1024 * 1024;
const STATUS_SEPARATOR = '\n@@status@@';

const argsFor = (url: string, timeoutSeconds: number): string[] => [
  '--silent',
  '--show-error',
  '--location',
  '--compressed',
  '--max-time',
  String(timeoutSeconds),
  '--write-out',
  `${STATUS_SEPARATOR}%{http_code}`,
  url,
];

const split = (stdout: string): TransportResponse => {
  const index = stdout.lastIndexOf(STATUS_SEPARATOR);
  if (index === -1) return { status: 0, body: stdout };
  return {
    status: Number(stdout.slice(index + STATUS_SEPARATOR.length).trim()),
    body: stdout.slice(0, index),
  };
};

export const createCurlTransport = (options: CurlTransportOptions = {}): Transport => {
  const binary = options.binary ?? DEFAULT_BINARY;
  const timeoutSeconds = options.timeoutSeconds ?? DEFAULT_TIMEOUT_SECONDS;
  const maxBuffer = options.maxBufferBytes ?? DEFAULT_MAX_BUFFER_BYTES;
  const schedule = createRateLimiter({
    minIntervalMs: options.minIntervalMs ?? DEFAULT_MIN_INTERVAL_MS,
  });

  const send = async (url: string): Promise<TransportResponse> => {
    const { stdout } = await run(binary, argsFor(url, timeoutSeconds), { maxBuffer });
    return split(stdout);
  };

  return { request: (url) => schedule(() => send(url)) };
};
