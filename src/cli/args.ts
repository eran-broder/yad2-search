export interface ParsedArgs {
  readonly path: string | undefined;
  readonly args: unknown[];
  readonly flags: Readonly<Record<string, string | boolean>>;
}

const parseValue = (raw: string): unknown => {
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
};

const FLAG_PREFIX = '--';
const FLAG_ASSIGNMENT = '=';

const isFlag = (token: string): boolean => token.startsWith(FLAG_PREFIX);

const readFlag = (token: string, next: string | undefined): [string, string | boolean, number] => {
  const [name, inline] = token.slice(FLAG_PREFIX.length).split(FLAG_ASSIGNMENT, 2);
  if (inline !== undefined) return [name as string, inline, 0];
  if (next !== undefined && !isFlag(next)) return [name as string, next, 1];
  return [name as string, true, 0];
};

export const parseArgs = (argv: readonly string[]): ParsedArgs => {
  const flags: Record<string, string | boolean> = {};
  const positional: string[] = [];

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i] as string;
    if (!isFlag(token)) {
      positional.push(token);
      continue;
    }
    const [name, value, consumed] = readFlag(token, argv[i + 1]);
    flags[name] = value;
    i += consumed;
  }

  const [path, ...rest] = positional;
  return { path, args: rest.map(parseValue), flags };
};
