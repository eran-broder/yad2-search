import { z } from 'zod';
import { LabelSchema, TagSchema, TextOrLabelSchema, oneOrMany } from '../common.js';
import { MediaSchema } from '../media.js';
import { VehicleAddressSchema, VehicleSpecificationSchema } from '../vehicles.js';
import { ItemBaseSchema } from './base.js';

export const VehicleItemSchema = ItemBaseSchema.extend({
  address: VehicleAddressSchema.optional(),
  manufacturer: LabelSchema.optional(),
  model: LabelSchema.optional(),
  subModel: LabelSchema.optional(),
  color: LabelSchema.extend({ textEng: z.string().optional() }).optional(),
  bodyType: LabelSchema.optional(),
  owner: LabelSchema.optional(),
  originalOwner: LabelSchema.optional(),
  previousOwner: LabelSchema.optional(),
  gearBox: LabelSchema.optional(),
  engineType: LabelSchema.optional(),
  carFamilyType: oneOrMany(LabelSchema).optional(),
  powertrainArchitecture: LabelSchema.optional(),
  carTag: z.array(TagSchema).optional(),
  filterTags: z.array(z.string()).optional(),
  specification: VehicleSpecificationSchema.optional(),
  vehicleDates: z
    .object({
      yearOfProduction: z.number().optional(),
      monthOfProduction: LabelSchema.optional(),
      testDate: z.string().nullable().optional(),
    })
    .optional(),
  km: z.number().optional(),
  kmInLastTest: z.number().optional(),
  hand: LabelSchema.optional(),
  seats: z.number().optional(),
  numberOfDoors: z.number().optional(),
  horsePower: z.number().optional(),
  engineVolume: z.union([z.number(), LabelSchema]).optional(),
  combinedFuelConsumption: z.number().optional(),
  allElectricRange: z.union([z.number(), z.string()]).nullable().optional(),
  batteryCapacity: z.union([z.number(), z.string()]).nullable().optional(),
  hasChangesFromOriginalModel: z.boolean().optional(),
  isContactLeadSupported: z.boolean().optional(),
  specialType: TextOrLabelSchema.optional(),
  specialModel: TextOrLabelSchema.optional(),
  packages: z.record(z.string(), z.boolean()).optional(),
  commitment: z.array(z.string()).optional(),
  commitmentInfo: z
    .object({
      maintenances: z.array(z.string()).optional(),
      services: z.array(z.string()).optional(),
      insurances: z.array(z.object({ title: z.string(), period: z.number().optional() })).optional(),
    })
    .optional(),
  paymentInstallments: z
    .object({
      advancePayment: z.number().optional(),
      monthlyPayment: z.number().optional(),
      numberOfPayment: z.number().optional(),
      balance: z.number().optional(),
    })
    .optional(),
  metaData: MediaSchema.extend({ description: z.string().optional() }).optional(),
});


export type VehicleItem = z.infer<typeof VehicleItemSchema>;
