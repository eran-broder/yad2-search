import type { ZodType } from 'zod';
import type { Gateway } from '../core/gateway.js';
import type { QueryParams } from '../core/query.js';
import { RealestateBucket, RealestateDeal, RealestateView, Service } from '../core/enums/index.js';
import {
  RealestateFeedSchema,
  RealestateMapSchema,
  type RealestateAd,
  type RealestateFeed,
  type RealestateMap,
} from '../schemas/realestate.js';
import {
  CommercialSearchParamsSchema,
  RealestateSearchParamsSchema,
  RentSearchParamsSchema,
  type CommercialSearchParams,
  type RealestateSearchParams,
  type RentSearchParams,
} from '../params/realestate.js';
import { createFeed, type FeedResource } from './paged.js';
import { dedupeBy, pickBuckets } from './buckets.js';
import { parseParams } from '../core/params.js';
import { withParams } from '../core/describable.js';

const AD_BUCKETS = [
  RealestateBucket.Private,
  RealestateBucket.Agency,
  RealestateBucket.Platinum,
  RealestateBucket.Booster,
] as const;

const tokenOf = (ad: RealestateAd): string => ad.token;

export const flatten = (feed: RealestateFeed): RealestateAd[] =>
  dedupeBy(pickBuckets(feed, AD_BUCKETS), tokenOf);

const toPage = (feed: RealestateFeed) => ({
  items: flatten(feed),
  totalPages: feed.pagination.totalPages,
});

export type RealestateFeedResource<P extends QueryParams> = FeedResource<RealestateAd, P, RealestateFeed>;

export const createRealestateResource = (gateway: Gateway) => {
  const path = (deal: RealestateDeal, view: RealestateView): string =>
    `/${Service.RealestateFeed}/${deal}/${view}`;

  const dealFeed = <P extends QueryParams>(
    deal: RealestateDeal,
    schema: ZodType<P, P>,
  ): RealestateFeedResource<P> =>
    createFeed<RealestateAd, P, RealestateFeed>(
      (params = {} as P) =>
        gateway.getData(
          path(deal, RealestateView.Feed),
          parseParams(`realestate.${deal}`, schema, params),
          RealestateFeedSchema,
        ),
      toPage,
      tokenOf,
      schema,
    );

  const map = (deal: RealestateDeal, params: RealestateSearchParams): Promise<RealestateMap> =>
    gateway.getData(
      path(deal, RealestateView.Map),
      parseParams('realestate.map', RealestateSearchParamsSchema, params),
      RealestateMapSchema,
    );

  return {
    forSale: dealFeed<RealestateSearchParams>(RealestateDeal.ForSale, RealestateSearchParamsSchema),
    rent: dealFeed<RentSearchParams>(RealestateDeal.Rent, RentSearchParamsSchema),
    commercial: dealFeed<CommercialSearchParams>(
      RealestateDeal.Commercial,
      CommercialSearchParamsSchema,
    ),
    map: withParams(map, RealestateSearchParamsSchema),
  };
};
