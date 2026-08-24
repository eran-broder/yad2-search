import { z } from 'zod';
import type { Gateway } from '../core/gateway.js';
import { MarketPath, QueryKey, Service } from '../core/enums/index.js';
import { parseParams } from '../core/params.js';
import { withParams, withRows, type RowsOf } from '../core/describable.js';
import {
  MarketAutocompleteSchema,
  MarketFiltersSchema,
  MarketMenuItemSchema,
  MarketSearchSchema,
  type MarketAutocomplete,
  type MarketFilters,
  type MarketMenuItem,
} from '../schemas/market.js';
import {
  MarketCollectionParamsSchema,
  MarketSearchParamsSchema,
  type MarketCollectionParams,
  type MarketSearchParams,
} from '../params/market.js';

export interface MarketResourceOptions {
  readonly now?: () => Date;
}

export type MarketResult = z.infer<typeof MarketSearchSchema>;

export const createMarketResource = (gateway: Gateway, options: MarketResourceOptions = {}) => {
  const now = options.now ?? (() => new Date());
  const path = (suffix: MarketPath): string => `/${Service.RecommerceFeed}${suffix}`;

  const withSession = (query: { scrollSessionId?: string | undefined }) => ({
    ...query,
    scrollSessionId: query.scrollSessionId ?? now().toISOString(),
  });

  const search = (params: MarketSearchParams): Promise<MarketResult> =>
    gateway.getData(
      path(MarketPath.Search),
      withSession(parseParams('market.search', MarketSearchParamsSchema, params)),
      MarketSearchSchema,
    );

  const collection = (name: string, params: MarketCollectionParams = {}): Promise<MarketResult> =>
    gateway.getData(
      path(`${MarketPath.Search}/${encodeURIComponent(name)}` as MarketPath),
      withSession(parseParams('market.collection', MarketCollectionParamsSchema, params)),
      MarketSearchSchema,
    );

  const filters = (q: string): Promise<MarketFilters> =>
    gateway.getData(path(MarketPath.Filters), { [QueryKey.Query]: q }, MarketFiltersSchema);

  const collectionFilters = (name: string): Promise<MarketFilters> =>
    gateway.getData(path(`${MarketPath.Filters}/${encodeURIComponent(name)}` as MarketPath), {}, MarketFiltersSchema);

  const autocomplete = (searchTerm: string): Promise<MarketAutocomplete> =>
    gateway.getData(path(MarketPath.Autocomplete), { [QueryKey.SearchTerm]: searchTerm }, MarketAutocompleteSchema);

  const menuItems = (): Promise<MarketMenuItem[]> =>
    gateway.get(path(MarketPath.MenuItems), {}, z.array(MarketMenuItemSchema));

  // The ads live under `items`; column output should reach them, not the envelope.
  const marketRows = ((result: MarketResult) => result.items ?? []) as RowsOf;

  return {
    search: withParams(withRows(search, marketRows), MarketSearchParamsSchema),
    collection: withParams(withRows(collection, marketRows), MarketCollectionParamsSchema),
    filters,
    collectionFilters,
    autocomplete,
    menuItems,
  };
};
