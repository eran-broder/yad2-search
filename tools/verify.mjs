import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { disposeSharedServer, sharedServer } from '../dist/core/managed-server.js';

const run = promisify(execFile);
const CHECK_TIMEOUT_MS = 300000;

const SUMMARY_PATTERNS = [/exercised \d+\/\d+ methods/, /no magic strings: \d+ findings/, /every value accepted/, /validated \d+ records/, /\d+\/\d+ steps ok/, /pass \d+/, /MISSING \(\d+\)/, /rejected:/];

const summarize = (stdout) =>
  stdout
    .trim()
    .split('\n')
    .filter((line) => SUMMARY_PATTERNS.some((pattern) => pattern.test(line)))
    .slice(-2)
    .map((line) => line.trim())
    .join(' · ');
// Every check needs a browser. Start one server here and share its port rather than
// letting eight child processes each spawn (and pay for) their own Chromium.
// Passing `undefined` through execFile would arrive as the string "undefined" and
// resolve to port NaN, so only forward a port we actually have.
const port = process.argv[2] ?? process.env.PWHS_PORT ?? String((await sharedServer()).port);
const argsFor = (script) => [script, port];


const CHECKS = [
  ['no magic strings', 'tools/no-magic-strings.mjs', /0 findings/g, 1],
  ['schema coverage', 'tools/coverage-all.mjs', /MISSING: none/g, 7],
  ['param parity', 'tools/param-parity.mjs', /PARITY OK/g, 1],
  ['enum values', 'tools/enum-check.mjs', /every value accepted/g, 1],
  ['error behaviour', 'tools/error-behavior.mjs', /error behaviour: 0 failures/g, 1],
  ['surface exercise', 'tools/exercise-surface.mjs', /surface exercise: 0 failures/g, 1],
  ['bulk validation', 'tools/validate-bulk.mjs', /distinct failures: 0/g, 1],
  ['integration soak', 'examples/soak.mjs', /failures: 0/g, 1],
];

let failed = 0;

for (const [label, script, pattern, expected] of CHECKS) {
  const started = Date.now();
  try {
    const { stdout } = await run('node', argsFor(script), {
      maxBuffer: 32 * 1024 * 1024,
      timeout: CHECK_TIMEOUT_MS,
    });
    const hits = (stdout.match(pattern) ?? []).length;
    const ok = hits >= expected;
    if (!ok) failed += 1;
    const detail = summarize(stdout);
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${label.padEnd(20)} ${((Date.now() - started) / 1000).toFixed(1)}s  ${detail}`);
    if (!ok) console.log(stdout.split('\n').filter((l) => /MISSING \(|MISMATCH|x\d+ /.test(l)).slice(0, 6).map((l) => '        ' + l).join('\n'));
  } catch (error) {
    failed += 1;
    console.log(`FAIL  ${label.padEnd(20)} ${String(error.stdout ?? error.message).slice(0, 200)}`);
  }
}

await disposeSharedServer();

console.log(failed === 0 ? '\nALL CHECKS PASSED' : `\n${failed} CHECK(S) FAILED`);
process.exitCode = failed === 0 ? 0 : 1;
