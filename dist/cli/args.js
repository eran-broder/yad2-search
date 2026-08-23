const parseValue = (raw) => {
    try {
        return JSON.parse(raw);
    }
    catch {
        return raw;
    }
};
const FLAG_PREFIX = '--';
const FLAG_ASSIGNMENT = '=';
const isFlag = (token) => token.startsWith(FLAG_PREFIX);
const readFlag = (token, next) => {
    const [name, inline] = token.slice(FLAG_PREFIX.length).split(FLAG_ASSIGNMENT, 2);
    if (inline !== undefined)
        return [name, inline, 0];
    if (next !== undefined && !isFlag(next))
        return [name, next, 1];
    return [name, true, 0];
};
export const parseArgs = (argv) => {
    const flags = {};
    const positional = [];
    for (let i = 0; i < argv.length; i += 1) {
        const token = argv[i];
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
