export const pickBuckets = (source, keys) => keys.flatMap((key) => source[key] ?? []);
