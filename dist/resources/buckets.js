export const pickBuckets = (source, keys) => keys.flatMap((key) => source[key] ?? []);
/**
 * Yad2 lists one promoted ad in several buckets at once — the same token turns up in
 * `platinum` and `agency` on a single page. Paging dedupes across pages; this dedupes
 * within one.
 */
export const dedupeBy = (items, key) => {
    const seen = new Set();
    return items.filter((item) => {
        const id = key(item);
        if (seen.has(id))
            return false;
        seen.add(id);
        return true;
    });
};
