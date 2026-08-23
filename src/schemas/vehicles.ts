import { z } from 'zod';
import {
  LabelSchema,
  PaginationSchema,
  SellerSchema,
  TagSchema,
  TextOrLabelSchema,
} from './common.js';
import { AdType } from '../core/enums/index.js';
import { MediaSchema } from './media.js';

export const VehicleAddressSchema = z.object({
  area: LabelSchema.optional(),
  city: LabelSchema.optional(),
  topArea: LabelSchema.optional(),
});

export const VehicleSpecificationSchema = z
  .object({
    airBags: z.number().optional(),
    electricWindow: z.number().optional(),
    pollutionLevel: z.number().optional(),
    safetyPoints: z.number().optional(),
    ignition: LabelSchema.optional(),
  })
  .catchall(z.union([z.boolean(), z.number(), LabelSchema]));

export const VehicleAdSchema = z.object({
  token: z.string(),
  orderId: z.number(),
  categoryId: z.number(),
  subcategoryId: z.number(),
  adType: z.enum(AdType).optional(),
  price: z.number().nullable().optional(),
  manufacturer: LabelSchema.optional(),
  model: LabelSchema.optional(),
  subModel: LabelSchema.optional(),
  hand: LabelSchema.optional(),
  engineType: LabelSchema.optional(),
  gearBox: LabelSchema.optional(),
  engineVolume: z.union([z.number(), LabelSchema.partial()]).optional(),
  km: z.number().optional(),
  vehicleDates: z.object({ yearOfProduction: z.number().optional() }).optional(),
  specialType: TextOrLabelSchema.optional(),
  specialModel: TextOrLabelSchema.optional(),
  waterCraftType: TextOrLabelSchema.optional(),
  specification: VehicleSpecificationSchema.optional(),
  address: VehicleAddressSchema.optional(),
  tags: z.array(TagSchema).optional(),
  priority: z.number().optional(),
  externalKonesUrl: z.string().nullable().optional(),
  konesSaleDateTime: z.string().nullable().optional(),
  customer: SellerSchema.optional(),
  packages: z.record(z.string(), z.boolean()).optional(),
  commitment: z.array(z.string()).optional(),
  commitmentInfo: z
    .object({
      maintenances: z.array(z.string()).optional(),
      services: z.array(z.string()).optional(),
      insurances: z
        .array(z.object({ title: z.string(), period: z.number().optional() }))
        .optional(),
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
  metaData: MediaSchema.optional(),
});

export const VehicleFeedSchema = z.object({
  ads: z.array(VehicleAdSchema),
  pagination: PaginationSchema,
});

const bucket = z.array(VehicleAdSchema).optional();

export const VehicleBucketedFeedSchema = z.object({
  private: bucket,
  commercial: bucket,
  platinum: bucket,
  boost: bucket,
  solo: bucket,
  pagination: PaginationSchema,
});


export type VehicleSpecification = z.infer<typeof VehicleSpecificationSchema>;
export type VehicleAd = z.infer<typeof VehicleAdSchema>;
export type VehicleFeed = z.infer<typeof VehicleFeedSchema>;
export type VehicleBucketedFeed = z.infer<typeof VehicleBucketedFeedSchema>;
