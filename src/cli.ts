#!/usr/bin/env node
import { parseArgs } from './cli/args.js';
import { discover, findCallable } from './cli/reflect.js';
import { render, resolve } from './cli/render.js';
import { clientFrom } from './cli/client-factory.js';
import { describeParams } from './cli/describe.js';
import { Yad2Error } from './core/errors.js';

const usage = (paths: readonly string[]): string =>
  [
    'Usage: y2 <resource.method> [jsonArg...] [--port N] [--transport http|browser|resilient]',
    '       [--fields a,b,c] [--interval ms]',
    '',
    'Commands:',
    ...paths.map((path) => `  ${path}`),
  ].join('\n');

const main = async (): Promise<number> => {
  const { path, args, flags } = parseArgs(process.argv.slice(2));
  const client = clientFrom(flags);
  const callables = discover(client as unknown as Record<string, unknown>);

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
    const params = describeParams(callable.target);
    const body = params.length
      ? [`${path} params:`, ...params.map((p) => `  ${p}`)].join('\n')
      : `${path} takes no typed params`;
    console.log(body);
    return 0;
  }

  const result = await resolve(callable.invoke(...args));
  const fields = typeof flags.fields === 'string' ? flags.fields : undefined;
  console.log(render(result, fields));
  return 0;
};

main()
  .then((code) => process.exit(code))
  .catch((error: unknown) => {
    console.error(error instanceof Yad2Error ? error.message : error);
    process.exit(1);
  });
