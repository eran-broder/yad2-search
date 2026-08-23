import type { Gateway } from '../core/gateway.js';
import { Service } from '../core/enums/index.js';
import {
  RealestateItemSchema,
  VehicleItemSchema,
  type RealestateItem,
  type VehicleItem,
} from '../schemas/items/index.js';

export const createItemsResource = (gateway: Gateway) => ({
  realestate: (token: string): Promise<RealestateItem> =>
    gateway.getData(`/${Service.RealestateItem}/${token}`, {}, RealestateItemSchema),
  vehicle: (token: string): Promise<VehicleItem> =>
    gateway.getData(`/${Service.VehiclesItem}/${token}`, {}, VehicleItemSchema),
});
