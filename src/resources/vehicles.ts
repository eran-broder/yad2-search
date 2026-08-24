import type { ZodType } from 'zod';
import type { Gateway } from '../core/gateway.js';
import type { QueryParams } from '../core/query.js';
import { Service, VehicleBucket, VehicleCategory, VehicleFeedView } from '../core/enums/index.js';
import {
  VehicleBucketedFeedSchema,
  VehicleFeedSchema,
  type VehicleAd,
  type VehicleBucketedFeed,
  type VehicleFeed,
} from '../schemas/vehicles.js';
import {
  CarSearchParamsSchema,
  MotorcycleSearchParamsSchema,
  OtherVehicleSearchParamsSchema,
  ScooterSearchParamsSchema,
  TruckSearchParamsSchema,
  WatercraftSearchParamsSchema,
  type CarSearchParams,
  type MotorcycleSearchParams,
  type OtherVehicleSearchParams,
  type ScooterSearchParams,
  type TruckSearchParams,
  type WatercraftSearchParams,
} from '../params/vehicles.js';
import { createFeed, type FeedResource } from './paged.js';
import { parseParams } from '../core/params.js';
import { dedupeBy, pickBuckets } from './buckets.js';

export type VehicleSearch<P extends QueryParams> = FeedResource<VehicleAd, P, VehicleFeed>;

const BUCKETS = [
  VehicleBucket.Private,
  VehicleBucket.Commercial,
  VehicleBucket.Platinum,
  VehicleBucket.Boost,
  VehicleBucket.Solo,
] as const;

const flattenBuckets = (feed: VehicleBucketedFeed): VehicleFeed => ({
  ads: dedupeBy(pickBuckets(feed, BUCKETS), (ad) => ad.token),
  pagination: feed.pagination,
});

export interface VehiclesResource {
  cars: VehicleSearch<CarSearchParams>;
  motorcycles: VehicleSearch<MotorcycleSearchParams>;
  scooters: VehicleSearch<ScooterSearchParams>;
  trucks: VehicleSearch<TruckSearchParams>;
  watercraft: VehicleSearch<WatercraftSearchParams>;
  other: VehicleSearch<OtherVehicleSearchParams>;
}

const toPage = (feed: VehicleFeed) => ({
  items: feed.ads,
  totalPages: feed.pagination.pages ?? feed.pagination.totalPages,
});

const tokenOf = (ad: VehicleAd): string => ad.token;

export const createVehiclesResource = (gateway: Gateway): VehiclesResource => {
  const forCategory = <P extends QueryParams>(
    category: VehicleCategory,
    schema: ZodType<P, P>,
  ): VehicleSearch<P> =>
    createFeed<VehicleAd, P, VehicleFeed>(
      (params = {} as P) =>
        gateway.getData(
          `/${Service.VehiclesFeed}/${category}`,
          parseParams(`vehicles.${category}`, schema, params),
          VehicleFeedSchema,
        ),
      toPage,
      tokenOf,
      schema,
    );

  const otherCategory = (): VehicleSearch<OtherVehicleSearchParams> =>
    createFeed<VehicleAd, OtherVehicleSearchParams, VehicleFeed>(
      (params = {}) =>
        gateway
          .getData(
            `/${Service.VehiclesSearchFeed}/${VehicleCategory.Other}/${VehicleFeedView.Transform}`,
            parseParams('vehicles.other', OtherVehicleSearchParamsSchema, params),
            VehicleBucketedFeedSchema,
          )
          .then(flattenBuckets),
      toPage,
      tokenOf,
      OtherVehicleSearchParamsSchema,
    );

  return {
    cars: forCategory<CarSearchParams>(VehicleCategory.Cars, CarSearchParamsSchema),
    motorcycles: forCategory<MotorcycleSearchParams>(
      VehicleCategory.Motorcycles,
      MotorcycleSearchParamsSchema,
    ),
    scooters: forCategory<ScooterSearchParams>(VehicleCategory.Scooters, ScooterSearchParamsSchema),
    trucks: forCategory<TruckSearchParams>(VehicleCategory.Trucks, TruckSearchParamsSchema),
    watercraft: forCategory<WatercraftSearchParams>(
      VehicleCategory.Watercraft,
      WatercraftSearchParamsSchema,
    ),
    other: otherCategory(),
  };
};
