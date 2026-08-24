import type { Gateway } from '../core/gateway.js';
import { ArgumentName, CatalogField, OptionsPath, VehicleCategory } from '../core/enums/index.js';
import { parseEnumArg } from '../core/params.js';
import { findByName } from '../core/text.js';
import { catalogIndex, type CatalogEntry as BakedCatalogEntry } from '../data/catalog-index.js';
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

const CATALOG_CONTEXT = 'catalog';

const checked = (category: VehicleCategory): VehicleCategory =>
  parseEnumArg(CATALOG_CONTEXT, ArgumentName.Category, VehicleCategory, category);

const serviceFor = (category: VehicleCategory): string => `vehicles-${category}-catalog`;

const entriesOf = (options: VehicleCatalogOptions, field: CatalogField): CatalogEntry[] => {
  const option = options[field];
  return option !== undefined && isCatalogEntries(option) ? option : [];
};

export const createCatalogResource = (gateway: Gateway) => {
  const catalog = (category: VehicleCategory, scope: CatalogScope = {}): Promise<VehicleCatalog> =>
    gateway.getData(`/${serviceFor(checked(category))}`, scope, VehicleCatalogSchema);

  const options = (category: VehicleCategory): Promise<VehicleCatalogOptions> =>
    gateway.getData(`/${serviceFor(checked(category))}${OptionsPath.Base}`, {}, VehicleCatalogOptionsSchema);

  const manufacturers = async (
    category: VehicleCategory = VehicleCategory.Cars,
  ): Promise<CatalogEntry[]> => {
    if (MODEL_CATEGORIES.has(checked(category))) return (await catalog(category)).manufacturer ?? [];
    return entriesOf(await options(category), CatalogField.Manufacturer);
  };

  const models = async (
    manufacturer: number,
    category: VehicleCategory = VehicleCategory.Cars,
  ): Promise<CatalogModel[]> =>
    MODEL_CATEGORIES.has(checked(category)) ? ((await catalog(category, { manufacturer })).model ?? []) : [];

  const subModels = async (
    manufacturer: number,
    model: number,
    category: VehicleCategory = VehicleCategory.Cars,
  ): Promise<CatalogModel[]> =>
    MODEL_CATEGORIES.has(checked(category))
      ? ((await catalog(category, { manufacturer, model })).subModel ?? [])
      : [];

  const specialTypes = async (category: VehicleCategory): Promise<CatalogEntry[]> => {
    const field = SPECIAL_TYPE_FIELD[checked(category)];
    return field === undefined ? [] : entriesOf(await options(category), field);
  };

  /**
   * Resolve a manufacturer by name, offline. A vehicle search cannot start without this
   * id, and asking the catalog for it means a request to the first endpoint bot protection
   * refuses. Takes either language — "Toyota" or "טויוטה" — and returns undefined rather
   * than guessing when a name is ambiguous.
   */
  const findManufacturer = (
    name: string,
    category: VehicleCategory = VehicleCategory.Cars,
  ): BakedCatalogEntry | undefined =>
    findByName(catalogIndex.manufacturers[checked(category)] ?? [], name);

  /** The same for trucks, watercraft and `other`, which filter by type instead. */
  const findSpecialType = (
    name: string,
    category: VehicleCategory,
  ): BakedCatalogEntry | undefined =>
    findByName(catalogIndex.specialTypes[checked(category)] ?? [], name);

  return {
    catalog,
    options,
    manufacturers,
    models,
    subModels,
    specialTypes,
    findManufacturer,
    findSpecialType,
  };
};
