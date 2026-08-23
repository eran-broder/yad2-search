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

export type SurveySegment = z.infer<typeof SurveySegmentSchema>;
export type NeighborhoodSurvey = z.infer<typeof NeighborhoodSurveySchema>;
export type SearchSuggestions = z.infer<typeof SearchSuggestionsSchema>;

export const scoreBySegment = (
  survey: NeighborhoodSurvey,
): Record<NeighborhoodSegment, number> =>
  Object.fromEntries(survey.segmantList.map((s) => [s.id, s.score])) as Record<
    NeighborhoodSegment,
    number
  >;
