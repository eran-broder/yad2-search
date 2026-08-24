import { z } from 'zod';
import type { Gateway } from '../core/gateway.js';
import { AddressEntity, AddressPath, QueryKey, ResultType, Service } from '../core/enums/index.js';
import { Yad2NotFoundError } from '../core/errors.js';
import type { QueryParams } from '../core/query.js';
import type { EntityId } from '../schemas/common.js';
import {
  AreaSchema,
  AutocompleteSchema,
  CitySchema,
  HoodSchema,
  RegionSchema,
  StreetSchema,
  TopAreaSchema,
  addressList,
  type AddressSuggestions,
  type Place,
} from '../schemas/address.js';

const EXTENDED = { [QueryKey.ResultType]: ResultType.Extended, [QueryKey.Limit]: 1000 } as const;

const SPECIFICITY = [
  AddressEntity.Hoods,
  AddressEntity.Cities,
  AddressEntity.Areas,
  AddressEntity.TopAreas,
  AddressEntity.Regions,
] as const;

export interface SearchLocation {
  readonly region?: EntityId;
  readonly topArea?: EntityId;
  readonly area?: EntityId;
  readonly city?: EntityId;
  readonly neighborhood?: EntityId;
}

const defined = (entries: Record<string, EntityId | undefined>): SearchLocation =>
  Object.fromEntries(Object.entries(entries).filter(([, value]) => value !== undefined));

const toLocation = (place: Place): SearchLocation =>
  defined({
    region: place.region_id,
    topArea: place.top_area_id,
    area: place.area_id,
    city: place.city_id,
    neighborhood: place.hood_id,
  });

const SEPARATORS = /[,״"']/g;
const WHITESPACE = /\s+/g;

const normalize = (text: string): string =>
  text.replace(SEPARATORS, ' ').replace(WHITESPACE, ' ').trim().toLowerCase();

/**
 * How well a candidate answers the query, independent of how specific it is.
 * Autocomplete returns a best guess in every bucket, so a hood is always present even
 * when it barely matches — "תל אביב" yields the hood "תל ברוך" alongside the city
 * "תל אביב יפו". Taking the hood because hoods are more specific silently narrows a
 * city-wide search to one neighbourhood.
 */
const matchScore = (query: string, place: Place): number => {
  const wanted = normalize(query);
  const titles = [place.title_text, place.full_title_text]
    .filter((title): title is string => title !== undefined)
    .map(normalize);
  if (titles.some((title) => title === wanted)) return 3;
  if (titles.some((title) => title.startsWith(wanted))) return 2;
  if (titles.some((title) => title.includes(wanted))) return 1;
  return 0;
};

/** Best match wins; ties go to the more specific bucket, which is the useful default. */
const bestMatch = (query: string, suggestions: AddressSuggestions): Place | undefined => {
  // SPECIFICITY runs most-specific first, so a strict `>` leaves ties with the narrower
  // place — "כרמליה חיפה" still resolves to the neighbourhood, not the city.
  let best: Place | undefined;
  let bestScore = -1;
  for (const bucket of SPECIFICITY) {
    const place = suggestions[bucket]?.[0];
    if (place === undefined) continue;
    const score = matchScore(query, place);
    if (score > bestScore) {
      best = place;
      bestScore = score;
    }
  }
  return best;
};

export const createAddressResource = (gateway: Gateway) => {
  const path = (suffix: string): string => `/${Service.AddressMaster}${suffix}`;

  const list = <T extends z.ZodTypeAny>(
    suffix: string,
    item: T,
    params: QueryParams = {},
  ): Promise<z.infer<T>[]> =>
    gateway
      .getData(path(suffix), { ...EXTENDED, ...params }, addressList(item))
      .then((result) => result.data);

  const autocomplete = (text: string): Promise<AddressSuggestions> =>
    gateway.getData(path(`${AddressPath.Autocomplete}/${encodeURIComponent(text)}`), {}, AutocompleteSchema);

  const locate = async (text: string): Promise<SearchLocation> => {
    const place = bestMatch(text, await autocomplete(text));
    if (!place) throw new Yad2NotFoundError(`location "${text}"`);
    return toLocation(place);
  };

  return {
    regions: () => list(AddressPath.Regions, RegionSchema),
    topAreas: () => list(AddressPath.TopAreas, TopAreaSchema),
    areas: () => list(AddressPath.Areas, AreaSchema),
    cities: () => list(AddressPath.Cities, CitySchema),
    hoods: (cityId: EntityId) => list(AddressPath.Hoods, HoodSchema, { [QueryKey.CityId]: cityId }),
    streets: (cityId: EntityId) => list(AddressPath.Streets, StreetSchema, { [QueryKey.CityId]: cityId }),
    autocomplete,
    locate,
  };
};
