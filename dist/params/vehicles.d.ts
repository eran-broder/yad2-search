import { z } from 'zod';
import { CarColor, CarTag, SpecialVehicleType, WatercraftType, CarFamilyType, EngineType, GearBox, MotorcycleLicense, MotorcycleType, OwnerType } from '../core/enums/index.js';
export declare const VehicleCommonParamsSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    priceOnly: z.ZodOptional<z.ZodBoolean>;
    imgOnly: z.ZodOptional<z.ZodBoolean>;
    area: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    topArea: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    year: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    price: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    km: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    hand: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const CarSearchParamsSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    priceOnly: z.ZodOptional<z.ZodBoolean>;
    imgOnly: z.ZodOptional<z.ZodBoolean>;
    area: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    topArea: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    year: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    price: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    km: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    hand: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    manufacturer: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    model: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    subModel: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    engineval: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    electricRange: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    batteryCapacity: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    carTag: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<typeof CarTag>, z.ZodArray<z.ZodEnum<typeof CarTag>>]>>;
    group_color: z.ZodOptional<z.ZodEnum<typeof CarColor>>;
    ownerID: z.ZodOptional<z.ZodEnum<typeof OwnerType>>;
    seats: z.ZodOptional<z.ZodNumber>;
    carFamilyType: z.ZodOptional<z.ZodEnum<typeof CarFamilyType>>;
    gearBox: z.ZodOptional<z.ZodEnum<typeof GearBox>>;
    engineType: z.ZodOptional<z.ZodEnum<typeof EngineType>>;
}, z.core.$strip>;
export declare const MotorcycleSearchParamsSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    priceOnly: z.ZodOptional<z.ZodBoolean>;
    imgOnly: z.ZodOptional<z.ZodBoolean>;
    area: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    topArea: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    year: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    price: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    km: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    hand: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    manufacturer: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    model: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    engineval: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodEnum<typeof MotorcycleLicense>>;
    motorCycleType: z.ZodOptional<z.ZodEnum<typeof MotorcycleType>>;
}, z.core.$strip>;
export declare const ScooterSearchParamsSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    priceOnly: z.ZodOptional<z.ZodBoolean>;
    imgOnly: z.ZodOptional<z.ZodBoolean>;
    area: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    topArea: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    year: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    price: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    km: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    hand: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    manufacturer: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    model: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    engineval: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    license: z.ZodOptional<z.ZodEnum<typeof MotorcycleLicense>>;
}, z.core.$strip>;
export declare const TruckSearchParamsSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    priceOnly: z.ZodOptional<z.ZodBoolean>;
    imgOnly: z.ZodOptional<z.ZodBoolean>;
    area: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    topArea: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    year: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    price: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    km: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    hand: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    CarSpecialSubCatID: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
}, z.core.$strip>;
export declare const WatercraftSearchParamsSchema: z.ZodObject<{
    topArea: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    area: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    price: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    year: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    priceOnly: z.ZodOptional<z.ZodBoolean>;
    imgOnly: z.ZodOptional<z.ZodBoolean>;
    page: z.ZodOptional<z.ZodNumber>;
    CarSpecialSubCatID: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<typeof WatercraftType>, z.ZodArray<z.ZodEnum<typeof WatercraftType>>]>>;
}, z.core.$strip>;
export declare const OtherVehicleSearchParamsSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    priceOnly: z.ZodOptional<z.ZodBoolean>;
    imgOnly: z.ZodOptional<z.ZodBoolean>;
    area: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    topArea: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    year: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    price: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    km: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    hand: z.ZodOptional<z.ZodObject<{
        from: z.ZodNumber;
        to: z.ZodNumber;
    }, z.core.$strip>>;
    CarSpecialID: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<typeof SpecialVehicleType>, z.ZodArray<z.ZodEnum<typeof SpecialVehicleType>>]>>;
}, z.core.$strip>;
export type CarSearchParams = z.infer<typeof CarSearchParamsSchema>;
export type MotorcycleSearchParams = z.infer<typeof MotorcycleSearchParamsSchema>;
export type ScooterSearchParams = z.infer<typeof ScooterSearchParamsSchema>;
export type TruckSearchParams = z.infer<typeof TruckSearchParamsSchema>;
export type WatercraftSearchParams = z.infer<typeof WatercraftSearchParamsSchema>;
export type OtherVehicleSearchParams = z.infer<typeof OtherVehicleSearchParamsSchema>;
