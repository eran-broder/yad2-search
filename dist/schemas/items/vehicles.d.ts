import { z } from 'zod';
export declare const VehicleItemSchema: z.ZodObject<{
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
        topArea: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    manufacturer: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    model: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    subModel: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    color: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    bodyType: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    owner: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    originalOwner: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    previousOwner: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    gearBox: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    engineType: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    carFamilyType: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>]>>;
    powertrainArchitecture: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    carTag: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        priority: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    filterTags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    specification: z.ZodOptional<z.ZodObject<{
        airBags: z.ZodOptional<z.ZodNumber>;
        electricWindow: z.ZodOptional<z.ZodNumber>;
        pollutionLevel: z.ZodOptional<z.ZodNumber>;
        safetyPoints: z.ZodOptional<z.ZodNumber>;
        ignition: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$catchall<z.ZodUnion<readonly [z.ZodBoolean, z.ZodNumber, z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>]>>>>;
    vehicleDates: z.ZodOptional<z.ZodObject<{
        yearOfProduction: z.ZodOptional<z.ZodNumber>;
        monthOfProduction: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        testDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    km: z.ZodOptional<z.ZodNumber>;
    kmInLastTest: z.ZodOptional<z.ZodNumber>;
    hand: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    seats: z.ZodOptional<z.ZodNumber>;
    numberOfDoors: z.ZodOptional<z.ZodNumber>;
    horsePower: z.ZodOptional<z.ZodNumber>;
    engineVolume: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>]>>;
    combinedFuelConsumption: z.ZodOptional<z.ZodNumber>;
    allElectricRange: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
    batteryCapacity: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
    hasChangesFromOriginalModel: z.ZodOptional<z.ZodBoolean>;
    isContactLeadSupported: z.ZodOptional<z.ZodBoolean>;
    specialType: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>]>>;
    specialModel: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>]>>;
    packages: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    commitment: z.ZodOptional<z.ZodArray<z.ZodString>>;
    commitmentInfo: z.ZodOptional<z.ZodObject<{
        maintenances: z.ZodOptional<z.ZodArray<z.ZodString>>;
        services: z.ZodOptional<z.ZodArray<z.ZodString>>;
        insurances: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            period: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    paymentInstallments: z.ZodOptional<z.ZodObject<{
        advancePayment: z.ZodOptional<z.ZodNumber>;
        monthlyPayment: z.ZodOptional<z.ZodNumber>;
        numberOfPayment: z.ZodOptional<z.ZodNumber>;
        balance: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    metaData: z.ZodOptional<z.ZodObject<{
        coverImage: z.ZodOptional<z.ZodString>;
        images: z.ZodOptional<z.ZodArray<z.ZodString>>;
        video: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        priceBeforeTag: z.ZodOptional<z.ZodNumber>;
        squareMeterBuild: z.ZodOptional<z.ZodNumber>;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type VehicleItem = z.infer<typeof VehicleItemSchema>;
