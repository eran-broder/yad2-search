import { z } from 'zod';
import { Yad2ParamsError } from './errors.js';
export const parseParams = (context, schema, value) => {
    const parsed = schema.safeParse(value);
    if (!parsed.success)
        throw new Yad2ParamsError(context, z.prettifyError(parsed.error));
    return parsed.data;
};
/**
 * Validate a positional enum argument. Only the params object goes through Zod, so a bad
 * positional value otherwise either builds a nonsense URL (`/vehicles-lorries-catalog`,
 * which comes back as a bot challenge) or gets filtered out client-side and returns an
 * empty list indistinguishable from "no results".
 */
export const parseEnumArg = (context, name, allowed, value) => {
    const values = Object.values(allowed);
    if (values.includes(value))
        return value;
    throw new Yad2ParamsError(context, `${name} must be one of ${values.join(', ')} — received ${JSON.stringify(value)}`);
};
