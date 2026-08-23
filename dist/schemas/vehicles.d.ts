import { z } from 'zod';
import { AdType } from '../core/enums/index.js';
export declare const VehicleAddressSchema: z.ZodObject<{
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
}, z.core.$strip>;
export declare const VehicleSpecificationSchema: z.ZodObject<{
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
}, z.core.$strip>]>>>;
export declare const VehicleAdSchema: z.ZodObject<{
    token: z.ZodString;
    orderId: z.ZodNumber;
    categoryId: z.ZodNumber;
    subcategoryId: z.ZodNumber;
    adType: z.ZodOptional<z.ZodEnum<typeof AdType>>;
    price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
    hand: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    engineType: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    gearBox: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    engineVolume: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
        id: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
        text: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        textEng: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    }, z.core.$strip>]>>;
    km: z.ZodOptional<z.ZodNumber>;
    vehicleDates: z.ZodOptional<z.ZodObject<{
        yearOfProduction: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
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
    waterCraftType: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>]>>;
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
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodString>;
        textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        priority: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    priority: z.ZodOptional<z.ZodNumber>;
    externalKonesUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    konesSaleDateTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customer: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        name: z.ZodOptional<z.ZodString>;
        secondName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        agencyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        agencyLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        isVirtualPhoneNumber: z.ZodOptional<z.ZodBoolean>;
        hideNumberDuringWeekend: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const VehicleFeedSchema: z.ZodObject<{
    ads: z.ZodArray<z.ZodObject<{
        token: z.ZodString;
        orderId: z.ZodNumber;
        categoryId: z.ZodNumber;
        subcategoryId: z.ZodNumber;
        adType: z.ZodOptional<z.ZodEnum<typeof AdType>>;
        price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
        hand: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineType: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        gearBox: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineVolume: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
            text: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            textEng: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        }, z.core.$strip>]>>;
        km: z.ZodOptional<z.ZodNumber>;
        vehicleDates: z.ZodOptional<z.ZodObject<{
            yearOfProduction: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
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
        waterCraftType: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>]>>;
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
        tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            priority: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        priority: z.ZodOptional<z.ZodNumber>;
        externalKonesUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        konesSaleDateTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        customer: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            secondName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            isVirtualPhoneNumber: z.ZodOptional<z.ZodBoolean>;
            hideNumberDuringWeekend: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
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
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        total: z.ZodOptional<z.ZodNumber>;
        totalPages: z.ZodOptional<z.ZodNumber>;
        pages: z.ZodOptional<z.ZodNumber>;
        perPage: z.ZodOptional<z.ZodNumber>;
        currentPage: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const VehicleBucketedFeedSchema: z.ZodObject<{
    private: z.ZodOptional<z.ZodArray<z.ZodObject<{
        token: z.ZodString;
        orderId: z.ZodNumber;
        categoryId: z.ZodNumber;
        subcategoryId: z.ZodNumber;
        adType: z.ZodOptional<z.ZodEnum<typeof AdType>>;
        price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
        hand: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineType: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        gearBox: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineVolume: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
            text: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            textEng: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        }, z.core.$strip>]>>;
        km: z.ZodOptional<z.ZodNumber>;
        vehicleDates: z.ZodOptional<z.ZodObject<{
            yearOfProduction: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
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
        waterCraftType: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>]>>;
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
        tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            priority: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        priority: z.ZodOptional<z.ZodNumber>;
        externalKonesUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        konesSaleDateTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        customer: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            secondName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            isVirtualPhoneNumber: z.ZodOptional<z.ZodBoolean>;
            hideNumberDuringWeekend: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
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
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    commercial: z.ZodOptional<z.ZodArray<z.ZodObject<{
        token: z.ZodString;
        orderId: z.ZodNumber;
        categoryId: z.ZodNumber;
        subcategoryId: z.ZodNumber;
        adType: z.ZodOptional<z.ZodEnum<typeof AdType>>;
        price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
        hand: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineType: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        gearBox: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineVolume: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
            text: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            textEng: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        }, z.core.$strip>]>>;
        km: z.ZodOptional<z.ZodNumber>;
        vehicleDates: z.ZodOptional<z.ZodObject<{
            yearOfProduction: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
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
        waterCraftType: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>]>>;
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
        tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            priority: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        priority: z.ZodOptional<z.ZodNumber>;
        externalKonesUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        konesSaleDateTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        customer: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            secondName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            isVirtualPhoneNumber: z.ZodOptional<z.ZodBoolean>;
            hideNumberDuringWeekend: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
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
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    platinum: z.ZodOptional<z.ZodArray<z.ZodObject<{
        token: z.ZodString;
        orderId: z.ZodNumber;
        categoryId: z.ZodNumber;
        subcategoryId: z.ZodNumber;
        adType: z.ZodOptional<z.ZodEnum<typeof AdType>>;
        price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
        hand: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineType: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        gearBox: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineVolume: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
            text: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            textEng: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        }, z.core.$strip>]>>;
        km: z.ZodOptional<z.ZodNumber>;
        vehicleDates: z.ZodOptional<z.ZodObject<{
            yearOfProduction: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
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
        waterCraftType: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>]>>;
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
        tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            priority: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        priority: z.ZodOptional<z.ZodNumber>;
        externalKonesUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        konesSaleDateTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        customer: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            secondName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            isVirtualPhoneNumber: z.ZodOptional<z.ZodBoolean>;
            hideNumberDuringWeekend: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
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
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    boost: z.ZodOptional<z.ZodArray<z.ZodObject<{
        token: z.ZodString;
        orderId: z.ZodNumber;
        categoryId: z.ZodNumber;
        subcategoryId: z.ZodNumber;
        adType: z.ZodOptional<z.ZodEnum<typeof AdType>>;
        price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
        hand: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineType: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        gearBox: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineVolume: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
            text: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            textEng: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        }, z.core.$strip>]>>;
        km: z.ZodOptional<z.ZodNumber>;
        vehicleDates: z.ZodOptional<z.ZodObject<{
            yearOfProduction: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
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
        waterCraftType: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>]>>;
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
        tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            priority: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        priority: z.ZodOptional<z.ZodNumber>;
        externalKonesUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        konesSaleDateTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        customer: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            secondName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            isVirtualPhoneNumber: z.ZodOptional<z.ZodBoolean>;
            hideNumberDuringWeekend: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
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
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    solo: z.ZodOptional<z.ZodArray<z.ZodObject<{
        token: z.ZodString;
        orderId: z.ZodNumber;
        categoryId: z.ZodNumber;
        subcategoryId: z.ZodNumber;
        adType: z.ZodOptional<z.ZodEnum<typeof AdType>>;
        price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
        hand: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineType: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        gearBox: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        engineVolume: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
            text: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            textEng: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        }, z.core.$strip>]>>;
        km: z.ZodOptional<z.ZodNumber>;
        vehicleDates: z.ZodOptional<z.ZodObject<{
            yearOfProduction: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
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
        waterCraftType: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>]>>;
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
        tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            textEng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            priority: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        priority: z.ZodOptional<z.ZodNumber>;
        externalKonesUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        konesSaleDateTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        customer: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            secondName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agencyLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            isVirtualPhoneNumber: z.ZodOptional<z.ZodBoolean>;
            hideNumberDuringWeekend: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
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
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    pagination: z.ZodObject<{
        total: z.ZodOptional<z.ZodNumber>;
        totalPages: z.ZodOptional<z.ZodNumber>;
        pages: z.ZodOptional<z.ZodNumber>;
        perPage: z.ZodOptional<z.ZodNumber>;
        currentPage: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type VehicleSpecification = z.infer<typeof VehicleSpecificationSchema>;
export type VehicleAd = z.infer<typeof VehicleAdSchema>;
export type VehicleFeed = z.infer<typeof VehicleFeedSchema>;
export type VehicleBucketedFeed = z.infer<typeof VehicleBucketedFeedSchema>;
