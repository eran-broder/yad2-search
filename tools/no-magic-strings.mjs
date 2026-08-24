import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = 'src';
const DEFINITION_DIRS = ['src/core/enums'];
// Files whose whole purpose is to define the constants everything else refers to.
const ALLOWED_FILES = new Set(['src/cli/zod-types.ts', 'src/core/identity.ts']);
const SOURCE_EXTENSIONS = ['.ts'];
const NEWLINE = '\n';
const toPosix = (file) => relative('.', file).split('\\').join('/');
// The magic-string rule is for the SDK only, but a corrupt byte anywhere is a defect —
// including in the tool doing the checking, which is not otherwise linted at all.
const SCANNED_ROOTS = ['src', 'tools', 'examples'];
const SCANNED_EXTENSIONS = ['.ts', '.mjs', '.js'];

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

const walk = async (dir, extensions = SOURCE_EXTENSIONS) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) return walk(full, extensions);
      return extensions.some((extension) => entry.name.endsWith(extension)) ? [full] : [];
    }),
  );
  return nested.flat();
};

const LITERAL = /'([^'\\]*)'/g;

// Comments are prose, not code — a quoted word in an explanation is not a magic string.
const LINE_COMMENT = /^\s*(\/\/|\/\*|\*)/;

// Anything below 0x20 other than tab, plus the DEL and BOM code points.
const CONTROL_CHARACTER = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\uFEFF]/;

const findings = [];

for (const file of await walk(ROOT)) {
  const posix = relative('.', file).split('\\').join('/');
  if (DEFINITION_DIRS.some((dir) => posix.startsWith(dir))) continue;
  if (ALLOWED_FILES.has(posix)) continue;

  const source = await readFile(file, 'utf8');

  source.split('\n').forEach((line, index) => {
    if (LINE_COMMENT.test(line)) return;
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

// A stray control character inside a string literal compiles without complaint and
// silently changes behaviour, so it has to be caught by reading the bytes.
for (const root of SCANNED_ROOTS) {
  for (const file of await walk(root, SCANNED_EXTENSIONS)) {
    const posix = toPosix(file);
    const source = await readFile(file, 'utf8');
    source.split(NEWLINE).forEach((line, index) => {
      const control = CONTROL_CHARACTER.exec(line);
      if (!control) return;
      const code = (control[0].codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, '0');
      findings.push(`${posix}:${index + 1}  control character U+${code} in source`);
    });
  }
}

console.log(
  findings.length === 0
    ? 'no magic strings: 0 findings'
    : `magic strings found (${findings.length}):`,
);
findings.forEach((finding) => console.log(`  ${finding}`));
process.exit(findings.length === 0 ? 0 : 1);
