import { z } from 'zod';

export const RangeSchema = z.object({ from: z.number(), to: z.number() });

export type Range = z.infer<typeof RangeSchema>;

const RANGE_PATTERN = /^(-?\d+(?:\.\d+)?)-(-?\d+(?:\.\d+)?)$/;

export const serializeRange = (value: Range): string => `${value.from}-${value.to}`;

export const range = (from: number, to: number): Range => RangeSchema.parse({ from, to });

export const parseRange = (value: string): Range | null => {
  const match = RANGE_PATTERN.exec(value.trim());
  return match ? { from: Number(match[1]), to: Number(match[2]) } : null;
};

export const toRange = (value: number | string): Range | null =>
  typeof value === 'number' ? { from: value, to: value } : parseRange(value);
