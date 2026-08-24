import { Service, VehicleBucket, VehicleCategory, VehicleFeedView } from '../core/enums/index.js';
import { VehicleBucketedFeedSchema, VehicleFeedSchema, } from '../schemas/vehicles.js';
import { CarSearchParamsSchema, MotorcycleSearchParamsSchema, OtherVehicleSearchParamsSchema, ScooterSearchParamsSchema, TruckSearchParamsSchema, WatercraftSearchParamsSchema, } from '../params/vehicles.js';
import { createFeed } from './paged.js';
import { parseParams } from '../core/params.js';
import { dedupeBy, pickBuckets } from './buckets.js';
const BUCKETS = [
    VehicleBucket.Private,
    VehicleBucket.Commercial,
    VehicleBucket.Platinum,
    VehicleBucket.Boost,
    VehicleBucket.Solo,
];
const flattenBuckets = (feed) => ({
    ads: dedupeBy(pickBuckets(feed, BUCKETS), (ad) => ad.token),
    pagination: feed.pagination,
});
const toPage = (feed) => ({
    items: feed.ads,
    totalPages: feed.pagination.pages ?? feed.pagination.totalPages,
});
const tokenOf = (ad) => ad.token;
export const createVehiclesResource = (gateway) => {
    const forCategory = (category, schema) => createFeed((params = {}) => gateway.getData(`/${Service.VehiclesFeed}/${category}`, parseParams(`vehicles.${category}`, schema, params), VehicleFeedSchema), toPage, tokenOf, schema);
    const otherCategory = () => createFeed((params = {}) => gateway
        .getData(`/${Service.VehiclesSearchFeed}/${VehicleCategory.Other}/${VehicleFeedView.Transform}`, parseParams('vehicles.other', OtherVehicleSearchParamsSchema, params), VehicleBucketedFeedSchema)
        .then(flattenBuckets), toPage, tokenOf, OtherVehicleSearchParamsSchema);
    return {
        cars: forCategory(VehicleCategory.Cars, CarSearchParamsSchema),
        motorcycles: forCategory(VehicleCategory.Motorcycles, MotorcycleSearchParamsSchema),
        scooters: forCategory(VehicleCategory.Scooters, ScooterSearchParamsSchema),
        trucks: forCategory(VehicleCategory.Trucks, TruckSearchParamsSchema),
        watercraft: forCategory(VehicleCategory.Watercraft, WatercraftSearchParamsSchema),
        other: otherCategory(),
    };
};
