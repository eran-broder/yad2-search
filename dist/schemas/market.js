import { z } from 'zod';
import { LocalizedLabelSchema } from './common.js';
export const MarketAddressSchema = z.object({
    area: LocalizedLabelSchema.optional(),
    city: LocalizedLabelSchema.optional(),
});
export const MarketConditionSchema = z.object({
    id: z.string(),
    textHeb: z.string(),
});
export const MarketProductTypeSchema = z.object({
    id: z.string(),
    textHeb: z.string(),
});
export const MarketItemSchema = z.object({
    id: z.number(),
    adId: z.string().optional(),
    title: z.string().optional(),
    urlIdentifier: z.string().optional(),
    productUrl: z.string().optional(),
    categoryId: z.number().optional(),
    productType: MarketProductTypeSchema.optional(),
    price: z.number().nullable().optional(),
    previousPrice: z.number().nullable().optional(),
    custId: z.number().optional(),
    agencyName: z.string().nullable().optional(),
    orderTypeId: z.number().optional(),
    isSMB: z.boolean().optional(),
    isVerified: z.boolean().optional(),
    isDressed: z.boolean().optional(),
    condition: MarketConditionSchema.optional(),
    tags: z.array(z.string()).optional(),
    promotions: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
    video: z.string().nullable().optional(),
    address: MarketAddressSchema.optional(),
});
export const MarketSearchSchema = z.object({
    items: z.array(MarketItemSchema),
    totalItems: z.number(),
    totalPages: z.number(),
    currentPage: z.number(),
});
export const MarketSuggestionSchema = z.object({
    name: z.string(),
    highlight_name: z.string().optional(),
});
export const MarketCategorySchema = z.object({
    id: z.string(),
    name: z.string(),
    heName: z.string().optional(),
    enName: z.string().optional(),
    url: z.string().optional(),
    eHandle: z.string().optional(),
    collectionId: z.union([z.number(), z.string()]).optional(),
    circleImg: z.string().optional(),
});
export const MarketAutocompleteSchema = z.object({
    searches: z.array(MarketSuggestionSchema).optional(),
    categories: z.array(MarketCategorySchema).optional(),
});
export const MarketMenuItemSchema = z.object({
    id: z.string(),
    title: z.string(),
    collectionId: z.string().optional(),
    imageUrl: z.string().optional(),
});
export const MarketFilterOptionSchema = z.object({
    value: z.union([z.string(), z.boolean()]),
    text: z.string(),
    count: z.number().optional(),
});
export const MarketAreaOptionSchema = MarketFilterOptionSchema.extend({
    areaId: z.string().optional(),
    areaText: z.string().optional(),
    topAreaId: z.string().optional(),
    topAreaText: z.string().optional(),
    cityId: z.string().optional(),
    cityText: z.string().optional(),
});
export const MarketAttributeSchema = z.object({
    attributeId: z.number(),
    attributeTextHeb: z.string().optional(),
    attributeTextEng: z.string().optional(),
    totalOptionsCount: z.number().optional(),
    options: z.array(MarketFilterOptionSchema).optional(),
});
export const MarketFiltersSchema = z.object({
    areas: z.array(MarketAreaOptionSchema).optional(),
    cities: z.array(MarketAreaOptionSchema).optional(),
    price: z.object({ min: z.number(), max: z.number() }).optional(),
    conditions: z.array(MarketFilterOptionSchema).optional(),
    productTypes: z.array(MarketFilterOptionSchema).optional(),
    attributes: z.array(MarketAttributeSchema).optional(),
    isSMB: z.array(MarketFilterOptionSchema).optional(),
});
