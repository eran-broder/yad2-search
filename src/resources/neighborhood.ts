import type { Gateway } from '../core/gateway.js';
import { NeighborhoodPath, QueryKey, Service } from '../core/enums/index.js';
import type { EntityId } from '../schemas/common.js';
import {
  NeighborhoodSurveySchema,
  SearchSuggestionsSchema,
  type NeighborhoodSurvey,
  type SearchSuggestions,
} from '../schemas/neighborhood.js';

export const createNeighborhoodResource = (gateway: Gateway) => ({
  survey: (hoodId: EntityId): Promise<NeighborhoodSurvey> =>
    gateway.getData(`/${Service.NeighborhoodSurvey}/${hoodId}`, {}, NeighborhoodSurveySchema),
  suggestions: (query: string): Promise<SearchSuggestions> =>
    gateway.getData(
      `/${Service.FreeSearchAutocomplete}${NeighborhoodPath.Suggestions}`,
      { [QueryKey.FreeQuery]: query },
      SearchSuggestionsSchema,
    ),
});
