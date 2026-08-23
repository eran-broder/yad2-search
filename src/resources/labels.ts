import type { Gateway } from '../core/gateway.js';
import type { QueryParams } from '../core/query.js';
import { FeedDomain, RealestateDeal, Service, VehicleCategory } from '../core/enums/index.js';
import { FilterLabelsSchema, type FilterLabels } from '../schemas/labels.js';

export const createLabelsResource = (gateway: Gateway) => {
  const resolve = (domain: FeedDomain, subject: string, params: QueryParams): Promise<FilterLabels> =>
    gateway.getData(`/${Service.FeedLiteral}/${domain}/${subject}`, params, FilterLabelsSchema);

  return {
    realestate: (deal: RealestateDeal, params: QueryParams) =>
      resolve(FeedDomain.Realestate, deal, params),
    vehicles: (category: VehicleCategory, params: QueryParams) =>
      resolve(FeedDomain.Vehicles, category, params),
  };
};
