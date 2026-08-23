import { RealestateBucket, RealestateDeal, RealestateView, Service } from '../core/enums/index.js';
import { RealestateFeedSchema, RealestateMapSchema, } from '../schemas/realestate.js';
import { CommercialSearchParamsSchema, RealestateSearchParamsSchema, RentSearchParamsSchema, } from '../params/realestate.js';
import { createFeed } from './paged.js';
import { pickBuckets } from './buckets.js';
import { parseParams } from '../core/params.js';
const AD_BUCKETS = [
    RealestateBucket.Private,
    RealestateBucket.Agency,
    RealestateBucket.Platinum,
    RealestateBucket.Booster,
];
export const flatten = (feed) => pickBuckets(feed, AD_BUCKETS);
const toPage = (feed) => ({
    items: flatten(feed),
    totalPages: feed.pagination.totalPages,
});
const tokenOf = (ad) => ad.token;
export const createRealestateResource = (gateway) => {
    const path = (deal, view) => `/${Service.RealestateFeed}/${deal}/${view}`;
    const dealFeed = (deal, schema) => createFeed((params = {}) => gateway.getData(path(deal, RealestateView.Feed), parseParams(`realestate.${deal}`, schema, params), RealestateFeedSchema), toPage, tokenOf, schema);
    const map = (deal, params) => gateway.getData(path(deal, RealestateView.Map), parseParams('realestate.map', RealestateSearchParamsSchema, params), RealestateMapSchema);
    return {
        forSale: dealFeed(RealestateDeal.ForSale, RealestateSearchParamsSchema),
        rent: dealFeed(RealestateDeal.Rent, RentSearchParamsSchema),
        commercial: dealFeed(RealestateDeal.Commercial, CommercialSearchParamsSchema),
        map,
    };
};
