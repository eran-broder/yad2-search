import { z } from 'zod';
import { MarketCondition } from '../core/enums/index.js';
export declare const MarketFilterParamsSchema: z.ZodObject<{
    isSMB: z.ZodPipe<z.ZodOptional<z.ZodBoolean>, z.ZodTransform<string | undefined, boolean | undefined>>;
    minPrice: z.ZodOptional<z.ZodNumber>;
    maxPrice: z.ZodOptional<z.ZodNumber>;
    cities: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    areas: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    productTypes: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    conditions: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<typeof MarketCondition>, z.ZodArray<z.ZodEnum<typeof MarketCondition>>]>>;
}, z.core.$strip>;
export declare const MarketSearchParamsSchema: z.ZodObject<{
    isSMB: z.ZodPipe<z.ZodOptional<z.ZodBoolean>, z.ZodTransform<string | undefined, boolean | undefined>>;
    minPrice: z.ZodOptional<z.ZodNumber>;
    maxPrice: z.ZodOptional<z.ZodNumber>;
    cities: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    areas: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    productTypes: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    conditions: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<typeof MarketCondition>, z.ZodArray<z.ZodEnum<typeof MarketCondition>>]>>;
    q: z.ZodString;
    scrollSessionId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const MarketCollectionParamsSchema: z.ZodObject<{
    isSMB: z.ZodPipe<z.ZodOptional<z.ZodBoolean>, z.ZodTransform<string | undefined, boolean | undefined>>;
    minPrice: z.ZodOptional<z.ZodNumber>;
    maxPrice: z.ZodOptional<z.ZodNumber>;
    cities: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    areas: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    productTypes: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    conditions: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<typeof MarketCondition>, z.ZodArray<z.ZodEnum<typeof MarketCondition>>]>>;
    scrollSessionId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MarketSearchParams = z.input<typeof MarketSearchParamsSchema>;
export type MarketCollectionParams = z.input<typeof MarketCollectionParamsSchema>;
