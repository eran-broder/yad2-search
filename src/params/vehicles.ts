import { z } from 'zod';
import {
  CarColor,
  CarTag,
  SpecialVehicleType,
  WatercraftType,
  CarFamilyType,
  EngineType,
  GearBox,
  MotorcycleLicense,
  MotorcycleType,
  OwnerType,
} from '../core/enums/index.js';
import { RangeSchema } from '../core/range.js';
import { PaginationFields, VehicleLocationFields, flag, idList, numeric } from './fields.js';

const range = RangeSchema.optional();

export const VehicleCommonParamsSchema = z.object({
  year: range,
  price: range,
  km: range,
  hand: range,
  ...VehicleLocationFields,
  priceOnly: flag,
  imgOnly: flag,
  ...PaginationFields,
});

export const CarSearchParamsSchema = VehicleCommonParamsSchema.extend({
  manufacturer: idList,
  model: idList,
  subModel: idList,
  engineval: range,
  electricRange: range,
  batteryCapacity: range,
  carTag: z.union([z.enum(CarTag), z.array(z.enum(CarTag))]).optional(),
  group_color: z.enum(CarColor).optional(),
  ownerID: z.enum(OwnerType).optional(),
  seats: numeric,
  carFamilyType: z.enum(CarFamilyType).optional(),
  gearBox: z.enum(GearBox).optional(),
  engineType: z.enum(EngineType).optional(),
});

export const MotorcycleSearchParamsSchema = VehicleCommonParamsSchema.extend({
  manufacturer: idList,
  model: idList,
  engineval: range,
  license: z.enum(MotorcycleLicense).optional(),
  motorCycleType: z.enum(MotorcycleType).optional(),
});

export const ScooterSearchParamsSchema = VehicleCommonParamsSchema.extend({
  manufacturer: idList,
  model: idList,
  engineval: range,
  license: z.enum(MotorcycleLicense).optional(),
});

export const TruckSearchParamsSchema = VehicleCommonParamsSchema.extend({
  CarSpecialSubCatID: idList,
});

export const WatercraftSearchParamsSchema = VehicleCommonParamsSchema.omit({
  km: true,
  hand: true,
}).extend({
  CarSpecialSubCatID: z
    .union([z.enum(WatercraftType), z.array(z.enum(WatercraftType))])
    .optional(),
});

export const OtherVehicleSearchParamsSchema = VehicleCommonParamsSchema.extend({
  CarSpecialID: z
    .union([z.enum(SpecialVehicleType), z.array(z.enum(SpecialVehicleType))])
    .optional(),
});

export type CarSearchParams = z.infer<typeof CarSearchParamsSchema>;
export type MotorcycleSearchParams = z.infer<typeof MotorcycleSearchParamsSchema>;
export type ScooterSearchParams = z.infer<typeof ScooterSearchParamsSchema>;
export type TruckSearchParams = z.infer<typeof TruckSearchParamsSchema>;
export type WatercraftSearchParams = z.infer<typeof WatercraftSearchParamsSchema>;
export type OtherVehicleSearchParams = z.infer<typeof OtherVehicleSearchParamsSchema>;
