import { OptionsPath, RealestateDeal, Service } from '../core/enums/index.js';
import { CommercialDynamicOptionsSchema, RealestateOptionsSchema, } from '../schemas/options.js';
export const createOptionsResource = (gateway) => {
    const realestate = (deal) => gateway.getData(`/${Service.RealestateSearchOptions}/${deal}${OptionsPath.Base}`, {}, RealestateOptionsSchema);
    const commercialDynamic = () => gateway.getData(`/${Service.RealestateSearchOptions}/${RealestateDeal.Commercial}${OptionsPath.Dynamic}`, {}, CommercialDynamicOptionsSchema);
    return {
        realestate,
        commercialDynamic,
        forSale: () => realestate(RealestateDeal.ForSale),
        rent: () => realestate(RealestateDeal.Rent),
        commercial: () => realestate(RealestateDeal.Commercial),
    };
};
