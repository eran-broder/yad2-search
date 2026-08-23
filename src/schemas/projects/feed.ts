import { z } from 'zod';
import { DeveloperSchema } from './developer.js';
import { ProjectSchema } from './project.js';

export const ProjectFeedSchema = z.object({
  total: z.number().optional(),
  projects: z.array(ProjectSchema),
  similarProjects: z.array(ProjectSchema).optional(),
});

export const ProjectListSchema = z.object({ projects: z.array(ProjectSchema) });

export const ListingSchema = ProjectSchema.extend({
  listingId: z.string().optional(),
  listingOrder: z.number().optional(),
});

export const ListingListSchema = z.object({ listings: z.array(ListingSchema) });

export const DeveloperFeedSchema = z.object({
  developers: z.array(DeveloperSchema),
  total: z.number().optional(),
});

export const DeveloperListSchema = z.object({ developers: z.array(DeveloperSchema) });


export type ProjectFeed = z.infer<typeof ProjectFeedSchema>;
export type Listing = z.infer<typeof ListingSchema>;
