import { z } from 'zod';
import { Yad2ParamsError } from './errors.js';
export const parseParams = (context, schema, value) => {
    const parsed = schema.safeParse(value);
    if (!parsed.success)
        throw new Yad2ParamsError(context, z.prettifyError(parsed.error));
    return parsed.data;
};
