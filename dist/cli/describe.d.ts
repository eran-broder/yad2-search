export declare const describeParams: (fn: unknown) => string[];
/**
 * Positional parameter names, read off the compiled source. Methods built by
 * `createFeed` carry a Zod schema instead; everything else — `images.save(url, path)`,
 * `items.realestate(token)` — is plain positional and would otherwise describe itself
 * as taking nothing at all.
 */
export declare const describePositional: (fn: unknown) => string[];
/**
 * Full help for any callable. Both halves matter and neither implies the other:
 * `market.collection(name, params)` takes a positional name *and* a schema-checked
 * options object, so showing only one of them sends the caller down the wrong path.
 */
export declare const describeSignature: (fn: unknown, path: string) => string;
