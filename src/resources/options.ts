import type { Gateway } from '../core/gateway.js';
import { OptionsPath, RealestateDeal, Service } from '../core/enums/index.js';
import {
  CommercialDynamicOptionsSchema,
  RealestateOptionsSchema,
  type CommercialDynamicOptions,
  type RealestateOptions,
} from '../schemas/options.js';

export const createOptionsResource = (gateway: Gateway) => {
  const realestate = (deal: RealestateDeal): Promise<RealestateOptions> =>
    gateway.getData(
      `/${Service.RealestateSearchOptions}/${deal}${OptionsPath.Base}`,
      {},
      RealestateOptionsSchema,
    );

  const commercialDynamic = (): Promise<CommercialDynamicOptions> =>
    gateway.getData(
      `/${Service.RealestateSearchOptions}/${RealestateDeal.Commercial}${OptionsPath.Dynamic}`,
      {},
      CommercialDynamicOptionsSchema,
    );

  return {
    realestate,
    commercialDynamic,
    forSale: () => realestate(RealestateDeal.ForSale),
    rent: () => realestate(RealestateDeal.Rent),
    commercial: () => realestate(RealestateDeal.Commercial),
  };
};
