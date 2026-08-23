import { z } from 'zod';
export declare const RangeSchema: z.ZodObject<{
    from: z.ZodNumber;
    to: z.ZodNumber;
}, z.core.$strip>;
export type Range = z.infer<typeof RangeSchema>;
export declare const serializeRange: (value: Range) => string;
export declare const range: (from: number, to: number) => Range;
export declare const parseRange: (value: string) => Range | null;
export declare const toRange: (value: number | string) => Range | null;
