const isAsyncIterable = (value: unknown): value is AsyncIterable<unknown> =>
  typeof value === 'object' && value !== null && Symbol.asyncIterator in value;

export const resolve = async (value: unknown): Promise<unknown> => {
  const awaited = await value;
  if (!isAsyncIterable(awaited)) return awaited;
  const items: unknown[] = [];
  for await (const item of awaited) items.push(item);
  return items;
};

const pick = (value: unknown, fields: readonly string[]): unknown => {
  if (Array.isArray(value)) return value.map((item) => pick(item, fields));
  if (typeof value !== 'object' || value === null) return value;
  const source = value as Record<string, unknown>;
  return Object.fromEntries(fields.map((field) => [field, path(source, field)]));
};

const path = (source: Record<string, unknown>, dotted: string): unknown =>
  dotted.split('.').reduce<unknown>((acc, key) => {
    if (typeof acc !== 'object' || acc === null) return undefined;
    return (acc as Record<string, unknown>)[key];
  }, source);

export const render = (value: unknown, fields?: string): string =>
  JSON.stringify(fields ? pick(value, fields.split(',')) : value, null, 2);
