import { z } from 'zod';
import { SellerSchema, TagSchema } from '../common.js';

export const AdDatesSchema = z.object({
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  endsAt: z.string().optional(),
  rebouncedAt: z.string().optional(),
});

export const ItemBaseSchema = z.object({
  token: z.string(),
  orderId: z.number().optional(),
  adNumber: z.number().optional(),
  adType: z.string().optional(),
  categoryId: z.number().optional(),
  subcategoryId: z.number().optional(),
  statusId: z.number().optional(),
  priority: z.number().optional(),
  price: z.number().nullable().optional(),
  abovePrice: z.coerce.number().nullable().optional(),
  customer: SellerSchema.optional(),
  tags: z.array(TagSchema).optional(),
  dates: AdDatesSchema.optional(),
});
