import type { Gateway } from '../core/gateway.js';
import { VehicleCategory } from '../core/enums/index.js';
import { type CatalogEntry, type CatalogModel, type VehicleCatalog, type VehicleCatalogOptions } from '../schemas/catalog.js';
export type CatalogScope = Readonly<{
    manufacturer?: number;
    model?: number;
}>;
export declare const createCatalogResource: (gateway: Gateway) => {
    catalog: (category: VehicleCategory, scope?: CatalogScope) => Promise<VehicleCatalog>;
    options: (category: VehicleCategory) => Promise<VehicleCatalogOptions>;
    manufacturers: (category?: VehicleCategory) => Promise<CatalogEntry[]>;
    models: (manufacturer: number, category?: VehicleCategory) => Promise<CatalogModel[]>;
    subModels: (manufacturer: number, model: number, category?: VehicleCategory) => Promise<CatalogModel[]>;
    specialTypes: (category: VehicleCategory) => Promise<CatalogEntry[]>;
};
