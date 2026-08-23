import type { Transport, TransportResponse } from '../transport.js';

export interface RetryTransportOptions {
  readonly retries?: number;
  readonly baseDelayMs?: number;
}

const DEFAULT_RETRIES = 2;
const DEFAULT_BASE_DELAY_MS = 500;

const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export const createRetryTransport = (
  inner: Transport,
  { retries = DEFAULT_RETRIES, baseDelayMs = DEFAULT_BASE_DELAY_MS }: RetryTransportOptions = {},
): Transport => ({
  request: async (url: string): Promise<TransportResponse> => {
    let lastError: unknown;
    for (let attempt = 0; attempt <= retries; attempt += 1) {
      try {
        return await inner.request(url);
      } catch (error) {
        lastError = error;
        if (attempt < retries) await delay(baseDelayMs * 2 ** attempt);
      }
    }
    throw lastError;
  },
});
