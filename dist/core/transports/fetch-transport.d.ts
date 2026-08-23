import type { Transport } from '../transport.js';
export interface FetchTransportOptions {
    readonly userAgent?: string;
    readonly minIntervalMs?: number;
    readonly timeoutMs?: number;
}
export declare const createFetchTransport: (options?: FetchTransportOptions) => Transport;
