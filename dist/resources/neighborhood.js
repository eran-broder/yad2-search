import { NeighborhoodPath, QueryKey, Service } from '../core/enums/index.js';
import { NeighborhoodSurveySchema, SearchSuggestionsSchema, } from '../schemas/neighborhood.js';
export const createNeighborhoodResource = (gateway) => ({
    survey: (hoodId) => gateway.getData(`/${Service.NeighborhoodSurvey}/${hoodId}`, {}, NeighborhoodSurveySchema),
    suggestions: (query) => gateway.getData(`/${Service.FreeSearchAutocomplete}${NeighborhoodPath.Suggestions}`, { [QueryKey.FreeQuery]: query }, SearchSuggestionsSchema),
});
