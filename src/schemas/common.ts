import { z } from 'zod';

export const envelope = <T extends z.ZodTypeAny>(data: T) => z.object({ data });

export const EntityIdSchema = z.union([z.number(), z.string()]);
export const ids = z.union([EntityIdSchema, z.array(EntityIdSchema)]).optional();
export const toggle = z.boolean().optional();
export const page = z.number().int().positive().optional();

export const LabelSchema = z.object({
  id: EntityIdSchema.optional(),
  text: z.string().optional(),
  textEng: z.string().nullable().optional(),
});

export const LocalizedLabelSchema = z.object({
  id: EntityIdSchema.optional(),
  textHeb: z.string(),
  textEng: z.string().optional(),
});

export const TextOrLabelSchema = z.union([z.string(), LabelSchema]);

export const oneOrMany = <T extends z.ZodTypeAny>(schema: T) =>
  z.union([schema, z.array(schema)]);

export const CoordsSchema = z.object({ lon: z.number(), lat: z.number() });

export const TagSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  text: z.string().optional(),
  textEng: z.string().nullable().optional(),
  priority: z.number().optional(),
});

export const SellerSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  secondName: z.string().nullable().optional(),
  agencyName: z.string().nullable().optional(),
  agencyLogo: z.string().nullable().optional(),
  isVirtualPhoneNumber: z.boolean().optional(),
  hideNumberDuringWeekend: z.boolean().optional(),
});

export const PaginationSchema = z.object({
  total: z.number().optional(),
  totalPages: z.number().optional(),
  pages: z.number().optional(),
  perPage: z.number().optional(),
  currentPage: z.number().optional(),
});

export type Pagination = z.infer<typeof PaginationSchema>;
export type Label = z.infer<typeof LabelSchema>;
export type TextOrLabel = z.infer<typeof TextOrLabelSchema>;
export type Coords = z.infer<typeof CoordsSchema>;
export type EntityId = z.infer<typeof EntityIdSchema>;
export type Tag = z.infer<typeof TagSchema>;
export type Seller = z.infer<typeof SellerSchema>;
