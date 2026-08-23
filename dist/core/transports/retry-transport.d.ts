import type { Transport } from '../transport.js';
export interface RetryTransportOptions {
    readonly retries?: number;
    readonly baseDelayMs?: number;
}
export declare const createRetryTransport: (inner: Transport, { retries, baseDelayMs }?: RetryTransportOptions) => Transport;
