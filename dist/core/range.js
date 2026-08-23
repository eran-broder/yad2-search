import { z } from 'zod';
export const RangeSchema = z.object({ from: z.number(), to: z.number() });
const RANGE_PATTERN = /^(-?\d+(?:\.\d+)?)-(-?\d+(?:\.\d+)?)$/;
export const serializeRange = (value) => `${value.from}-${value.to}`;
export const range = (from, to) => RangeSchema.parse({ from, to });
export const parseRange = (value) => {
    const match = RANGE_PATTERN.exec(value.trim());
    return match ? { from: Number(match[1]), to: Number(match[2]) } : null;
};
export const toRange = (value) => typeof value === 'number' ? { from: value, to: value } : parseRange(value);
