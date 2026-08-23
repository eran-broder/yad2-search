import { z } from 'zod';
export const MediaSchema = z.object({
    coverImage: z.string().optional(),
    images: z.array(z.string()).optional(),
    video: z.string().nullable().optional(),
    priceBeforeTag: z.number().optional(),
    squareMeterBuild: z.number().optional(),
});
export const ProjectMediaSchema = MediaSchema.extend({
    projectName: z.string().optional(),
    projectLogo: z.string().optional(),
    promotionImage: z.string().optional(),
});
