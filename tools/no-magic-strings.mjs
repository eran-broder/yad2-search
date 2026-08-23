import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = 'src';
const DEFINITION_DIRS = ['src/core/enums'];
const ALLOWED_FILES = new Set(['src/cli/zod-types.ts']);

const DEFINITION_LINE = [
  /^\s*import\s/,
  /^\s*export .* from /,
  /^\s*[A-Za-z_]\w* = '[^']*',?\s*$/,
  /^\s*\|\s*'[^']*'/,
  /^\s*(export )?type \w+ =/,
  /Symbol\.for\(/,
  /^\s*const [A-Z_]+ = '[^']*';\s*$/,
];

const TYPEOF_OPERAND =
  /typeof [\w.()[\]]+ [!=]== '(string|number|boolean|object|function|undefined|symbol|bigint)'/g;

const TYPE_INDEX = /\w+\['[^']*'\]/g;

const PARAM_CONTEXT = /parseParams\(\s*'[^']*'/g;

const IDENTIFIER_LIKE = /^[A-Za-z_][\w.\-/]*$/;

const ALLOWED_LITERAL = new Set(['zod']);

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) return walk(full);
      return entry.name.endsWith('.ts') ? [full] : [];
    }),
  );
  return nested.flat();
};

const LITERAL = /'([^'\\]*)'/g;

const findings = [];

for (const file of await walk(ROOT)) {
  const posix = relative('.', file).split('\\').join('/');
  if (DEFINITION_DIRS.some((dir) => posix.startsWith(dir))) continue;
  if (ALLOWED_FILES.has(posix)) continue;

  const source = await readFile(file, 'utf8');
  source.split('\n').forEach((line, index) => {
    if (DEFINITION_LINE.some((pattern) => pattern.test(line))) return;
    const cleaned = line
      .replace(TYPEOF_OPERAND, '')
      .replace(TYPE_INDEX, '')
      .replace(PARAM_CONTEXT, '');
    for (const [, value] of cleaned.matchAll(LITERAL)) {
      if (ALLOWED_LITERAL.has(value)) continue;
      if (!IDENTIFIER_LIKE.test(value)) continue;
      if (value.endsWith('.js')) continue;
      findings.push(`${posix}:${index + 1}  '${value}'`);
    }
  });
}

console.log(
  findings.length === 0
    ? 'no magic strings: 0 findings'
    : `magic strings found (${findings.length}):`,
);
findings.forEach((finding) => console.log(`  ${finding}`));
process.exit(findings.length === 0 ? 0 : 1);
