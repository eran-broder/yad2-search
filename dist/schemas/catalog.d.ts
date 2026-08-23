import { z } from 'zod';
export declare const CatalogEntrySchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    engTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hex: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const CatalogModelSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    engTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hex: z.ZodOptional<z.ZodString>;
    manufacturer: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const CatalogRangeSchema: z.ZodObject<{
    from: z.ZodNumber;
    to: z.ZodNumber;
    step: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const CatalogOptionSchema: z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    engTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hex: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>, z.ZodObject<{
    from: z.ZodNumber;
    to: z.ZodNumber;
    step: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>]>;
export declare const VehicleCatalogSchema: z.ZodObject<{
    manufacturer: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodString;
        engTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hex: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    model: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodString;
        engTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hex: z.ZodOptional<z.ZodString>;
        manufacturer: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            title: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    subModel: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodString;
        engTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hex: z.ZodOptional<z.ZodString>;
        manufacturer: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            title: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    year: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
        step: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    electricRange: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
        step: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    batteryCapacity: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
        step: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const VehicleCatalogOptionsSchema: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    engTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hex: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>, z.ZodObject<{
    from: z.ZodNumber;
    to: z.ZodNumber;
    step: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>]>>;
export type CatalogEntry = z.infer<typeof CatalogEntrySchema>;
export type CatalogModel = z.infer<typeof CatalogModelSchema>;
export type CatalogRange = z.infer<typeof CatalogRangeSchema>;
export type CatalogOption = z.infer<typeof CatalogOptionSchema>;
export type VehicleCatalog = z.infer<typeof VehicleCatalogSchema>;
export type VehicleCatalogOptions = z.infer<typeof VehicleCatalogOptionsSchema>;
export declare const isCatalogRange: (option: CatalogOption) => option is CatalogRange;
export declare const isCatalogEntries: (option: CatalogOption) => option is CatalogEntry[];
