import type { Transport } from '../transport.js';
export interface CurlTransportOptions {
    readonly binary?: string;
    readonly minIntervalMs?: number;
    readonly timeoutSeconds?: number;
    readonly maxBufferBytes?: number;
}
export declare const createCurlTransport: (options?: CurlTransportOptions) => Transport;
