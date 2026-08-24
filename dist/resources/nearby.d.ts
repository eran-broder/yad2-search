import type { Gateway } from '../core/gateway.js';
import { type NearbyParams } from '../params/nearby.js';
import { type NearbyDoc, type NearbyResult } from '../schemas/nearby.js';
export interface NearbyStreamOptions {
    readonly maxChunks?: number;
}
export declare const createNearbyResource: (gateway: Gateway) => {
    search: import("../core/describable.js").Describable<(params: NearbyParams) => Promise<NearbyResult>>;
    stream: import("../core/describable.js").Describable<(params: NearbyParams, { maxChunks }?: NearbyStreamOptions) => AsyncGenerator<NearbyDoc>>;
    all: import("../core/describable.js").Describable<(params: NearbyParams, options?: NearbyStreamOptions) => Promise<{
        token: string;
        order_id?: number | undefined;
        category_id?: number | undefined;
        subcategory_id?: number | undefined;
        status_id?: number | undefined;
        priority?: number | undefined;
        price?: number | null | undefined;
        is_price_only?: boolean | undefined;
        is_image_only?: boolean | undefined;
        search_text?: string | undefined;
        address?: {
            top_area?: {
                id?: string | number | undefined;
                text?: string | null | undefined;
                text_eng?: string | null | undefined;
            } | undefined;
            area?: {
                id?: string | number | undefined;
                text?: string | null | undefined;
                text_eng?: string | null | undefined;
            } | undefined;
            city?: {
                id?: string | number | undefined;
                text?: string | null | undefined;
                text_eng?: string | null | undefined;
            } | undefined;
            neighborhood?: {
                id?: string | number | undefined;
                text?: string | null | undefined;
                text_eng?: string | null | undefined;
            } | undefined;
            street?: {
                id?: string | number | undefined;
                text?: string | null | undefined;
                text_eng?: string | null | undefined;
            } | undefined;
            address_master_id?: string | number | null | undefined;
            coords?: {
                lon: number;
                lat: number;
            } | null | undefined;
        } | null | undefined;
        meta_data?: {
            images?: string[] | null | undefined;
            cover_image?: string | null | undefined;
            property_condition?: {
                id?: string | number | undefined;
                text?: string | null | undefined;
                text_eng?: string | null | undefined;
            } | undefined;
            balconies_count?: number | null | undefined;
            rooms_count?: number | null | undefined;
            square_meter?: number | null | undefined;
        } | null | undefined;
        dates?: {
            start?: string | null | undefined;
            update?: string | null | undefined;
            end?: string | null | undefined;
            rebounce?: string | null | undefined;
        } | null | undefined;
        feed_section?: string | null | undefined;
        customer?: {
            agency_name?: string | null | undefined;
            agency_logo?: string | null | undefined;
            second_phone?: string | null | undefined;
            second_broker_avatar?: string | null | undefined;
            brokers?: {
                phone?: string | null | undefined;
                name?: string | null | undefined;
                avatar?: string | null | undefined;
            }[] | null | undefined;
        } | null | undefined;
        packages?: Record<string, unknown> | null | undefined;
        broker_packages?: Record<string, unknown> | null | undefined;
        search_fields?: {
            [x: string]: unknown;
            entrance_date?: string | null | undefined;
            square_meter?: number | null | undefined;
            rooms_count?: number | null | undefined;
            property_group?: {
                id?: string | number | undefined;
                text?: string | null | undefined;
                text_eng?: string | null | undefined;
            } | null | undefined;
        } | null | undefined;
    }[]>>;
};
