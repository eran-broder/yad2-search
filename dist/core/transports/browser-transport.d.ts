import type { Transport } from '../transport.js';
export interface BrowserTransportOptions {
    readonly port: number;
    readonly originUrl?: string;
    readonly minIntervalMs?: number;
    readonly settleMs?: number;
}
export declare const createBrowserTransport: (options: BrowserTransportOptions) => Transport;
