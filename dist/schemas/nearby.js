import { z } from 'zod';
import { EntityIdSchema } from './common.js';
export const NearbyLabelSchema = z.object({
    id: EntityIdSchema.optional(),
    text: z.string().nullable().optional(),
    text_eng: z.string().nullable().optional(),
});
export const NearbyAddressSchema = z.object({
    top_area: NearbyLabelSchema.optional(),
    area: NearbyLabelSchema.optional(),
    city: NearbyLabelSchema.optional(),
    neighborhood: NearbyLabelSchema.optional(),
    street: NearbyLabelSchema.optional(),
    address_master_id: EntityIdSchema.nullable().optional(),
    coords: z.object({ lon: z.number(), lat: z.number() }).nullable().optional(),
});
export const NearbyMetaSchema = z.object({
    images: z.array(z.string()).nullable().optional(),
    cover_image: z.string().nullable().optional(),
    property_condition: NearbyLabelSchema.optional(),
    balconies_count: z.number().nullable().optional(),
    rooms_count: z.number().nullable().optional(),
    square_meter: z.number().nullable().optional(),
});
export const NearbyDatesSchema = z.object({
    start: z.string().nullable().optional(),
    update: z.string().nullable().optional(),
    end: z.string().nullable().optional(),
    rebounce: z.string().nullable().optional(),
});
export const NearbyBrokerSchema = z.object({
    phone: z.string().nullable().optional(),
    name: z.string().nullable().optional(),
    avatar: z.string().nullable().optional(),
});
export const NearbyCustomerSchema = z.object({
    agency_name: z.string().nullable().optional(),
    agency_logo: z.string().nullable().optional(),
    second_phone: z.string().nullable().optional(),
    second_broker_avatar: z.string().nullable().optional(),
    brokers: z.array(NearbyBrokerSchema).nullable().optional(),
});
export const NearbySearchFieldsSchema = z
    .object({
    entrance_date: z.string().nullable().optional(),
    square_meter: z.number().nullable().optional(),
    rooms_count: z.number().nullable().optional(),
    property_group: NearbyLabelSchema.nullable().optional(),
})
    .catchall(z.unknown());
export const NearbyDocSchema = z.object({
    token: z.string(),
    order_id: z.number().optional(),
    category_id: z.number().optional(),
    subcategory_id: z.number().optional(),
    status_id: z.number().optional(),
    priority: z.number().optional(),
    price: z.number().nullable().optional(),
    is_price_only: z.boolean().optional(),
    is_image_only: z.boolean().optional(),
    search_text: z.string().optional(),
    address: NearbyAddressSchema.nullable().optional(),
    meta_data: NearbyMetaSchema.nullable().optional(),
    dates: NearbyDatesSchema.nullable().optional(),
    feed_section: z.string().nullable().optional(),
    customer: NearbyCustomerSchema.nullable().optional(),
    packages: z.record(z.string(), z.unknown()).nullable().optional(),
    broker_packages: z.record(z.string(), z.unknown()).nullable().optional(),
    search_fields: NearbySearchFieldsSchema.nullable().optional(),
});
export const NearbyResultSchema = z.object({
    docs: z.array(NearbyDocSchema),
    pointInTime: z.string().optional(),
    nextChunk: EntityIdSchema.optional(),
});
