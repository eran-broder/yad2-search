import type { Gateway } from '../core/gateway.js';
import { type RealestateItem, type VehicleItem } from '../schemas/items/index.js';
export declare const createItemsResource: (gateway: Gateway) => {
    realestate: (token: string) => Promise<RealestateItem>;
    vehicle: (token: string) => Promise<VehicleItem>;
};
