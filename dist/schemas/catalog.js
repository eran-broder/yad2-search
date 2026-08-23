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
export const isCatalogRange = (option) => !Array.isArray(option);
export const isCatalogEntries = (option) => Array.isArray(option);
