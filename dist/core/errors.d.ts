import type { ParamContext } from './params.js';
export declare class Yad2Error extends Error {
}
export declare class Yad2RequestError extends Yad2Error {
    readonly status: number;
    readonly path: string;
    readonly detail: string;
    constructor(status: number, path: string, detail: string);
}
export declare class Yad2BlockedError extends Yad2Error {
    readonly path: string;
    constructor(path: string);
}
export declare class Yad2SchemaError extends Yad2Error {
    readonly path: string;
    readonly issues: string;
    constructor(path: string, issues: string);
}
export declare class Yad2ParamsError extends Yad2Error {
    readonly context: ParamContext;
    readonly issues: string;
    constructor(context: ParamContext, issues: string);
}
export declare class Yad2NotFoundError extends Yad2Error {
    readonly what: string;
    constructor(what: string);
}
