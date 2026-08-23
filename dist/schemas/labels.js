import { z } from 'zod';
import { EntityIdSchema } from './common.js';
export const FilterLabelSchema = z.object({
    id: EntityIdSchema,
    title: z.string(),
    pluralTitle: z.string().optional(),
    engTitle: z.string().nullable().optional(),
});
export const FilterValueSchema = z.object({ value: z.string() });
export const FilterLabelEntrySchema = z.union([
    z.array(FilterLabelSchema),
    FilterValueSchema,
]);
export const FilterLabelsSchema = z.record(z.string(), FilterLabelEntrySchema);
export const isFilterLabels = (entry) => Array.isArray(entry);
export const describeFilters = (labels) => Object.fromEntries(Object.entries(labels).map(([key, entry]) => [
    key,
    isFilterLabels(entry) ? entry.map((label) => label.title).join(', ') : entry.value,
]));
