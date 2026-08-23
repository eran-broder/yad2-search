import { z } from 'zod';
export const SliderOptionSchema = z.object({
    from: z.number(),
    to: z.number(),
    step: z.number().optional(),
});
export const ToggleOptionSchema = z.object({
    id: z.string(),
    title: z.string(),
});
export const PropertyOptionSchema = z.object({
    id: z.string(),
    title: z.string(),
    propertyGroupId: z.string().optional(),
});
export const PropertyGroupOptionSchema = z.object({
    id: z.string(),
    title: z.string(),
    engTitle: z.string().optional(),
    isSearchable: z.boolean().optional(),
});
export const RealestateOptionsSchema = z.object({
    property: z.array(PropertyOptionSchema).optional(),
    propertyGroup: z.array(PropertyGroupOptionSchema).optional(),
    rooms: SliderOptionSchema.optional(),
    squaremeter: SliderOptionSchema.optional(),
    squareMeterBuild: SliderOptionSchema.optional(),
    floor: SliderOptionSchema.optional(),
    price: SliderOptionSchema.optional(),
    dealType: z.array(ToggleOptionSchema).optional(),
    toilet: z.array(ToggleOptionSchema).optional(),
    warehouse: z.array(ToggleOptionSchema).optional(),
    shelter: z.array(ToggleOptionSchema).optional(),
});
export const CommercialDynamicOptionsSchema = z
    .object({ price: SliderOptionSchema.optional() })
    .catchall(ToggleOptionSchema);
