import { z } from 'zod';

export const CatalogEntrySchema = z.object({
  id: z.number(),
  title: z.string(),
  engTitle: z.string().nullable().optional(),
  hex: z.string().optional(),
});

export const CatalogModelSchema = CatalogEntrySchema.extend({
  manufacturer: z.object({ id: z.number(), title: z.string() }).optional(),
});

export const CatalogRangeSchema = z.object({
  from: z.number(),
  to: z.number(),
  step: z.number().optional(),
});

export const CatalogOptionSchema = z.union([
  z.array(CatalogEntrySchema),
  CatalogRangeSchema,
]);

const entries = z.array(CatalogEntrySchema).optional();

export const VehicleCatalogSchema = z.object({
  manufacturer: entries,
  model: z.array(CatalogModelSchema).optional(),
  subModel: z.array(CatalogModelSchema).optional(),
  year: CatalogRangeSchema.optional(),
  electricRange: CatalogRangeSchema.optional(),
  batteryCapacity: CatalogRangeSchema.optional(),
});

export const VehicleCatalogOptionsSchema = z.record(z.string(), CatalogOptionSchema);

export type CatalogEntry = z.infer<typeof CatalogEntrySchema>;
export type CatalogModel = z.infer<typeof CatalogModelSchema>;
export type CatalogRange = z.infer<typeof CatalogRangeSchema>;
export type CatalogOption = z.infer<typeof CatalogOptionSchema>;
export type VehicleCatalog = z.infer<typeof VehicleCatalogSchema>;
export type VehicleCatalogOptions = z.infer<typeof VehicleCatalogOptionsSchema>;

export const isCatalogRange = (option: CatalogOption): option is CatalogRange =>
  !Array.isArray(option);

export const isCatalogEntries = (option: CatalogOption): option is CatalogEntry[] =>
  Array.isArray(option);
