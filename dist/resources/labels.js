import { FeedDomain, Service } from '../core/enums/index.js';
import { FilterLabelsSchema } from '../schemas/labels.js';
export const createLabelsResource = (gateway) => {
    const resolve = (domain, subject, params) => gateway.getData(`/${Service.FeedLiteral}/${domain}/${subject}`, params, FilterLabelsSchema);
    return {
        realestate: (deal, params) => resolve(FeedDomain.Realestate, deal, params),
        vehicles: (category, params) => resolve(FeedDomain.Vehicles, category, params),
    };
};
