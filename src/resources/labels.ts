import type { Gateway } from '../core/gateway.js';
import type { QueryParams } from '../core/query.js';
import { ArgumentName, FeedDomain, RealestateDeal, Service, VehicleCategory } from '../core/enums/index.js';
import { FilterLabelsSchema, type FilterLabels } from '../schemas/labels.js';
import { parseEnumArg } from '../core/params.js';

const LABELS_CONTEXT = 'labels';

export const createLabelsResource = (gateway: Gateway) => {
  const resolve = (domain: FeedDomain, subject: string, params: QueryParams): Promise<FilterLabels> =>
    gateway.getData(`/${Service.FeedLiteral}/${domain}/${subject}`, params, FilterLabelsSchema);

  return {
    realestate: (deal: RealestateDeal, params: QueryParams) =>
      resolve(FeedDomain.Realestate, parseEnumArg(LABELS_CONTEXT, ArgumentName.Deal, RealestateDeal, deal), params),
    vehicles: (category: VehicleCategory, params: QueryParams) =>
      resolve(FeedDomain.Vehicles, parseEnumArg(LABELS_CONTEXT, ArgumentName.Category, VehicleCategory, category), params),
  };
};
