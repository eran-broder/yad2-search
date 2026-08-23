import { Service } from '../core/enums/index.js';
import { RealestateItemSchema, VehicleItemSchema, } from '../schemas/items/index.js';
export const createItemsResource = (gateway) => ({
    realestate: (token) => gateway.getData(`/${Service.RealestateItem}/${token}`, {}, RealestateItemSchema),
    vehicle: (token) => gateway.getData(`/${Service.VehiclesItem}/${token}`, {}, VehicleItemSchema),
});
