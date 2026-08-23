import { z } from 'zod';
import { Yad2Category } from '../core/enums/index.js';
export declare const NearbyParamsSchema: z.ZodObject<{
    lat: z.ZodNumber;
    lon: z.ZodNumber;
    catID: z.ZodEnum<typeof Yad2Category>;
    limit: z.ZodOptional<z.ZodNumber>;
    nextChunk: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type NearbyParams = z.infer<typeof NearbyParamsSchema>;
