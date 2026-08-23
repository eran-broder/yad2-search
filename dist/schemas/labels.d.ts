import { z } from 'zod';
export declare const FilterLabelSchema: z.ZodObject<{
    id: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    title: z.ZodString;
    pluralTitle: z.ZodOptional<z.ZodString>;
    engTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const FilterValueSchema: z.ZodObject<{
    value: z.ZodString;
}, z.core.$strip>;
export declare const FilterLabelEntrySchema: z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
    id: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    title: z.ZodString;
    pluralTitle: z.ZodOptional<z.ZodString>;
    engTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>>, z.ZodObject<{
    value: z.ZodString;
}, z.core.$strip>]>;
export declare const FilterLabelsSchema: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
    id: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    title: z.ZodString;
    pluralTitle: z.ZodOptional<z.ZodString>;
    engTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>>, z.ZodObject<{
    value: z.ZodString;
}, z.core.$strip>]>>;
export type FilterLabel = z.infer<typeof FilterLabelSchema>;
export type FilterValue = z.infer<typeof FilterValueSchema>;
export type FilterLabelEntry = z.infer<typeof FilterLabelEntrySchema>;
export type FilterLabels = z.infer<typeof FilterLabelsSchema>;
export declare const isFilterLabels: (entry: FilterLabelEntry) => entry is FilterLabel[];
export declare const describeFilters: (labels: FilterLabels) => Record<string, string>;
