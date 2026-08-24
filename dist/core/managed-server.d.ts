import { Yad2Error } from './errors.js';
export interface ManagedServer {
    readonly port: number;
    readonly stop: () => Promise<void>;
}
export declare class Yad2BrowserUnavailableError extends Yad2Error {
    readonly detail: string;
    constructor(detail: string);
}
export declare const sharedServer: () => Promise<ManagedServer>;
/** Stop the shared server if one was ever started. Never spawns one just to shut it down. */
export declare const disposeSharedServer: () => Promise<void>;
