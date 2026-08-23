import { z } from 'zod';
import { NeighborhoodSegment } from '../core/enums/index.js';
export declare const SurveySegmentSchema: z.ZodObject<{
    id: z.ZodEnum<typeof NeighborhoodSegment>;
    title: z.ZodString;
    score: z.ZodNumber;
    amountRespondents: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const NeighborhoodSurveySchema: z.ZodObject<{
    hoodId: z.ZodNumber;
    segmantList: z.ZodArray<z.ZodObject<{
        id: z.ZodEnum<typeof NeighborhoodSegment>;
        title: z.ZodString;
        score: z.ZodNumber;
        amountRespondents: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const SearchSuggestionsSchema: z.ZodObject<{
    suggestions: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type SurveySegment = z.infer<typeof SurveySegmentSchema>;
export type NeighborhoodSurvey = z.infer<typeof NeighborhoodSurveySchema>;
export type SearchSuggestions = z.infer<typeof SearchSuggestionsSchema>;
export declare const scoreBySegment: (survey: NeighborhoodSurvey) => Record<NeighborhoodSegment, number>;
