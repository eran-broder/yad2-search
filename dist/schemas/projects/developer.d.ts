import { z } from 'zod';
export declare const DeveloperSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    info: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    infoStyled: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    projectCount: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Developer = z.infer<typeof DeveloperSchema>;
