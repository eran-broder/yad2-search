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

const ARRAY_MARK = '[]';
const PATH_DEPTH = 6;
const SAMPLE_ROWS = 25;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const walkPaths = (value: unknown, prefix: string, depth: number, out: Map<string, unknown>): void => {
  if (depth > PATH_DEPTH) return;
  if (Array.isArray(value)) {
    if (prefix) out.set(`${prefix}${ARRAY_MARK}`, value.length);
    walkPaths(value[0], prefix, depth, out);
    return;
  }
  if (!isRecord(value)) {
    if (prefix && !out.has(prefix)) out.set(prefix, value);
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    walkPaths(child, prefix ? `${prefix}.${key}` : key, depth + 1, out);
  }
};

/**
 * Dotted paths actually present in a result, with a sample value each. Guessing a field
 * name yields a silently blank column, and dumping whole records to find one is
 * expensive — this answers "what can I ask for?" from the real response.
 */
export const describePaths = (value: unknown): string => {
  const rows = (Array.isArray(value) ? value : [value]).slice(0, SAMPLE_ROWS);
  const found = new Map<string, unknown>();
  rows.forEach((row) => walkPaths(row, '', 0, found));
  if (found.size === 0) return 'no fields found — the result is empty';
  return [...found]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, sample]) => `${key}  =  ${cell(sample).slice(0, 60)}`)
    .join('\n');
};

/** Fields that matched nothing in any row — almost always a typo or a wrong path. */
export const missingFields = (value: unknown, fields: readonly string[]): string[] => {
  const rows = (Array.isArray(value) ? value : [value]).slice(0, SAMPLE_ROWS);
  if (rows.length === 0) return [];
  return fields.filter((field) =>
    rows.every((row) => !isRecord(row) || path(row, field) === undefined),
  );
};

const EMPTY_CELL = '';
const TSV_SEPARATOR = '\t';
const TABLE_SEPARATOR = '  ';
const NEWLINE_PATTERN = /[\r\n\t]+/g;

const cell = (value: unknown): string => {
  if (value === null || value === undefined) return EMPTY_CELL;
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value).replace(NEWLINE_PATTERN, ' ');
};

const rowsOf = (value: unknown, fields: readonly string[]): string[][] => {
  const items = Array.isArray(value) ? value : [value];
  return items.map((item) =>
    fields.map((field) =>
      cell(typeof item === 'object' && item !== null ? path(item as Record<string, unknown>, field) : item),
    ),
  );
};

const toTsv = (value: unknown, fields: readonly string[]): string =>
  [fields.join(TSV_SEPARATOR), ...rowsOf(value, fields).map((row) => row.join(TSV_SEPARATOR))].join('\n');

const toTable = (value: unknown, fields: readonly string[]): string => {
  const rows = [[...fields], ...rowsOf(value, fields)];
  const widths = fields.map((_, column) => Math.max(...rows.map((row) => (row[column] ?? EMPTY_CELL).length)));
  return rows
    .map((row) => row.map((text, column) => text.padEnd(widths[column] as number)).join(TABLE_SEPARATOR).trimEnd())
    .join('\n');
};

export enum OutputFormat {
  Json = 'json',
  Tsv = 'tsv',
  Table = 'table',
}

export const isOutputFormat = (value: unknown): value is OutputFormat =>
  typeof value === 'string' && Object.values(OutputFormat).includes(value as OutputFormat);

export const render = (value: unknown, fields?: string, format: OutputFormat = OutputFormat.Json): string => {
  const selected = fields?.split(',').filter(Boolean);
  if (format === OutputFormat.Json) {
    return JSON.stringify(selected ? pick(value, selected) : value, null, 2);
  }
  if (!selected?.length) {
    throw new Error(`--format ${format} needs --fields to say which columns to print`);
  }
  return format === OutputFormat.Tsv ? toTsv(value, selected) : toTable(value, selected);
};
