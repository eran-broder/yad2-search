import { z } from 'zod';
export declare const MarketAddressSchema: z.ZodObject<{
    area: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        textHeb: z.ZodString;
        textEng: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    city: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        textHeb: z.ZodString;
        textEng: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const MarketConditionSchema: z.ZodObject<{
    id: z.ZodString;
    textHeb: z.ZodString;
}, z.core.$strip>;
export declare const MarketProductTypeSchema: z.ZodObject<{
    id: z.ZodString;
    textHeb: z.ZodString;
}, z.core.$strip>;
export declare const MarketItemSchema: z.ZodObject<{
    id: z.ZodNumber;
    adId: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    urlIdentifier: z.ZodOptional<z.ZodString>;
    productUrl: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodNumber>;
    productType: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        textHeb: z.ZodString;
    }, z.core.$strip>>;
    price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    previousPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    custId: z.ZodOptional<z.ZodNumber>;
    agencyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    orderTypeId: z.ZodOptional<z.ZodNumber>;
    isSMB: z.ZodOptional<z.ZodBoolean>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
    isDressed: z.ZodOptional<z.ZodBoolean>;
    condition: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        textHeb: z.ZodString;
    }, z.core.$strip>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    promotions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    images: z.ZodOptional<z.ZodArray<z.ZodString>>;
    video: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    address: z.ZodOptional<z.ZodObject<{
        area: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            textHeb: z.ZodString;
            textEng: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        city: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            textHeb: z.ZodString;
            textEng: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const MarketSearchSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        adId: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        urlIdentifier: z.ZodOptional<z.ZodString>;
        productUrl: z.ZodOptional<z.ZodString>;
        categoryId: z.ZodOptional<z.ZodNumber>;
        productType: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            textHeb: z.ZodString;
        }, z.core.$strip>>;
        price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        previousPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        custId: z.ZodOptional<z.ZodNumber>;
        agencyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        orderTypeId: z.ZodOptional<z.ZodNumber>;
        isSMB: z.ZodOptional<z.ZodBoolean>;
        isVerified: z.ZodOptional<z.ZodBoolean>;
        isDressed: z.ZodOptional<z.ZodBoolean>;
        condition: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            textHeb: z.ZodString;
        }, z.core.$strip>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        promotions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        images: z.ZodOptional<z.ZodArray<z.ZodString>>;
        video: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address: z.ZodOptional<z.ZodObject<{
            area: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                textHeb: z.ZodString;
                textEng: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            city: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                textHeb: z.ZodString;
                textEng: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    totalItems: z.ZodNumber;
    totalPages: z.ZodNumber;
    currentPage: z.ZodNumber;
}, z.core.$strip>;
export declare const MarketSuggestionSchema: z.ZodObject<{
    name: z.ZodString;
    highlight_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const MarketCategorySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    heName: z.ZodOptional<z.ZodString>;
    enName: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    eHandle: z.ZodOptional<z.ZodString>;
    collectionId: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    circleImg: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const MarketAutocompleteSchema: z.ZodObject<{
    searches: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        highlight_name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        heName: z.ZodOptional<z.ZodString>;
        enName: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        eHandle: z.ZodOptional<z.ZodString>;
        collectionId: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        circleImg: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const MarketMenuItemSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    collectionId: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const MarketFilterOptionSchema: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodString, z.ZodBoolean]>;
    text: z.ZodString;
    count: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const MarketAreaOptionSchema: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodString, z.ZodBoolean]>;
    text: z.ZodString;
    count: z.ZodOptional<z.ZodNumber>;
    areaId: z.ZodOptional<z.ZodString>;
    areaText: z.ZodOptional<z.ZodString>;
    topAreaId: z.ZodOptional<z.ZodString>;
    topAreaText: z.ZodOptional<z.ZodString>;
    cityId: z.ZodOptional<z.ZodString>;
    cityText: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const MarketAttributeSchema: z.ZodObject<{
    attributeId: z.ZodNumber;
    attributeTextHeb: z.ZodOptional<z.ZodString>;
    attributeTextEng: z.ZodOptional<z.ZodString>;
    totalOptionsCount: z.ZodOptional<z.ZodNumber>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodString, z.ZodBoolean]>;
        text: z.ZodString;
        count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const MarketFiltersSchema: z.ZodObject<{
    areas: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodString, z.ZodBoolean]>;
        text: z.ZodString;
        count: z.ZodOptional<z.ZodNumber>;
        areaId: z.ZodOptional<z.ZodString>;
        areaText: z.ZodOptional<z.ZodString>;
        topAreaId: z.ZodOptional<z.ZodString>;
        topAreaText: z.ZodOptional<z.ZodString>;
        cityId: z.ZodOptional<z.ZodString>;
        cityText: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    cities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodString, z.ZodBoolean]>;
        text: z.ZodString;
        count: z.ZodOptional<z.ZodNumber>;
        areaId: z.ZodOptional<z.ZodString>;
        areaText: z.ZodOptional<z.ZodString>;
        topAreaId: z.ZodOptional<z.ZodString>;
        topAreaText: z.ZodOptional<z.ZodString>;
        cityId: z.ZodOptional<z.ZodString>;
        cityText: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    price: z.ZodOptional<z.ZodObject<{
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, z.core.$strip>>;
    conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodString, z.ZodBoolean]>;
        text: z.ZodString;
        count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    productTypes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodString, z.ZodBoolean]>;
        text: z.ZodString;
        count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        attributeId: z.ZodNumber;
        attributeTextHeb: z.ZodOptional<z.ZodString>;
        attributeTextEng: z.ZodOptional<z.ZodString>;
        totalOptionsCount: z.ZodOptional<z.ZodNumber>;
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            value: z.ZodUnion<readonly [z.ZodString, z.ZodBoolean]>;
            text: z.ZodString;
            count: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    isSMB: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodString, z.ZodBoolean]>;
        text: z.ZodString;
        count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type MarketItem = z.infer<typeof MarketItemSchema>;
export type MarketFilters = z.infer<typeof MarketFiltersSchema>;
export type MarketAttribute = z.infer<typeof MarketAttributeSchema>;
export type MarketMenuItem = z.infer<typeof MarketMenuItemSchema>;
export type MarketAutocomplete = z.infer<typeof MarketAutocompleteSchema>;
export type MarketCategory = z.infer<typeof MarketCategorySchema>;
export type MarketSuggestion = z.infer<typeof MarketSuggestionSchema>;
