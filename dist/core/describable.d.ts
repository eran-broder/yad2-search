import type { ZodType } from 'zod';
declare const PARAMS: unique symbol;
export type Describable<F> = F & {
    readonly [PARAMS]?: ZodType;
};
export declare const withParams: <F extends (...args: never[]) => unknown>(fn: F, schema: ZodType) => Describable<F>;
export declare const paramsOf: (fn: unknown) => ZodType | undefined;
export {};
