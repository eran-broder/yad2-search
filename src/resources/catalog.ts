import type { Gateway } from '../core/gateway.js';
import { CatalogField, OptionsPath, VehicleCategory } from '../core/enums/index.js';
import {
  VehicleCatalogOptionsSchema,
  VehicleCatalogSchema,
  isCatalogEntries,
  type CatalogEntry,
  type CatalogModel,
  type VehicleCatalog,
  type VehicleCatalogOptions,
} from '../schemas/catalog.js';

export type CatalogScope = Readonly<{ manufacturer?: number; model?: number }>;

const MODEL_CATEGORIES = new Set<VehicleCategory>([VehicleCategory.Cars]);

const SPECIAL_TYPE_FIELD: Partial<Record<VehicleCategory, CatalogField>> = {
  [VehicleCategory.Trucks]: CatalogField.SpecialSubCategory,
  [VehicleCategory.Watercraft]: CatalogField.SpecialSubCategory,
  [VehicleCategory.Other]: CatalogField.SpecialCategory,
};

const serviceFor = (category: VehicleCategory): string => `vehicles-${category}-catalog`;

const entriesOf = (options: VehicleCatalogOptions, field: CatalogField): CatalogEntry[] => {
  const option = options[field];
  return option !== undefined && isCatalogEntries(option) ? option : [];
};

export const createCatalogResource = (gateway: Gateway) => {
  const catalog = (category: VehicleCategory, scope: CatalogScope = {}): Promise<VehicleCatalog> =>
    gateway.getData(`/${serviceFor(category)}`, scope, VehicleCatalogSchema);

  const options = (category: VehicleCategory): Promise<VehicleCatalogOptions> =>
    gateway.getData(`/${serviceFor(category)}${OptionsPath.Base}`, {}, VehicleCatalogOptionsSchema);

  const manufacturers = async (
    category: VehicleCategory = VehicleCategory.Cars,
  ): Promise<CatalogEntry[]> => {
    if (MODEL_CATEGORIES.has(category)) return (await catalog(category)).manufacturer ?? [];
    return entriesOf(await options(category), CatalogField.Manufacturer);
  };

  const models = async (
    manufacturer: number,
    category: VehicleCategory = VehicleCategory.Cars,
  ): Promise<CatalogModel[]> =>
    MODEL_CATEGORIES.has(category) ? ((await catalog(category, { manufacturer })).model ?? []) : [];

  const subModels = async (
    manufacturer: number,
    model: number,
    category: VehicleCategory = VehicleCategory.Cars,
  ): Promise<CatalogModel[]> =>
    MODEL_CATEGORIES.has(category)
      ? ((await catalog(category, { manufacturer, model })).subModel ?? [])
      : [];

  const specialTypes = async (category: VehicleCategory): Promise<CatalogEntry[]> => {
    const field = SPECIAL_TYPE_FIELD[category];
    return field === undefined ? [] : entriesOf(await options(category), field);
  };

  return { catalog, options, manufacturers, models, subModels, specialTypes };
};
