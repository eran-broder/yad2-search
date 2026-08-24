#!/usr/bin/env node
import { parseArgs } from './cli/args.js';
import { discover, findCallable } from './cli/reflect.js';
import { OutputFormat, describePaths, isOutputFormat, missingFields, render, resolve, } from './cli/render.js';
import { clientFrom } from './cli/client-factory.js';
import { describeSignature } from './cli/describe.js';
import { Yad2Error } from './core/errors.js';
import { disposeSharedServer } from './core/managed-server.js';
import { rowsOf } from './core/describable.js';
const usage = (paths) => [
    'Usage: y2 <resource.method> [jsonArg...] [--port N] [--transport http|browser|resilient]',
    '       [--fields a,b,c] [--format json|tsv|table] [--paths] [--interval ms]',
    '',
    'Add --paths to any command to list the field names its result actually has.',
    '',
    'Add --help to any command for its parameters.',
    '',
    'Commands:',
    ...paths.map((path) => `  ${path}`),
].join('\n');
const formatFrom = (flag) => {
    if (flag === undefined || flag === true)
        return OutputFormat.Json;
    if (isOutputFormat(flag))
        return flag;
    throw new Yad2Error(`Unknown --format "${String(flag)}". Use ${Object.values(OutputFormat).join(', ')}.`);
};
const main = async () => {
    const { path, args, flags } = parseArgs(process.argv.slice(2));
    const client = clientFrom(flags);
    const callables = discover(client);
    if (!path) {
        console.log(usage(callables.map((callable) => callable.path)));
        return 0;
    }
    const callable = findCallable(callables, path);
    if (!callable) {
        console.error(`Unknown command: ${path}\n`);
        console.error(usage(callables.map((c) => c.path)));
        return 1;
    }
    if (flags.help) {
        console.log(describeSignature(callable.target, path));
        return 0;
    }
    const result = await resolve(callable.invoke(...args));
    const fields = typeof flags.fields === 'string' ? flags.fields : undefined;
    // Asking for columns means asking about the listings, not the envelope around them.
    const toRows = rowsOf(callable.target);
    const wantsRows = (fields !== undefined || flags.paths === true) && !Array.isArray(result);
    const shaped = wantsRows && toRows ? toRows(result) : result;
    if (flags.paths) {
        console.log(describePaths(shaped));
        return 0;
    }
    const selected = fields?.split(',').filter(Boolean) ?? [];
    const missing = missingFields(shaped, selected);
    if (missing.length) {
        console.error(`warning: no data at ${missing.join(', ')} — run the same command with --paths to list the real field names`);
    }
    console.log(render(shaped, fields, formatFrom(flags.format)));
    return 0;
};
// Never process.exit() here: with a live Chromium session that aborts the runtime on
// Windows (libuv UV_HANDLE_CLOSING) and turns a successful run into exit code 127.
// Release the browser, set exitCode, and let the event loop drain on its own.
const finish = async (code) => {
    await disposeSharedServer();
    process.exitCode = code;
};
main()
    .then(finish)
    .catch(async (error) => {
    console.error(error instanceof Yad2Error || error instanceof Error ? error.message : error);
    await finish(1);
});
