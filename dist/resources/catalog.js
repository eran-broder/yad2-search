import { ArgumentName, CatalogField, OptionsPath, VehicleCategory } from '../core/enums/index.js';
import { parseEnumArg } from '../core/params.js';
import { findByName } from '../core/text.js';
import { catalogIndex } from '../data/catalog-index.js';
import { VehicleCatalogOptionsSchema, VehicleCatalogSchema, isCatalogEntries, } from '../schemas/catalog.js';
/**
 * Three different facts, previously conflated into one set that only held `cars`.
 *
 * Manufacturers come from the catalog endpoint for cars and from the options endpoint for
 * everything else. Models exist for cars, motorcycles and scooters alike — Yamaha alone
 * has 88 — but asking for them anywhere else answered with an empty list rather than
 * saying so. Sub-models are genuinely cars-only: scoping a motorcycle query by model is
 * rejected outright with "model is not allowed".
 */
const MANUFACTURERS_FROM_CATALOG = new Set([VehicleCategory.Cars]);
const MODEL_CATEGORIES = new Set([
    VehicleCategory.Cars,
    VehicleCategory.Motorcycles,
    VehicleCategory.Scooters,
]);
const SUBMODEL_CATEGORIES = new Set([VehicleCategory.Cars]);
const SPECIAL_TYPE_FIELD = {
    [VehicleCategory.Trucks]: CatalogField.SpecialSubCategory,
    [VehicleCategory.Watercraft]: CatalogField.SpecialSubCategory,
    [VehicleCategory.Other]: CatalogField.SpecialCategory,
};
const CATALOG_CONTEXT = 'catalog';
const checked = (category) => parseEnumArg(CATALOG_CONTEXT, ArgumentName.Category, VehicleCategory, category);
const serviceFor = (category) => `vehicles-${category}-catalog`;
const entriesOf = (options, field) => {
    const option = options[field];
    return option !== undefined && isCatalogEntries(option) ? option : [];
};
export const createCatalogResource = (gateway) => {
    const catalog = (category, scope = {}) => gateway.getData(`/${serviceFor(checked(category))}`, scope, VehicleCatalogSchema);
    const options = (category) => gateway.getData(`/${serviceFor(checked(category))}${OptionsPath.Base}`, {}, VehicleCatalogOptionsSchema);
    const manufacturers = async (category = VehicleCategory.Cars) => {
        if (MANUFACTURERS_FROM_CATALOG.has(checked(category)))
            return (await catalog(category)).manufacturer ?? [];
        return entriesOf(await options(category), CatalogField.Manufacturer);
    };
    const models = async (manufacturer, category = VehicleCategory.Cars) => MODEL_CATEGORIES.has(checked(category)) ? ((await catalog(category, { manufacturer })).model ?? []) : [];
    const subModels = async (manufacturer, model, category = VehicleCategory.Cars) => SUBMODEL_CATEGORIES.has(checked(category))
        ? ((await catalog(category, { manufacturer, model })).subModel ?? [])
        : [];
    const specialTypes = async (category) => {
        const field = SPECIAL_TYPE_FIELD[checked(category)];
        return field === undefined ? [] : entriesOf(await options(category), field);
    };
    /**
     * Resolve a manufacturer by name, offline. A vehicle search cannot start without this
     * id, and asking the catalog for it means a request to the first endpoint bot protection
     * refuses. Takes either language — "Toyota" or "טויוטה" — and returns undefined rather
     * than guessing when a name is ambiguous.
     */
    const findManufacturer = (name, category = VehicleCategory.Cars) => findByName(catalogIndex.manufacturers[checked(category)] ?? [], name);
    /** The same for trucks, watercraft and `other`, which filter by type instead. */
    const findSpecialType = (name, category) => findByName(catalogIndex.specialTypes[checked(category)] ?? [], name);
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
