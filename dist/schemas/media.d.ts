import { z } from 'zod';
export declare const MediaSchema: z.ZodObject<{
    coverImage: z.ZodOptional<z.ZodString>;
    images: z.ZodOptional<z.ZodArray<z.ZodString>>;
    video: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceBeforeTag: z.ZodOptional<z.ZodNumber>;
    squareMeterBuild: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const ProjectMediaSchema: z.ZodObject<{
    coverImage: z.ZodOptional<z.ZodString>;
    images: z.ZodOptional<z.ZodArray<z.ZodString>>;
    video: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priceBeforeTag: z.ZodOptional<z.ZodNumber>;
    squareMeterBuild: z.ZodOptional<z.ZodNumber>;
    projectName: z.ZodOptional<z.ZodString>;
    projectLogo: z.ZodOptional<z.ZodString>;
    promotionImage: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Media = z.infer<typeof MediaSchema>;
export type ProjectMedia = z.infer<typeof ProjectMediaSchema>;
export interface MediaBearing {
    readonly metaData?: Media;
    readonly images?: readonly string[];
}
