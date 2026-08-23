import { z } from 'zod';
export declare const ProjectAddressSchema: z.ZodObject<{
    region: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    topArea: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    area: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    city: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    neighborhood: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    street: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    house: z.ZodOptional<z.ZodObject<{
        number: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    coords: z.ZodOptional<z.ZodObject<{
        lon: z.ZodNumber;
        lat: z.ZodNumber;
    }, z.core.$strip>>;
    display: z.ZodOptional<z.ZodString>;
    addressMasterId: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export declare const ProjectDetailsSchema: z.ZodObject<{
    propertyTypes: z.ZodOptional<z.ZodArray<z.ZodString>>;
    property: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    projectCategories: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    companyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    roomsCount: z.ZodOptional<z.ZodNumber>;
    minRooms: z.ZodOptional<z.ZodNumber>;
    maxRooms: z.ZodOptional<z.ZodNumber>;
    minPrice: z.ZodOptional<z.ZodNumber>;
    maxPrice: z.ZodOptional<z.ZodNumber>;
    minFloor: z.ZodOptional<z.ZodNumber>;
    maxFloor: z.ZodOptional<z.ZodNumber>;
    floors: z.ZodOptional<z.ZodNumber>;
    minSquaremeter: z.ZodOptional<z.ZodNumber>;
    maxSquaremeter: z.ZodOptional<z.ZodNumber>;
    entranceDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timelineStatus: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
}, z.core.$strip>;
export declare const ProjectSpecSchema: z.ZodObject<{
    category: z.ZodOptional<z.ZodString>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const ProjectMetaSchema: z.ZodObject<{
    projectName: z.ZodOptional<z.ZodString>;
    projectLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    coverImage: z.ZodOptional<z.ZodString>;
    images: z.ZodOptional<z.ZodArray<z.ZodString>>;
    video: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promotionImage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promotionText: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    flag: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    info: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    infoHeader: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    infoStyled: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    infoHeaderStyled: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    projectBenefits: z.ZodOptional<z.ZodArray<z.ZodString>>;
    videos: z.ZodOptional<z.ZodArray<z.ZodString>>;
    has3D: z.ZodOptional<z.ZodBoolean>;
    hasAiDesign: z.ZodOptional<z.ZodBoolean>;
    hideDealsHistory: z.ZodOptional<z.ZodBoolean>;
    previewType: z.ZodOptional<z.ZodString>;
    immediateOccupancy: z.ZodOptional<z.ZodBoolean>;
    isOnSale: z.ZodOptional<z.ZodBoolean>;
    buildings: z.ZodOptional<z.ZodNumber>;
    apartments: z.ZodOptional<z.ZodNumber>;
    blueprints: z.ZodOptional<z.ZodArray<z.ZodString>>;
    bank: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companyDetails: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        info: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        infoStyled: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        projectCount: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    specs: z.ZodOptional<z.ZodArray<z.ZodObject<{
        category: z.ZodOptional<z.ZodString>;
        labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const ProjectDatesSchema: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ProjectSchema: z.ZodObject<{
    token: z.ZodString;
    projectId: z.ZodOptional<z.ZodNumber>;
    projectYzerId: z.ZodOptional<z.ZodNumber>;
    treedisId: z.ZodOptional<z.ZodString>;
    orderId: z.ZodOptional<z.ZodNumber>;
    adNumber: z.ZodOptional<z.ZodNumber>;
    adType: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodNumber>;
    subcategoryId: z.ZodOptional<z.ZodNumber>;
    statusId: z.ZodOptional<z.ZodNumber>;
    packageId: z.ZodOptional<z.ZodNumber>;
    slug: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    abovePrice: z.ZodOptional<z.ZodNullable<z.ZodCoercedNumber<unknown>>>;
    address: z.ZodOptional<z.ZodObject<{
        region: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        topArea: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        area: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        city: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        neighborhood: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        street: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        house: z.ZodOptional<z.ZodObject<{
            number: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        coords: z.ZodOptional<z.ZodObject<{
            lon: z.ZodNumber;
            lat: z.ZodNumber;
        }, z.core.$strip>>;
        display: z.ZodOptional<z.ZodString>;
        addressMasterId: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>>;
    additionalDetails: z.ZodOptional<z.ZodObject<{
        propertyTypes: z.ZodOptional<z.ZodArray<z.ZodString>>;
        property: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        projectCategories: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        companyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        roomsCount: z.ZodOptional<z.ZodNumber>;
        minRooms: z.ZodOptional<z.ZodNumber>;
        maxRooms: z.ZodOptional<z.ZodNumber>;
        minPrice: z.ZodOptional<z.ZodNumber>;
        maxPrice: z.ZodOptional<z.ZodNumber>;
        minFloor: z.ZodOptional<z.ZodNumber>;
        maxFloor: z.ZodOptional<z.ZodNumber>;
        floors: z.ZodOptional<z.ZodNumber>;
        minSquaremeter: z.ZodOptional<z.ZodNumber>;
        maxSquaremeter: z.ZodOptional<z.ZodNumber>;
        entranceDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timelineStatus: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
    }, z.core.$strip>>;
    metaData: z.ZodOptional<z.ZodObject<{
        projectName: z.ZodOptional<z.ZodString>;
        projectLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImage: z.ZodOptional<z.ZodString>;
        images: z.ZodOptional<z.ZodArray<z.ZodString>>;
        video: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        promotionImage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        promotionText: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        flag: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        info: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        infoHeader: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        infoStyled: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        infoHeaderStyled: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        projectBenefits: z.ZodOptional<z.ZodArray<z.ZodString>>;
        videos: z.ZodOptional<z.ZodArray<z.ZodString>>;
        has3D: z.ZodOptional<z.ZodBoolean>;
        hasAiDesign: z.ZodOptional<z.ZodBoolean>;
        hideDealsHistory: z.ZodOptional<z.ZodBoolean>;
        previewType: z.ZodOptional<z.ZodString>;
        immediateOccupancy: z.ZodOptional<z.ZodBoolean>;
        isOnSale: z.ZodOptional<z.ZodBoolean>;
        buildings: z.ZodOptional<z.ZodNumber>;
        apartments: z.ZodOptional<z.ZodNumber>;
        blueprints: z.ZodOptional<z.ZodArray<z.ZodString>>;
        bank: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        companyDetails: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
            logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            info: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            infoStyled: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            projectCount: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        specs: z.ZodOptional<z.ZodArray<z.ZodObject<{
            category: z.ZodOptional<z.ZodString>;
            labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    packages: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    dates: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    customer: z.ZodOptional<z.ZodObject<{
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Project = z.infer<typeof ProjectSchema>;
export type ProjectSpec = z.infer<typeof ProjectSpecSchema>;
