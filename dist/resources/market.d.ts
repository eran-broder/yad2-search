import { z } from 'zod';
import type { Gateway } from '../core/gateway.js';
import { MarketSearchSchema, type MarketAutocomplete, type MarketFilters, type MarketMenuItem } from '../schemas/market.js';
import { type MarketCollectionParams, type MarketSearchParams } from '../params/market.js';
export interface MarketResourceOptions {
    readonly now?: () => Date;
}
export type MarketResult = z.infer<typeof MarketSearchSchema>;
export declare const createMarketResource: (gateway: Gateway, options?: MarketResourceOptions) => {
    search: import("../core/describable.js").Describable<(params: MarketSearchParams) => Promise<MarketResult>>;
    collection: import("../core/describable.js").Describable<(name: string, params?: MarketCollectionParams) => Promise<MarketResult>>;
    filters: (q: string) => Promise<MarketFilters>;
    collectionFilters: (name: string) => Promise<MarketFilters>;
    autocomplete: (searchTerm: string) => Promise<MarketAutocomplete>;
    menuItems: () => Promise<MarketMenuItem[]>;
};
