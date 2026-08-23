import { AddressEntity, AddressPath, QueryKey, ResultType, Service } from '../core/enums/index.js';
import { Yad2NotFoundError } from '../core/errors.js';
import { AreaSchema, AutocompleteSchema, CitySchema, HoodSchema, RegionSchema, StreetSchema, TopAreaSchema, addressList, } from '../schemas/address.js';
const EXTENDED = { [QueryKey.ResultType]: ResultType.Extended, [QueryKey.Limit]: 1000 };
const SPECIFICITY = [
    AddressEntity.Hoods,
    AddressEntity.Cities,
    AddressEntity.Areas,
    AddressEntity.TopAreas,
    AddressEntity.Regions,
];
const defined = (entries) => Object.fromEntries(Object.entries(entries).filter(([, value]) => value !== undefined));
const toLocation = (place) => defined({
    region: place.region_id,
    topArea: place.top_area_id,
    area: place.area_id,
    city: place.city_id,
    neighborhood: place.hood_id,
});
const mostSpecific = (suggestions) => SPECIFICITY.map((bucket) => suggestions[bucket]?.[0]).find(Boolean);
export const createAddressResource = (gateway) => {
    const path = (suffix) => `/${Service.AddressMaster}${suffix}`;
    const list = (suffix, item, params = {}) => gateway
        .getData(path(suffix), { ...EXTENDED, ...params }, addressList(item))
        .then((result) => result.data);
    const autocomplete = (text) => gateway.getData(path(`${AddressPath.Autocomplete}/${encodeURIComponent(text)}`), {}, AutocompleteSchema);
    const locate = async (text) => {
        const place = mostSpecific(await autocomplete(text));
        if (!place)
            throw new Yad2NotFoundError(`location "${text}"`);
        return toLocation(place);
    };
    return {
        regions: () => list(AddressPath.Regions, RegionSchema),
        topAreas: () => list(AddressPath.TopAreas, TopAreaSchema),
        areas: () => list(AddressPath.Areas, AreaSchema),
        cities: () => list(AddressPath.Cities, CitySchema),
        hoods: (cityId) => list(AddressPath.Hoods, HoodSchema, { [QueryKey.CityId]: cityId }),
        streets: (cityId) => list(AddressPath.Streets, StreetSchema, { [QueryKey.CityId]: cityId }),
        autocomplete,
        locate,
    };
};
