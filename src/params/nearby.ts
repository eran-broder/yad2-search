import { z } from 'zod';
import { Yad2Category } from '../core/enums/index.js';
import { EntityIdSchema } from '../schemas/common.js';
import { pageField } from './fields.js';

export const NearbyParamsSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  catID: z.enum(Yad2Category),
  limit: pageField,
  nextChunk: EntityIdSchema.optional(),
});

export type NearbyParams = z.infer<typeof NearbyParamsSchema>;
