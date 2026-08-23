export const pickBuckets = <T, K extends string>(
  source: Partial<Record<K, T[] | undefined>>,
  keys: readonly K[],
): T[] => keys.flatMap((key) => source[key] ?? []);
