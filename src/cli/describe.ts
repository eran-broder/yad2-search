import { z, type ZodType } from 'zod';
import { paramsOf } from '../core/describable.js';
import { ZodTypeName } from './zod-types.js';

const UNKNOWN_TYPE = 'unknown';
const REQUIRED_MARK = '*';
const ARRAY_SUFFIX = '[]';

const defOf = (schema: unknown): { type?: string; innerType?: unknown; options?: unknown[]; entries?: object } =>
  (schema as { _zod?: { def?: never } })?._zod?.def ?? {};

const describeType = (schema: unknown, depth = 0): string => {
  const def = defOf(schema);
  if (depth > 4 || !def.type) return UNKNOWN_TYPE;
  switch (def.type) {
    case ZodTypeName.Optional:
    case ZodTypeName.Nullable:
      return describeType(def.innerType, depth + 1);
    case ZodTypeName.Array:
      return `${describeType((def as { element?: unknown }).element, depth + 1)}${ARRAY_SUFFIX}`;
    case ZodTypeName.Union: {
      const parts = [...new Set((def.options ?? []).map((o) => describeType(o, depth + 1)))];
      const scalars = parts.filter((p) => !p.endsWith(ARRAY_SUFFIX));
      const collapsed = parts.filter(
        (p) => !(p.endsWith(ARRAY_SUFFIX) && scalars.includes(p.slice(0, -ARRAY_SUFFIX.length))),
      );
      const repeated = parts.length !== collapsed.length;
      return collapsed.join(' | ') + (repeated ? ' (or array)' : '');
    }
    case ZodTypeName.Enum:
      return Object.keys(def.entries ?? {})
        .filter((k) => Number.isNaN(Number(k)))
        .join('|');
    case ZodTypeName.Object:
      return `{${Object.keys((schema as z.ZodObject).shape ?? {}).join(',')}}`;
    default:
      return def.type;
  }
};

const isOptional = (schema: unknown): boolean => defOf(schema).type === ZodTypeName.Optional;

export const describeParams = (fn: unknown): string[] => {
  const schema = paramsOf(fn) as ZodType | undefined;
  const shape = (schema as z.ZodObject | undefined)?.shape;
  if (!shape) return [];
  return Object.entries(shape).map(
    ([name, field]) => `${name}${isOptional(field) ? '' : REQUIRED_MARK}: ${describeType(field)}`,
  );
};

const REST_PREFIX = '...';
const PARAMS_ARGUMENT = 'params';
const OPEN_PAREN = '(';
const OPEN_BRACE = '{';
const ASSIGN = '=';
const COMMA = ',';
const NESTING: Record<string, number> = { '(': 1, '[': 1, '{': 1, ')': -1, ']': -1, '}': -1 };
const LEADING_IDENTIFIER = /^\s*([A-Za-z_$][\w$]*)/;

/**
 * The parameter list between the outermost parentheses. Scanning for balance rather than
 * matching `[^)]*` matters because defaults nest: `(params, { maxChunks = N } = {})` would
 * otherwise be truncated at the first inner brace.
 */
const parameterSource = (source: string): string => {
  const start = source.indexOf(OPEN_PAREN);
  if (start === -1) return '';
  let depth = 0;
  for (let i = start; i < source.length; i += 1) {
    depth += NESTING[source[i] as string] ?? 0;
    if (depth === 0) return source.slice(start + 1, i);
  }
  return '';
};

/** Split on the commas that separate parameters, ignoring commas inside defaults. */
const topLevelParts = (source: string): string[] => {
  const parts: string[] = [];
  let depth = 0;
  let current = '';
  for (const char of source) {
    if (char === COMMA && depth === 0) {
      parts.push(current);
      current = '';
      continue;
    }
    depth += NESTING[char] ?? 0;
    current += char;
  }
  parts.push(current);
  return parts;
};

/** Everything before this parameter's own `=` default, ignoring `=` nested inside it. */
const beforeDefault = (part: string): string => {
  let depth = 0;
  for (let i = 0; i < part.length; i += 1) {
    const char = part[i] as string;
    if (char === ASSIGN && depth === 0) return part.slice(0, i);
    depth += NESTING[char] ?? 0;
  }
  return part;
};

/** `{ maxChunks = N } = {}` reads as `{maxChunks}`, not as a truncated fragment. */
const nameOf = (part: string): string => {
  const declared = beforeDefault(part).trim();
  if (!declared.startsWith(OPEN_BRACE)) return declared;
  const keys = topLevelParts(declared.slice(1, -1))
    .map((entry) => LEADING_IDENTIFIER.exec(beforeDefault(entry))?.[1])
    .filter((key): key is string => key !== undefined);
  return `${OPEN_BRACE}${keys.join(', ')}}`;
};

/**
 * Positional parameter names, read off the compiled source. Methods built by
 * `createFeed` carry a Zod schema instead; everything else — `images.save(url, path)`,
 * `items.realestate(token)` — is plain positional and would otherwise describe itself
 * as taking nothing at all.
 */
export const describePositional = (fn: unknown): string[] => {
  if (typeof fn !== 'function') return [];
  const captured = parameterSource(fn.toString()).trim();
  if (!captured) return [];
  return topLevelParts(captured)
    .map(nameOf)
    .filter((name) => name.length > 0 && !name.startsWith(REST_PREFIX));
};

/**
 * Full help for any callable. Both halves matter and neither implies the other:
 * `market.collection(name, params)` takes a positional name *and* a schema-checked
 * options object, so showing only one of them sends the caller down the wrong path.
 */
export const describeSignature = (fn: unknown, path: string): string => {
  const positional = describePositional(fn);
  const params = describeParams(fn);

  if (!positional.length) return `${path}() takes no arguments`;

  const lines = [`${path}(${positional.join(', ')})  — pass each argument as its own JSON value.`];

  if (params.length) {
    // The schema always describes the filter bag, which this codebase names `params`
    // — never the trailing `options`/pagination argument that sits beside it.
    const described = positional.find((name) => name === PARAMS_ARGUMENT) ?? (positional[0] as string);
    lines.push('', `${described}:`, ...params.map((p) => `  ${p}`));
    lines.push('', `  * = required.  e.g. node dist/cli.js ${path} '{"…":…}'`);
  } else {
    lines.push(
      `  e.g. node dist/cli.js ${path} ${positional.map((p) => `'"<${p}>"'`).join(' ')}`,
      `  See references/recipes.md for worked examples.`,
    );
  }

  lines.push(`  Add --paths to see the field names its result actually has.`);
  return lines.join('\n');
};
