import { z } from 'zod';
import { ProjectPropertyType } from '../core/enums/index.js';
import {
  PaginationFields,
  PriceFields,
  ProjectLocationFields,
  RoomsFields,
  flag,
  pageField,
} from './fields.js';

const LimitField = { limit: pageField };
const OccupancyField = { immediateOccupancy: flag };
const PropertyTypeField = { propertyType: z.enum(ProjectPropertyType).optional() };

export const ProjectSearchParamsSchema = z.object({
  ...ProjectLocationFields,
  ...PropertyTypeField,
  ...PriceFields,
  ...RoomsFields,
  ...PaginationFields,
  ...OccupancyField,
});

export const ProjectListParamsSchema = z.object({
  ...ProjectLocationFields,
  ...PropertyTypeField,
  ...RoomsFields,
  ...PaginationFields,
  ...OccupancyField,
  ...LimitField,
});

export const ProjectListingParamsSchema = z.object({
  ...ProjectLocationFields,
  ...PriceFields,
  ...RoomsFields,
  ...PaginationFields,
  ...OccupancyField,
  ...LimitField,
});

export const DeveloperFeedParamsSchema = z.object({
  ...ProjectLocationFields,
  ...PaginationFields,
  ...LimitField,
});

export const DeveloperListParamsSchema = z.object({ ...LimitField });

export type ProjectSearchParams = z.infer<typeof ProjectSearchParamsSchema>;
export type ProjectListParams = z.infer<typeof ProjectListParamsSchema>;
export type ProjectListingParams = z.infer<typeof ProjectListingParamsSchema>;
export type DeveloperFeedParams = z.infer<typeof DeveloperFeedParamsSchema>;
export type DeveloperListParams = z.infer<typeof DeveloperListParamsSchema>;
