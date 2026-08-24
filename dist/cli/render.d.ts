export declare const resolve: (value: unknown) => Promise<unknown>;
/**
 * Dotted paths actually present in a result, with a sample value each. Guessing a field
 * name yields a silently blank column, and dumping whole records to find one is
 * expensive — this answers "what can I ask for?" from the real response.
 */
export declare const describePaths: (value: unknown) => string;
/** Fields that matched nothing in any row — almost always a typo or a wrong path. */
export declare const missingFields: (value: unknown, fields: readonly string[]) => string[];
export declare enum OutputFormat {
    Json = "json",
    Tsv = "tsv",
    Table = "table"
}
export declare const isOutputFormat: (value: unknown) => value is OutputFormat;
export declare const render: (value: unknown, fields?: string, format?: OutputFormat) => string;
