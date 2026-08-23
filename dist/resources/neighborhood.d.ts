import type { Gateway } from '../core/gateway.js';
import type { EntityId } from '../schemas/common.js';
import { type NeighborhoodSurvey, type SearchSuggestions } from '../schemas/neighborhood.js';
export declare const createNeighborhoodResource: (gateway: Gateway) => {
    survey: (hoodId: EntityId) => Promise<NeighborhoodSurvey>;
    suggestions: (query: string) => Promise<SearchSuggestions>;
};
