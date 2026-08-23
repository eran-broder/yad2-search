import type { Gateway } from '../core/gateway.js';
import type { QueryParams } from '../core/query.js';
import { type VehicleAd, type VehicleFeed } from '../schemas/vehicles.js';
import { type CarSearchParams, type MotorcycleSearchParams, type OtherVehicleSearchParams, type ScooterSearchParams, type TruckSearchParams, type WatercraftSearchParams } from '../params/vehicles.js';
import { type FeedResource } from './paged.js';
export type VehicleSearch<P extends QueryParams> = FeedResource<VehicleAd, P, VehicleFeed>;
export interface VehiclesResource {
    cars: VehicleSearch<CarSearchParams>;
    motorcycles: VehicleSearch<MotorcycleSearchParams>;
    scooters: VehicleSearch<ScooterSearchParams>;
    trucks: VehicleSearch<TruckSearchParams>;
    watercraft: VehicleSearch<WatercraftSearchParams>;
    other: VehicleSearch<OtherVehicleSearchParams>;
}
export declare const createVehiclesResource: (gateway: Gateway) => VehiclesResource;
