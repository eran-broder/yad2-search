import type { Gateway } from '../core/gateway.js';
import { ArgumentName, OptionsPath, RealestateDeal, Service } from '../core/enums/index.js';
import { parseEnumArg } from '../core/params.js';
import {
  CommercialDynamicOptionsSchema,
  RealestateOptionsSchema,
  type CommercialDynamicOptions,
  type RealestateOptions,
} from '../schemas/options.js';

const OPTIONS_CONTEXT = 'options';

export const createOptionsResource = (gateway: Gateway) => {
  const realestate = (deal: RealestateDeal): Promise<RealestateOptions> =>
    gateway.getData(
      // Unvalidated, a bad deal builds /realestate-search-options/rentals/base, which
      // comes back as a 404 or a bot challenge rather than naming the mistake.
      `/${Service.RealestateSearchOptions}/${parseEnumArg(OPTIONS_CONTEXT, ArgumentName.Deal, RealestateDeal, deal)}${OptionsPath.Base}`,
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
