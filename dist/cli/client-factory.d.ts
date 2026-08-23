import { type Yad2Client } from '../client.js';
export declare enum TransportKind {
    Node = "node",
    Http = "http",
    Curl = "curl",
    Browser = "browser",
    Resilient = "resilient"
}
export interface ClientFlags {
    readonly transport?: string;
    readonly port?: string | boolean;
    readonly interval?: string | boolean;
}
export declare const clientFrom: (flags: ClientFlags) => Yad2Client;
