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
