import { z } from 'zod';
import { EntityIdSchema, LabelSchema, SellerSchema, TagSchema, TextOrLabelSchema, oneOrMany, } from './common.js';
import { MediaSchema } from './media.js';
import { RealestateAddressSchema, RealestateDetailsSchema } from './realestate.js';
import { VehicleAddressSchema, VehicleSpecificationSchema } from './vehicles.js';
export const AdDatesSchema = z.object({
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    endsAt: z.string().optional(),
    rebouncedAt: z.string().optional(),
});
const ItemBaseSchema = z.object({
    token: z.string(),
    orderId: z.number().optional(),
    adNumber: z.number().optional(),
    adType: z.string().optional(),
    categoryId: z.number().optional(),
    subcategoryId: z.number().optional(),
    statusId: z.number().optional(),
    priority: z.number().optional(),
    price: z.number().nullable().optional(),
    abovePrice: z.coerce.number().nullable().optional(),
    customer: SellerSchema.optional(),
    tags: z.array(TagSchema).optional(),
    dates: AdDatesSchema.optional(),
});
export const RealestateAmenitiesSchema = z.object({
    includeAirconditioner: z.boolean().optional(),
    includeBalcony: z.boolean().optional(),
    includeBoiler: z.boolean().optional(),
    includeBars: z.boolean().optional(),
    includeSecurityRoom: z.boolean().optional(),
    includeBuildingShelter: z.boolean().optional(),
    includeWarehouse: z.boolean().optional(),
    includeTornado: z.boolean().optional(),
    isHandicapped: z.boolean().optional(),
    isImmediateEntrance: z.boolean().optional(),
    includeElevator: z.boolean().optional(),
    includeParking: z.boolean().optional(),
    includeAccessibility: z.boolean().optional(),
    includeFurniture: z.boolean().optional(),
    isRenovated: z.boolean().optional(),
});
export const RealestateItemDetailsSchema = RealestateDetailsSchema.extend({
    propertyGroup: LabelSchema.extend({ textEng: z.string().optional() }).optional(),
    balconiesCount: z.number().optional(),
    squareMeterGarden: z.number().optional(),
    entranceDate: z.string().nullable().optional(),
    isEnterDateFlexible: z.boolean().optional(),
    buildingTopFloor: z.number().optional(),
    parkingSpacesCount: z.number().optional(),
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
export const VehicleItemSchema = ItemBaseSchema.extend({
    address: VehicleAddressSchema.optional(),
    manufacturer: LabelSchema.optional(),
    model: LabelSchema.optional(),
    subModel: LabelSchema.optional(),
    color: LabelSchema.extend({ textEng: z.string().optional() }).optional(),
    bodyType: LabelSchema.optional(),
    owner: LabelSchema.optional(),
    originalOwner: LabelSchema.optional(),
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
