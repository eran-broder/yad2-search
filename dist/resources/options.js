import { ArgumentName, OptionsPath, RealestateDeal, Service } from '../core/enums/index.js';
import { parseEnumArg } from '../core/params.js';
import { CommercialDynamicOptionsSchema, RealestateOptionsSchema, } from '../schemas/options.js';
const OPTIONS_CONTEXT = 'options';
export const createOptionsResource = (gateway) => {
    const realestate = (deal) => gateway.getData(
    // Unvalidated, a bad deal builds /realestate-search-options/rentals/base, which
    // comes back as a 404 or a bot challenge rather than naming the mistake.
    `/${Service.RealestateSearchOptions}/${parseEnumArg(OPTIONS_CONTEXT, ArgumentName.Deal, RealestateDeal, deal)}${OptionsPath.Base}`, {}, RealestateOptionsSchema);
    const commercialDynamic = () => gateway.getData(`/${Service.RealestateSearchOptions}/${RealestateDeal.Commercial}${OptionsPath.Dynamic}`, {}, CommercialDynamicOptionsSchema);
    return {
        realestate,
        commercialDynamic,
        forSale: () => realestate(RealestateDeal.ForSale),
        rent: () => realestate(RealestateDeal.Rent),
        commercial: () => realestate(RealestateDeal.Commercial),
    };
};
