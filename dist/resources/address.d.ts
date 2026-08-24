import type { Gateway } from '../core/gateway.js';
import type { EntityId } from '../schemas/common.js';
import { type AddressSuggestions } from '../schemas/address.js';
export interface SearchLocation {
    readonly region?: EntityId;
    readonly topArea?: EntityId;
    readonly area?: EntityId;
    readonly city?: EntityId;
    readonly neighborhood?: EntityId;
    readonly street?: EntityId;
}
export declare const createAddressResource: (gateway: Gateway) => {
    regions: () => Promise<{
        region_id: string | number;
        region_heb: string;
        type_weight?: number | undefined;
        title_text?: string | undefined;
        full_title_text?: string | undefined;
        top_area_id?: string | number | undefined;
        area_id?: string | number | undefined;
        city_id?: string | number | undefined;
        hood_id?: string | number | undefined;
        street_id?: string | number | undefined;
        region_eng?: string | null | undefined;
    }[]>;
    topAreas: () => Promise<{
        top_area_id: string | number;
        top_area_heb: string;
        type_weight?: number | undefined;
        title_text?: string | undefined;
        full_title_text?: string | undefined;
        region_id?: string | number | undefined;
        area_id?: string | number | undefined;
        city_id?: string | number | undefined;
        hood_id?: string | number | undefined;
        street_id?: string | number | undefined;
        top_area_eng?: string | null | undefined;
    }[]>;
    areas: () => Promise<{
        area_id: string | number;
        area_heb: string;
        type_weight?: number | undefined;
        title_text?: string | undefined;
        full_title_text?: string | undefined;
        region_id?: string | number | undefined;
        top_area_id?: string | number | undefined;
        city_id?: string | number | undefined;
        hood_id?: string | number | undefined;
        street_id?: string | number | undefined;
        area_eng?: string | null | undefined;
    }[]>;
    cities: () => Promise<{
        city_id: string | number;
        city_heb: string;
        type_weight?: number | undefined;
        title_text?: string | undefined;
        full_title_text?: string | undefined;
        region_id?: string | number | undefined;
        top_area_id?: string | number | undefined;
        area_id?: string | number | undefined;
        hood_id?: string | number | undefined;
        street_id?: string | number | undefined;
        city_eng?: string | null | undefined;
    }[]>;
    hoods: (cityId?: EntityId) => Promise<{
        hood_id: string | number;
        hood_heb: string;
        type_weight?: number | undefined;
        title_text?: string | undefined;
        full_title_text?: string | undefined;
        region_id?: string | number | undefined;
        top_area_id?: string | number | undefined;
        area_id?: string | number | undefined;
        city_id?: string | number | undefined;
        street_id?: string | number | undefined;
        hood_eng?: string | null | undefined;
    }[]>;
    streets: (cityId: EntityId) => Promise<{
        street_id: string | number;
        street_heb: string;
        type_weight?: number | undefined;
        title_text?: string | undefined;
        full_title_text?: string | undefined;
        region_id?: string | number | undefined;
        top_area_id?: string | number | undefined;
        area_id?: string | number | undefined;
        city_id?: string | number | undefined;
        hood_id?: string | number | undefined;
    }[]>;
    autocomplete: (text: string) => Promise<AddressSuggestions>;
    locate: (text: string) => Promise<SearchLocation>;
};
