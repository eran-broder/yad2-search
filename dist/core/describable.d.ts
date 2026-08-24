import type { ZodType } from 'zod';
declare const PARAMS: unique symbol;
export type Describable<F> = F & {
    readonly [PARAMS]?: ZodType;
};
export declare const withParams: <F extends (...args: never[]) => unknown>(fn: F, schema: ZodType) => Describable<F>;
export declare const paramsOf: (fn: unknown) => ZodType | undefined;
export type RowsOf = (result: never) => readonly unknown[];
/**
 * Teach a method how to reduce its own result to a list of records. `search` returns a
 * raw bucketed feed; column output (`--fields`) wants the listings inside it, and each
 * vertical already knows which buckets those are.
 */
export declare const withRows: <F extends (...args: never[]) => unknown>(fn: F, rows: RowsOf) => F;
export declare const rowsOf: (fn: unknown) => RowsOf | undefined;
export {};
