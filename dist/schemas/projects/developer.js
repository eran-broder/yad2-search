import { z } from 'zod';
export const DeveloperSchema = z.object({
    id: z.string(),
    name: z.string().optional(),
    logo: z.string().nullable().optional(),
    info: z.string().nullable().optional(),
    infoStyled: z.string().nullable().optional(),
    projectCount: z.string().optional(),
});
