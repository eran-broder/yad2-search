import { ArgumentName, FeedDomain, RealestateDeal, Service, VehicleCategory } from '../core/enums/index.js';
import { FilterLabelsSchema } from '../schemas/labels.js';
import { parseEnumArg } from '../core/params.js';
const LABELS_CONTEXT = 'labels';
export const createLabelsResource = (gateway) => {
    const resolve = (domain, subject, params) => gateway.getData(`/${Service.FeedLiteral}/${domain}/${subject}`, params, FilterLabelsSchema);
    return {
        realestate: (deal, params) => resolve(FeedDomain.Realestate, parseEnumArg(LABELS_CONTEXT, ArgumentName.Deal, RealestateDeal, deal), params),
        vehicles: (category, params) => resolve(FeedDomain.Vehicles, parseEnumArg(LABELS_CONTEXT, ArgumentName.Category, VehicleCategory, category), params),
    };
};
