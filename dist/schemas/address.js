import { z } from 'zod';
import { EntityIdSchema } from './common.js';
import { AddressEntity } from '../core/enums/index.js';
const id = EntityIdSchema;
export const PlaceSchema = z.object({
    type_weight: z.number().optional(),
    title_text: z.string().optional(),
    full_title_text: z.string().optional(),
    region_id: id.optional(),
    top_area_id: id.optional(),
    area_id: id.optional(),
    city_id: id.optional(),
    hood_id: id.optional(),
    street_id: id.optional(),
});
export const RegionSchema = PlaceSchema.extend({
    region_id: id,
    region_heb: z.string(),
    region_eng: z.string().nullable().optional(),
});
export const TopAreaSchema = PlaceSchema.extend({
    top_area_id: id,
    top_area_heb: z.string(),
    top_area_eng: z.string().nullable().optional(),
});
export const AreaSchema = PlaceSchema.extend({
    area_id: id,
    area_heb: z.string(),
    area_eng: z.string().nullable().optional(),
});
export const CitySchema = PlaceSchema.extend({
    city_id: id,
    city_heb: z.string(),
    city_eng: z.string().nullable().optional(),
});
export const HoodSchema = PlaceSchema.extend({
    hood_id: id,
    hood_heb: z.string(),
    hood_eng: z.string().nullable().optional(),
});
export const StreetSchema = PlaceSchema.extend({
    street_id: id,
    street_heb: z.string(),
});
export const PaginatorSchema = z.object({
    limit: z.number().optional(),
    offset: z.number().optional(),
    total_pages: z.number().optional(),
    current_page: z.number().optional(),
    total_rows: z.number().optional(),
});
export const addressList = (item) => z.object({ paginator: PaginatorSchema.optional(), data: z.array(item) });
export const AutocompleteSchema = z.object({
    [AddressEntity.Regions]: z.array(RegionSchema).optional(),
    [AddressEntity.TopAreas]: z.array(TopAreaSchema).optional(),
    [AddressEntity.Areas]: z.array(AreaSchema).optional(),
    [AddressEntity.Cities]: z.array(CitySchema).optional(),
    [AddressEntity.Hoods]: z.array(HoodSchema).optional(),
    [AddressEntity.Streets]: z.array(StreetSchema).optional(),
});
