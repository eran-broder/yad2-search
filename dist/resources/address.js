import { AddressEntity, AddressPath, BakedBucket, LocationField, QueryKey, ResultType, Service, } from '../core/enums/index.js';
import { Yad2NotFoundError } from '../core/errors.js';
import { AreaSchema, AutocompleteSchema, CitySchema, HoodSchema, RegionSchema, StreetSchema, TopAreaSchema, addressList, } from '../schemas/address.js';
import { addressIndex } from '../data/address-index.js';
// These endpoints do not paginate — they return whatever `limit` allows and say nothing
// about what was cut. At 1000 the city list stopped 454 rows short and omitted Tel Aviv,
// so anything built on it was quietly wrong. Ask for more than exists.
const LIST_LIMIT = 10000;
const MIN_HINT_LENGTH = 3;
const MAX_HINTS = 3;
const EXTENDED = { [QueryKey.ResultType]: ResultType.Extended, [QueryKey.Limit]: LIST_LIMIT };
// Order decides ties. Hoods sit ahead of streets on purpose: "נווה צדק" is an exact match
// in both buckets, and someone naming it means the neighbourhood, not the street in it.
const SPECIFICITY = [
    AddressEntity.Hoods,
    AddressEntity.Streets,
    AddressEntity.Cities,
    AddressEntity.Areas,
    AddressEntity.TopAreas,
    AddressEntity.Regions,
];
/** Baked buckets, most specific first, paired with the id each one fills in. */
const BAKED_KINDS = [
    [BakedBucket.Hoods, LocationField.Neighborhood],
    [BakedBucket.Cities, LocationField.City],
    [BakedBucket.Areas, LocationField.Area],
    [BakedBucket.TopAreas, LocationField.TopArea],
    [BakedBucket.Regions, LocationField.Region],
];
const fromBaked = (place, own) => defined({
    region: place.region,
    topArea: place.topArea,
    area: place.area,
    city: place.city,
    [own]: place.id,
});
const defined = (entries) => Object.fromEntries(Object.entries(entries).filter(([, value]) => value !== undefined));
const toLocation = (place) => defined({
    region: place.region_id,
    topArea: place.top_area_id,
    area: place.area_id,
    city: place.city_id,
    neighborhood: place.hood_id,
    street: place.street_id,
});
const SEPARATORS = /[,\-–]/g;
// Dropped rather than spaced: Yad2 writes "Be'er Sheva" and מצפה אבי״ב, but people type
// "Beer Sheva". Turning the mark into a space would split the word instead of closing it.
const MARKS = /['"״׳`]/g;
const WHITESPACE = /\s+/g;
const normalize = (text) => text.replace(MARKS, '').replace(SEPARATORS, ' ').replace(WHITESPACE, ' ').trim().toLowerCase();
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
/**
 * English names belong to cities only. Hood transliterations exist but nobody types them,
 * and several of them share a prefix with "Tel Aviv", which would make the lookup ambiguous
 * and send an answerable query to the network.
 */
const bakedNames = (place, kind) => [place.full, place.title, kind === BakedBucket.Cities ? place.eng : undefined]
    .filter((name) => Boolean(name))
    .map(normalize);
/**
 * Resolve against the baked index, and only when the answer is not a guess.
 *
 * Walking from the most specific bucket outwards, the first bucket with any match decides:
 * exactly one hit is the answer, more than one means the name is genuinely ambiguous —
 * "הדר" names neighbourhoods in several cities — and the caller is better served by Yad2's
 * own ranking than by whichever row happens to come first here.
 */
const bakedLookup = (text) => {
    const wanted = normalize(text);
    if (wanted.length === 0)
        return undefined;
    for (const matches of [
        (name) => name === wanted,
        (name) => name.startsWith(wanted),
    ]) {
        for (const [kind, own] of BAKED_KINDS) {
            const hits = addressIndex[kind].filter((place) => bakedNames(place, kind).some(matches));
            if (hits.length === 1)
                return fromBaked(hits[0], own);
            if (hits.length > 1)
                return undefined;
        }
    }
    return undefined;
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
    /**
     * Transliteration varies more than matching can bridge — Yad2 spells it
     * "Rishon le-Tsiyon", people type "Rishon LeZion". Rather than guess, show the names
     * that share a first word so the caller can pick the right one.
     */
    const nearbySpellings = (text) => {
        const [first] = normalize(text).split(' ');
        if (first === undefined || first.length < MIN_HINT_LENGTH)
            return [];
        return addressIndex.cities
            .filter((city) => Boolean(city.eng) && normalize(city.eng).startsWith(first))
            .slice(0, MAX_HINTS)
            .map((city) => `${city.eng} (${city.heb})`);
    };
    const locate = async (text) => {
        // The baked index answers most queries without a request at all. Autocomplete still
        // handles what it cannot: streets, which are not baked, and names too ambiguous to
        // resolve without Yad2's ranking.
        const offline = bakedLookup(text);
        if (offline)
            return offline;
        const place = bestMatch(text, await autocomplete(text));
        if (place)
            return toLocation(place);
        const hints = nearbySpellings(text);
        throw new Yad2NotFoundError(hints.length
            ? `location "${text}". Yad2 indexes Hebrew; did you mean ${hints.join(', ')}?`
            : `location "${text}". Yad2's autocomplete only indexes Hebrew — try the Hebrew name.`);
    };
    return {
        regions: () => list(AddressPath.Regions, RegionSchema),
        topAreas: () => list(AddressPath.TopAreas, TopAreaSchema),
        areas: () => list(AddressPath.Areas, AreaSchema),
        cities: () => list(AddressPath.Cities, CitySchema),
        // cityId is optional: the endpoint happily returns all 3395 hoods without it, which is
        // what makes the baked address index a five-request job. Streets do require one.
        hoods: (cityId) => list(AddressPath.Hoods, HoodSchema, cityId === undefined ? {} : { [QueryKey.CityId]: cityId }),
        streets: (cityId) => list(AddressPath.Streets, StreetSchema, { [QueryKey.CityId]: cityId }),
        autocomplete,
        locate,
    };
};
