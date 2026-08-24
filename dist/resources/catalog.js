import { ArgumentName, CatalogField, OptionsPath, VehicleCategory } from '../core/enums/index.js';
import { parseEnumArg } from '../core/params.js';
import { VehicleCatalogOptionsSchema, VehicleCatalogSchema, isCatalogEntries, } from '../schemas/catalog.js';
const MODEL_CATEGORIES = new Set([VehicleCategory.Cars]);
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
        if (MODEL_CATEGORIES.has(checked(category)))
            return (await catalog(category)).manufacturer ?? [];
        return entriesOf(await options(category), CatalogField.Manufacturer);
    };
    const models = async (manufacturer, category = VehicleCategory.Cars) => MODEL_CATEGORIES.has(checked(category)) ? ((await catalog(category, { manufacturer })).model ?? []) : [];
    const subModels = async (manufacturer, model, category = VehicleCategory.Cars) => MODEL_CATEGORIES.has(checked(category))
        ? ((await catalog(category, { manufacturer, model })).subModel ?? [])
        : [];
    const specialTypes = async (category) => {
        const field = SPECIAL_TYPE_FIELD[checked(category)];
        return field === undefined ? [] : entriesOf(await options(category), field);
    };
    return { catalog, options, manufacturers, models, subModels, specialTypes };
};
