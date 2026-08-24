export declare const pickBuckets: <T, K extends string>(source: Partial<Record<K, T[] | undefined>>, keys: readonly K[]) => T[];
/**
 * Yad2 lists one promoted ad in several buckets at once — the same token turns up in
 * `platinum` and `agency` on a single page. Paging dedupes across pages; this dedupes
 * within one.
 */
export declare const dedupeBy: <T>(items: readonly T[], key: (item: T) => string) => T[];
