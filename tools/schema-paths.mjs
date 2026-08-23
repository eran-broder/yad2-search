import { WRAPPER_TYPES, ZodTypeName } from '../dist/cli/zod-types.js';

const defOf = (schema) => schema?._zod?.def;

const unwrap = (schema) => {
  const def = defOf(schema);
  if (!def) return schema;
  if (WRAPPER_TYPES.includes(def.type)) {
    return unwrap(def.innerType);
  }
  return schema;
};

export const recordPrefixes = new Set();

export const schemaPaths = (schema, prefix = '', depth = 0, out = new Set()) => {
  if (depth > 5) return out;
  const inner = unwrap(schema);
  const def = defOf(inner);
  if (!def) return out;

  if (def.type === ZodTypeName.Object) {
    if (def.catchall) recordPrefixes.add(prefix);
    for (const [key, child] of Object.entries(inner.shape ?? {})) {
      const path = prefix ? `${prefix}.${key}` : key;
      out.add(path);
      schemaPaths(child, path, depth + 1, out);
    }
    return out;
  }
  if (def.type === ZodTypeName.Record) {
    recordPrefixes.add(prefix);
    return out;
  }
  if (def.type === ZodTypeName.Array) return schemaPaths(def.element, prefix, depth, out);
  if (def.type === ZodTypeName.Union) {
    (def.options ?? []).forEach((option) => schemaPaths(option, prefix, depth, out));
    return out;
  }
  return out;
};

const dataPaths = (value, prefix = '', depth = 0, out = new Set()) => {
  if (depth > 5 || value === null || typeof value !== 'object') return out;
  if (Array.isArray(value)) {
    value.slice(0, 12).forEach((item) => dataPaths(item, prefix, depth, out));
    return out;
  }
  for (const [key, child] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key;
    out.add(path);
    dataPaths(child, path, depth + 1, out);
  }
  return out;
};

export const diff = (label, schema, samples) => {
  const known = schemaPaths(schema);
  const actual = new Set();
  samples.forEach((s) => dataPaths(s).forEach((p) => actual.add(p)));

  const underRecord = (p) => [...recordPrefixes].some((r) => r && p.startsWith(r + '.'));
  const missing = [...actual].filter((p) => !known.has(p) && !underRecord(p)).sort();
  const unused = [...known].filter((p) => !actual.has(p)).sort();

  console.log(`\n### ${label}`);
  console.log(`schema ${known.size} paths · data ${actual.size} paths · ${samples.length} samples`);
  console.log(missing.length ? `MISSING (${missing.length}): ${missing.join(', ')}` : 'MISSING: none');
  if (unused.length) console.log(`unused in sample (${unused.length}): ${unused.slice(0, 20).join(', ')}`);
  return { missing, unused };
};
