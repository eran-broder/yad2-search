import { z } from 'zod';
import { NeighborhoodSegment } from '../core/enums/index.js';
export const SurveySegmentSchema = z.object({
    id: z.enum(NeighborhoodSegment),
    title: z.string(),
    score: z.number(),
    amountRespondents: z.number().optional(),
});
export const NeighborhoodSurveySchema = z.object({
    hoodId: z.number(),
    segmantList: z.array(SurveySegmentSchema),
});
export const SearchSuggestionsSchema = z.object({
    suggestions: z.record(z.string(), z.array(z.string())),
});
export const scoreBySegment = (survey) => Object.fromEntries(survey.segmantList.map((s) => [s.id, s.score]));
