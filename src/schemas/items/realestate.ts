import { z } from 'zod';
import { EntityIdSchema, LabelSchema } from '../common.js';
import { MediaSchema } from '../media.js';
import {
  RealestateAddressSchema,
  RealestateAmenitiesSchema,
  RealestateDetailsSchema,
} from '../realestate.js';
import { ItemBaseSchema } from './base.js';

export const RealestateItemDetailsSchema = RealestateDetailsSchema.extend({
  propertyGroup: LabelSchema.extend({ textEng: z.string().optional() }).optional(),
  balconiesCount: z.number().optional(),
  squareMeterGarden: z.number().optional(),
  entranceDate: z.string().nullable().optional(),
  isEnterDateFlexible: z.boolean().optional(),
  buildingTopFloor: z.number().optional(),
  parkingSpacesCount: z.number().optional(),
  isPillarBuilding: z.boolean().optional(),
});

export const RealestateItemSchema = ItemBaseSchema.extend({
  address: RealestateAddressSchema.extend({
    topArea: LabelSchema.optional(),
    addressMasterId: EntityIdSchema.optional(),
    house: z
      .object({
        number: z.number().optional(),
        floor: z.number().optional(),
        entrance: EntityIdSchema.nullable().optional(),
      })
      .optional(),
  }).optional(),
  additionalDetails: RealestateItemDetailsSchema.optional(),
  inProperty: RealestateAmenitiesSchema.optional(),
  searchText: z.string().optional(),
  priceBeforeTag: z.number().optional(),
  furnitureInfo: z.unknown().optional(),
  metaData: MediaSchema.extend({
    description: z.string().optional(),
    shelterDistance: z.number().optional(),
  }).optional(),
});


export type RealestateItem = z.infer<typeof RealestateItemSchema>;
