export interface ParsedArgs {
    readonly path: string | undefined;
    readonly args: unknown[];
    readonly flags: Readonly<Record<string, string | boolean>>;
}
export declare const parseArgs: (argv: readonly string[]) => ParsedArgs;
