import { RangeSchema, serializeRange, type Range } from './range.js';

export type QueryValue = string | number | boolean | Range | readonly (string | number)[];

export type QueryParams = Readonly<Record<string, QueryValue | undefined>>;

const isRange = (value: QueryValue): value is Range => RangeSchema.safeParse(value).success;

const serializeValue = (value: QueryValue): string => {
  if (Array.isArray(value)) return value.join(',');
  if (typeof value === 'boolean') return value ? '1' : '0';
  if (isRange(value)) return serializeRange(value);
  return String(value);
};

const isPresent = (entry: [string, QueryValue | undefined]): entry is [string, QueryValue] =>
  entry[1] !== undefined;

export const toQueryString = (params: QueryParams): string => {
  const search = new URLSearchParams();
  Object.entries(params)
    .filter(isPresent)
    .forEach(([key, value]) => search.set(key, serializeValue(value)));
  return search.toString();
};

export const buildUrl = (baseUrl: string, path: string, params: QueryParams): string => {
  const query = toQueryString(params);
  return query ? `${baseUrl}${path}?${query}` : `${baseUrl}${path}`;
};
