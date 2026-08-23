import { CatalogField, OptionsPath, VehicleCategory } from '../core/enums/index.js';
import { VehicleCatalogOptionsSchema, VehicleCatalogSchema, isCatalogEntries, } from '../schemas/catalog.js';
const MODEL_CATEGORIES = new Set([VehicleCategory.Cars]);
const SPECIAL_TYPE_FIELD = {
    [VehicleCategory.Trucks]: CatalogField.SpecialSubCategory,
    [VehicleCategory.Watercraft]: CatalogField.SpecialSubCategory,
    [VehicleCategory.Other]: CatalogField.SpecialCategory,
};
const serviceFor = (category) => `vehicles-${category}-catalog`;
const entriesOf = (options, field) => {
    const option = options[field];
    return option !== undefined && isCatalogEntries(option) ? option : [];
};
export const createCatalogResource = (gateway) => {
    const catalog = (category, scope = {}) => gateway.getData(`/${serviceFor(category)}`, scope, VehicleCatalogSchema);
    const options = (category) => gateway.getData(`/${serviceFor(category)}${OptionsPath.Base}`, {}, VehicleCatalogOptionsSchema);
    const manufacturers = async (category = VehicleCategory.Cars) => {
        if (MODEL_CATEGORIES.has(category))
            return (await catalog(category)).manufacturer ?? [];
        return entriesOf(await options(category), CatalogField.Manufacturer);
    };
    const models = async (manufacturer, category = VehicleCategory.Cars) => MODEL_CATEGORIES.has(category) ? ((await catalog(category, { manufacturer })).model ?? []) : [];
    const subModels = async (manufacturer, model, category = VehicleCategory.Cars) => MODEL_CATEGORIES.has(category)
        ? ((await catalog(category, { manufacturer, model })).subModel ?? [])
        : [];
    const specialTypes = async (category) => {
        const field = SPECIAL_TYPE_FIELD[category];
        return field === undefined ? [] : entriesOf(await options(category), field);
    };
    return { catalog, options, manufacturers, models, subModels, specialTypes };
};
