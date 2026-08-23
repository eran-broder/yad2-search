import { z } from 'zod';
export declare const SliderOptionSchema: z.ZodObject<{
    from: z.ZodNumber;
    to: z.ZodNumber;
    step: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const ToggleOptionSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
}, z.core.$strip>;
export declare const PropertyOptionSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    propertyGroupId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const PropertyGroupOptionSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    engTitle: z.ZodOptional<z.ZodString>;
    isSearchable: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const RealestateOptionsSchema: z.ZodObject<{
    property: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        propertyGroupId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    propertyGroup: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        engTitle: z.ZodOptional<z.ZodString>;
        isSearchable: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    rooms: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
        step: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    squaremeter: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
        step: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    squareMeterBuild: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
        step: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    floor: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
        step: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    price: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
        step: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    dealType: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
    }, z.core.$strip>>>;
    toilet: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
    }, z.core.$strip>>>;
    warehouse: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
    }, z.core.$strip>>>;
    shelter: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const CommercialDynamicOptionsSchema: z.ZodObject<{
    price: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
        step: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$catchall<z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
}, z.core.$strip>>>;
export type RealestateOptions = z.infer<typeof RealestateOptionsSchema>;
export type CommercialDynamicOptions = z.infer<typeof CommercialDynamicOptionsSchema>;
export type SliderOption = z.infer<typeof SliderOptionSchema>;
export type ToggleOption = z.infer<typeof ToggleOptionSchema>;
