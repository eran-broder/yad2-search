export interface Page<T> {
  readonly items: readonly T[];
  readonly totalPages: number | undefined;
}

export type PageFetcher<T> = (page: number) => Promise<Page<T>>;

export interface PaginateOptions {
  readonly startPage?: number;
  readonly maxPages?: number;
}

interface InternalOptions<T> extends PaginateOptions {
  readonly key?: (item: T) => string;
}

const isLastPage = (current: number, totalPages: number | undefined): boolean =>
  totalPages !== undefined && current >= totalPages;

export async function* paginate<T>(
  fetchPage: PageFetcher<T>,
  { startPage = 1, maxPages = Infinity, key }: InternalOptions<T> = {},
): AsyncGenerator<T> {
  const seen = new Set<string>();
  let current = startPage;
  let visited = 0;

  while (visited < maxPages) {
    const { items, totalPages } = await fetchPage(current);
    if (items.length === 0) return;

    for (const item of items) {
      const id = key?.(item);
      if (id !== undefined && seen.has(id)) continue;
      if (id !== undefined) seen.add(id);
      yield item;
    }

    visited += 1;
    if (isLastPage(current, totalPages)) return;
    current += 1;
  }
}

export const collect = async <T>(source: AsyncGenerator<T>): Promise<T[]> => {
  const out: T[] = [];
  for await (const item of source) out.push(item);
  return out;
};
