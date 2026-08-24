/**
 * Yad2's address hierarchy, baked at build time by `tools/bake-address.mjs`.
 *
 * Resolving a place otherwise costs a request against an API with a bot-protection
 * budget, and the English fallback cost a second one to pull all 1454 cities. Regions,
 * areas, cities and hoods change on the order of never, so they ship with the SDK.
 * Streets are not included: that endpoint demands a city_id, so covering every city would
 * mean 1454 requests and tens of megabytes.
 */
export interface BakedPlace {
    readonly id: number | string;
    readonly heb: string;
    readonly title?: string | undefined;
    readonly full?: string | undefined;
    readonly eng?: string | undefined;
    readonly region?: number | string | undefined;
    readonly topArea?: number | string | undefined;
    readonly area?: number | string | undefined;
    readonly city?: number | string | undefined;
}
export interface AddressIndex {
    readonly regions: readonly BakedPlace[];
    readonly topAreas: readonly BakedPlace[];
    readonly areas: readonly BakedPlace[];
    readonly cities: readonly BakedPlace[];
    readonly hoods: readonly BakedPlace[];
}
export declare const addressIndex: AddressIndex;
