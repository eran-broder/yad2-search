import { z } from 'zod';
import { MarketPath, QueryKey, Service } from '../core/enums/index.js';
import { parseParams } from '../core/params.js';
import { withParams, withRows } from '../core/describable.js';
import { MarketAutocompleteSchema, MarketFiltersSchema, MarketMenuItemSchema, MarketSearchSchema, } from '../schemas/market.js';
import { MarketCollectionParamsSchema, MarketSearchParamsSchema, } from '../params/market.js';
export const createMarketResource = (gateway, options = {}) => {
    const now = options.now ?? (() => new Date());
    const path = (suffix) => `/${Service.RecommerceFeed}${suffix}`;
    const withSession = (query) => ({
        ...query,
        scrollSessionId: query.scrollSessionId ?? now().toISOString(),
    });
    const search = (params) => gateway.getData(path(MarketPath.Search), withSession(parseParams('market.search', MarketSearchParamsSchema, params)), MarketSearchSchema);
    const collection = (name, params = {}) => gateway.getData(path(`${MarketPath.Search}/${encodeURIComponent(name)}`), withSession(parseParams('market.collection', MarketCollectionParamsSchema, params)), MarketSearchSchema);
    const filters = (q) => gateway.getData(path(MarketPath.Filters), { [QueryKey.Query]: q }, MarketFiltersSchema);
    const collectionFilters = (name) => gateway.getData(path(`${MarketPath.Filters}/${encodeURIComponent(name)}`), {}, MarketFiltersSchema);
    const autocomplete = (searchTerm) => gateway.getData(path(MarketPath.Autocomplete), { [QueryKey.SearchTerm]: searchTerm }, MarketAutocompleteSchema);
    const menuItems = () => gateway.get(path(MarketPath.MenuItems), {}, z.array(MarketMenuItemSchema));
    // The ads live under `items`; column output should reach them, not the envelope.
    const marketRows = ((result) => result.items ?? []);
    return {
        search: withParams(withRows(search, marketRows), MarketSearchParamsSchema),
        collection: withParams(withRows(collection, marketRows), MarketCollectionParamsSchema),
        filters,
        collectionFilters,
        autocomplete,
        menuItems,
    };
};
