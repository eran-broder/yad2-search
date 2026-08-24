// Exercises the CLI as a caller experiences it: exit codes, stdout shape, stderr warnings.
//
// The SDK was covered by seven live checks and the CLI by none, which is how it shipped
// exiting 127 on every successful browser run — the output was right, so nothing noticed.
// Anything a script or CI would branch on is asserted here.
//
//   node tools/cli-smoke.mjs [port]
//
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const CLI = 'dist/cli.js';
const TIMEOUT_MS = 120000;
const HAIFA = '{"region":5,"topArea":25,"area":5,"city":4000,"neighborhood":612,"minRooms":5,"property":1}';

const supplied = process.argv[2] ?? process.env.PWHS_PORT;
const transport = supplied ? ['--transport', 'browser', '--port', supplied] : ['--transport', 'resilient'];

const failures = [];
const pass = (name) => console.log(`ok    ${name}`);
const fail = (name, detail) => {
  failures.push(`${name} :: ${detail}`);
  console.log(`FAIL  ${name} :: ${detail}`);
};

/** execFile rejects on a non-zero exit, so both outcomes have to be normalised. */
const cli = async (args) => {
  try {
    const { stdout, stderr } = await run('node', [CLI, ...args], { timeout: TIMEOUT_MS, maxBuffer: 32 * 1024 * 1024 });
    return { code: 0, stdout, stderr };
  } catch (error) {
    return { code: error.code ?? 1, stdout: error.stdout ?? '', stderr: error.stderr ?? String(error.message) };
  }
};

const check = async (name, args, expect) => {
  const result = await cli(args);
  const problem = expect(result);
  if (problem) fail(name, problem);
  else pass(name);
};

const expectCode = (wanted) => (result) =>
  result.code === wanted ? undefined : `exit ${result.code}, wanted ${wanted} (${result.stderr.trim().slice(0, 80)})`;

const both = (...checks) => (result) => checks.map((c) => c(result)).find(Boolean);

// A successful run must report success. This is the regression that started this file:
// with a live browser session the process aborted after printing correct output.
await check('offline lookup exits 0', ['address.locate', '"כרמליה חיפה"'], expectCode(0));

await check(
  'browser-backed search exits 0',
  ['realestate.forSale.search', HAIFA, ...transport, '--fields', 'token,price', '--format', 'tsv'],
  both(expectCode(0), (r) => (r.stdout.split('\n').length > 2 ? undefined : 'no rows returned')),
);

await check('bad params exit 1', ['realestate.forSale.search', '{"city":4000}'], expectCode(1));

await check(
  'unknown transport exits 1',
  ['address.regions', '--transport', 'bogus'],
  both(expectCode(1), (r) => (r.stderr.includes('bogus') ? undefined : 'error does not name the bad value')),
);

await check('unknown command exits 1', ['not.a.command'], expectCode(1));

await check(
  'positional help names its arguments',
  ['images.save', '--help'],
  both(expectCode(0), (r) => (r.stdout.includes('(url, path)') ? undefined : 'help does not show the signature')),
);

await check(
  'a wrong --fields path warns on stderr',
  ['address.locate', '"חיפה"', '--fields', 'nope'],
  (r) => (r.stderr.includes('--paths') ? undefined : 'no warning pointing at --paths'),
);

console.log(failures.length === 0 ? '\ncli smoke: 0 failures' : `\ncli smoke: ${failures.length} failures`);
process.exitCode = failures.length === 0 ? 0 : 1;
