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

export type FilterLabel = z.infer<typeof FilterLabelSchema>;
export type FilterValue = z.infer<typeof FilterValueSchema>;
export type FilterLabelEntry = z.infer<typeof FilterLabelEntrySchema>;
export type FilterLabels = z.infer<typeof FilterLabelsSchema>;

export const isFilterLabels = (entry: FilterLabelEntry): entry is FilterLabel[] =>
  Array.isArray(entry);

export const describeFilters = (labels: FilterLabels): Record<string, string> =>
  Object.fromEntries(
    Object.entries(labels).map(([key, entry]) => [
      key,
      isFilterLabels(entry) ? entry.map((label) => label.title).join(', ') : entry.value,
    ]),
  );
