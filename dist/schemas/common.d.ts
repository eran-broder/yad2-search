import { z } from 'zod';
export declare const envelope: <T extends z.ZodTypeAny>(data: T) => z.ZodObject<{
    data: T;
}, z.core.$strip>;
export declare const EntityIdSchema: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export declare const ids: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
export declare const toggle: z.ZodOptional<z.ZodBoolean>;
export declare const page: z.ZodOptional<z.ZodNumber>;
export declare const LabelSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    text: z.ZodOptional<z.ZodString>;
    textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const LocalizedLabelSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    textHeb: z.ZodString;
    textEng: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const TextOrLabelSchema: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    text: z.ZodOptional<z.ZodString>;
    textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>]>;
export declare const oneOrMany: <T extends z.ZodTypeAny>(schema: T) => z.ZodUnion<readonly [T, z.ZodArray<T>]>;
export declare const CoordsSchema: z.ZodObject<{
    lon: z.ZodNumber;
    lat: z.ZodNumber;
}, z.core.$strip>;
export declare const TagSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodString>;
    textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    priority: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const SellerSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
    secondName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agencyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agencyLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isVirtualPhoneNumber: z.ZodOptional<z.ZodBoolean>;
    hideNumberDuringWeekend: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const PaginationSchema: z.ZodObject<{
    total: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodNumber>;
    pages: z.ZodOptional<z.ZodNumber>;
    perPage: z.ZodOptional<z.ZodNumber>;
    currentPage: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Pagination = z.infer<typeof PaginationSchema>;
export type Label = z.infer<typeof LabelSchema>;
export type TextOrLabel = z.infer<typeof TextOrLabelSchema>;
export type Coords = z.infer<typeof CoordsSchema>;
export type EntityId = z.infer<typeof EntityIdSchema>;
export type Tag = z.infer<typeof TagSchema>;
export type Seller = z.infer<typeof SellerSchema>;
