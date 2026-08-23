import { z } from 'zod';
import { MarketCondition } from '../core/enums/index.js';
import { PriceFields, idList } from './fields.js';

const booleanText = z
  .boolean()
  .optional()
  .transform((value) => (value === undefined ? undefined : String(value)));

export const MarketFilterParamsSchema = z.object({
  cities: idList,
  areas: idList,
  productTypes: idList,
  conditions: z.union([z.enum(MarketCondition), z.array(z.enum(MarketCondition))]).optional(),
  ...PriceFields,
  isSMB: booleanText,
});

export const MarketSearchParamsSchema = MarketFilterParamsSchema.extend({
  q: z.string().min(1),
  scrollSessionId: z.string().optional(),
});

export const MarketCollectionParamsSchema = MarketFilterParamsSchema.extend({
  scrollSessionId: z.string().optional(),
});

export type MarketSearchParams = z.input<typeof MarketSearchParamsSchema>;
export type MarketCollectionParams = z.input<typeof MarketCollectionParamsSchema>;
