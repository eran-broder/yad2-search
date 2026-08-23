import { z } from 'zod';
export declare const RealestateItemDetailsSchema: z.ZodObject<{
    property: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    propertyCondition: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
        text: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        textEng: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    }, z.core.$strip>>;
    roomsCount: z.ZodOptional<z.ZodNumber>;
    squareMeter: z.ZodOptional<z.ZodNumber>;
    squareMeterBuild: z.ZodOptional<z.ZodNumber>;
    promotions: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
    propertyGroup: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    balconiesCount: z.ZodOptional<z.ZodNumber>;
    squareMeterGarden: z.ZodOptional<z.ZodNumber>;
    entranceDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isEnterDateFlexible: z.ZodOptional<z.ZodBoolean>;
    buildingTopFloor: z.ZodOptional<z.ZodNumber>;
    parkingSpacesCount: z.ZodOptional<z.ZodNumber>;
    isPillarBuilding: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const RealestateItemSchema: z.ZodObject<{
    token: z.ZodString;
    orderId: z.ZodOptional<z.ZodNumber>;
    adNumber: z.ZodOptional<z.ZodNumber>;
    adType: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodNumber>;
    subcategoryId: z.ZodOptional<z.ZodNumber>;
    statusId: z.ZodOptional<z.ZodNumber>;
    priority: z.ZodOptional<z.ZodNumber>;
    price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    abovePrice: z.ZodOptional<z.ZodNullable<z.ZodCoercedNumber<unknown>>>;
    customer: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodOptional<z.ZodString>;
        secondName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        agencyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        agencyLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        isVirtualPhoneNumber: z.ZodOptional<z.ZodBoolean>;
        hideNumberDuringWeekend: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        priority: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    dates: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
        endsAt: z.ZodOptional<z.ZodString>;
        rebouncedAt: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    address: z.ZodOptional<z.ZodObject<{
        region: z.ZodOptional<z.ZodObject<{
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
        coords: z.ZodOptional<z.ZodObject<{
            lon: z.ZodNumber;
            lat: z.ZodNumber;
        }, z.core.$strip>>;
        topArea: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        addressMasterId: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        house: z.ZodOptional<z.ZodObject<{
            number: z.ZodOptional<z.ZodNumber>;
            floor: z.ZodOptional<z.ZodNumber>;
            entrance: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    additionalDetails: z.ZodOptional<z.ZodObject<{
        property: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        propertyCondition: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
            text: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            textEng: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        }, z.core.$strip>>;
        roomsCount: z.ZodOptional<z.ZodNumber>;
        squareMeter: z.ZodOptional<z.ZodNumber>;
        squareMeterBuild: z.ZodOptional<z.ZodNumber>;
        promotions: z.ZodOptional<z.ZodArray<z.ZodUnknown>>;
        propertyGroup: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        balconiesCount: z.ZodOptional<z.ZodNumber>;
        squareMeterGarden: z.ZodOptional<z.ZodNumber>;
        entranceDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        isEnterDateFlexible: z.ZodOptional<z.ZodBoolean>;
        buildingTopFloor: z.ZodOptional<z.ZodNumber>;
        parkingSpacesCount: z.ZodOptional<z.ZodNumber>;
        isPillarBuilding: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    inProperty: z.ZodOptional<z.ZodObject<{
        includeAirconditioner: z.ZodOptional<z.ZodBoolean>;
        includeBalcony: z.ZodOptional<z.ZodBoolean>;
        includeBoiler: z.ZodOptional<z.ZodBoolean>;
        includeBars: z.ZodOptional<z.ZodBoolean>;
        includeSecurityRoom: z.ZodOptional<z.ZodBoolean>;
        includeBuildingShelter: z.ZodOptional<z.ZodBoolean>;
        includeFloorShelter: z.ZodOptional<z.ZodBoolean>;
        includeWarehouse: z.ZodOptional<z.ZodBoolean>;
        includeTornado: z.ZodOptional<z.ZodBoolean>;
        includeElevator: z.ZodOptional<z.ZodBoolean>;
        includeParking: z.ZodOptional<z.ZodBoolean>;
        includeAccessibility: z.ZodOptional<z.ZodBoolean>;
        includeFurniture: z.ZodOptional<z.ZodBoolean>;
        isHandicapped: z.ZodOptional<z.ZodBoolean>;
        isImmediateEntrance: z.ZodOptional<z.ZodBoolean>;
        isAssetExclusive: z.ZodOptional<z.ZodBoolean>;
        isKitchenKosher: z.ZodOptional<z.ZodBoolean>;
        isRenovated: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    searchText: z.ZodOptional<z.ZodString>;
    priceBeforeTag: z.ZodOptional<z.ZodNumber>;
    furnitureInfo: z.ZodOptional<z.ZodUnknown>;
    metaData: z.ZodOptional<z.ZodObject<{
        coverImage: z.ZodOptional<z.ZodString>;
        images: z.ZodOptional<z.ZodArray<z.ZodString>>;
        video: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        priceBeforeTag: z.ZodOptional<z.ZodNumber>;
        squareMeterBuild: z.ZodOptional<z.ZodNumber>;
        description: z.ZodOptional<z.ZodString>;
        shelterDistance: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RealestateItem = z.infer<typeof RealestateItemSchema>;
