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
const SEPARATORS = /[,״"']/g;
const WHITESPACE = /\s+/g;
const normalize = (text) => text.replace(SEPARATORS, ' ').replace(WHITESPACE, ' ').trim().toLowerCase();
/**
 * How well a candidate answers the query, independent of how specific it is.
 * Autocomplete returns a best guess in every bucket, so a hood is always present even
 * when it barely matches — "תל אביב" yields the hood "תל ברוך" alongside the city
 * "תל אביב יפו". Taking the hood because hoods are more specific silently narrows a
 * city-wide search to one neighbourhood.
 */
const matchScore = (query, place) => {
    const wanted = normalize(query);
    const titles = [place.title_text, place.full_title_text]
        .filter((title) => title !== undefined)
        .map(normalize);
    if (titles.some((title) => title === wanted))
        return 3;
    if (titles.some((title) => title.startsWith(wanted)))
        return 2;
    if (titles.some((title) => title.includes(wanted)))
        return 1;
    return 0;
};
/** Best match wins; ties go to the more specific bucket, which is the useful default. */
const bestMatch = (query, suggestions) => {
    // SPECIFICITY runs most-specific first, so a strict `>` leaves ties with the narrower
    // place — "כרמליה חיפה" still resolves to the neighbourhood, not the city.
    let best;
    let bestScore = -1;
    for (const bucket of SPECIFICITY) {
        const place = suggestions[bucket]?.[0];
        if (place === undefined)
            continue;
        const score = matchScore(query, place);
        if (score > bestScore) {
            best = place;
            bestScore = score;
        }
    }
    return best;
};
export const createAddressResource = (gateway) => {
    const path = (suffix) => `/${Service.AddressMaster}${suffix}`;
    const list = (suffix, item, params = {}) => gateway
        .getData(path(suffix), { ...EXTENDED, ...params }, addressList(item))
        .then((result) => result.data);
    const autocomplete = (text) => gateway.getData(path(`${AddressPath.Autocomplete}/${encodeURIComponent(text)}`), {}, AutocompleteSchema);
    const locate = async (text) => {
        const place = bestMatch(text, await autocomplete(text));
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
