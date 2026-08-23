export interface Callable {
    readonly path: string;
    readonly invoke: (...args: unknown[]) => unknown;
    readonly target: unknown;
}
export declare const discover: (root: Record<string, unknown>, prefix?: string) => Callable[];
export declare const findCallable: (callables: readonly Callable[], path: string) => Callable | undefined;
