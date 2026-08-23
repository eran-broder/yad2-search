import { z } from 'zod';
import { CoordsSchema, LabelSchema, PaginationSchema, SellerSchema, TagSchema, } from './common.js';
import { MediaSchema } from './media.js';
import { ListingSchema } from './projects/index.js';
export const RealestateAddressSchema = z.object({
    region: LabelSchema.optional(),
    area: LabelSchema.optional(),
    city: LabelSchema.optional(),
    neighborhood: LabelSchema.optional(),
    street: LabelSchema.optional(),
    house: z.object({ number: z.number().optional(), floor: z.number().optional() }).optional(),
    coords: CoordsSchema.optional(),
});
export const RealestateDetailsSchema = z.object({
    property: LabelSchema.optional(),
    propertyCondition: LabelSchema.partial().optional(),
    roomsCount: z.number().optional(),
    squareMeter: z.number().optional(),
    squareMeterBuild: z.number().optional(),
    promotions: z.array(z.unknown()).optional(),
});
export const RealestateAmenitiesSchema = z.object({
    includeAirconditioner: z.boolean().optional(),
    includeBalcony: z.boolean().optional(),
    includeBoiler: z.boolean().optional(),
    includeBars: z.boolean().optional(),
    includeSecurityRoom: z.boolean().optional(),
    includeBuildingShelter: z.boolean().optional(),
    includeFloorShelter: z.boolean().optional(),
    includeWarehouse: z.boolean().optional(),
    includeTornado: z.boolean().optional(),
    includeElevator: z.boolean().optional(),
    includeParking: z.boolean().optional(),
    includeAccessibility: z.boolean().optional(),
    includeFurniture: z.boolean().optional(),
    isHandicapped: z.boolean().optional(),
    isImmediateEntrance: z.boolean().optional(),
    isAssetExclusive: z.boolean().optional(),
    isKitchenKosher: z.boolean().optional(),
    isRenovated: z.boolean().optional(),
});
export const RealestateAdSchema = z.object({
    token: z.string(),
    orderId: z.number().optional(),
    categoryId: z.number().optional(),
    subcategoryId: z.number().optional(),
    adType: z.string().optional(),
    price: z.number().nullable().optional(),
    address: RealestateAddressSchema.optional(),
    additionalDetails: RealestateDetailsSchema.optional(),
    metaData: MediaSchema.optional(),
    tags: z.array(TagSchema).optional(),
    priceBeforeTag: z.number().optional(),
    priority: z.number().optional(),
    customer: SellerSchema.optional(),
    inProperty: RealestateAmenitiesSchema.optional(),
    packages: z.record(z.string(), z.boolean()).optional(),
});
export const AgencyPromoSchema = z.object({
    agencyId: z.string(),
    name: z.string().optional(),
    agencyName: z.string().optional(),
    logo: z.string().nullable().optional(),
    agencyLogo: z.string().nullable().optional(),
    adCount: z.number().optional(),
});
const adList = z.array(RealestateAdSchema).optional();
export const GrayMarkerSchema = z.object({
    token: z.string(),
    projectName: z.string().nullable().optional(),
    developerName: z.string().nullable().optional(),
    property: LabelSchema.nullable().optional(),
    address: z
        .object({
        city: z.string().nullable().optional(),
        neighborhood: z.string().nullable().optional(),
        street: z.string().nullable().optional(),
        houseNumber: z.string().nullable().optional(),
        coords: CoordsSchema.nullable().optional(),
    })
        .optional(),
});
const listings = z.array(ListingSchema).optional();
const grayListings = z.array(GrayMarkerSchema).optional();
export const Yad1BlockSchema = z.object({
    topGallery: listings,
    bottomGallery: listings,
    middleGallery: listings,
    listing: z
        .object({ premium: listings, pro: listings, basic: listings, gray: grayListings })
        .optional(),
    solo: listings,
    listingOnly: listings,
    boost: listings,
    listingsByFullMatch: listings,
    listingsByTiersMatch: listings,
});
export const RealestateFeedSchema = z.object({
    private: adList,
    agency: adList,
    platinum: adList,
    booster: adList,
    trio: z.array(AgencyPromoSchema).optional(),
    kingOfTheHar: z.array(AgencyPromoSchema).optional(),
    leadingBroker: z.array(AgencyPromoSchema).optional(),
    yad1: Yad1BlockSchema.optional(),
    pagination: PaginationSchema,
});
export const MapClusterSchema = z.object({
    key: z.string(),
    docCount: z.number(),
    center: z.tuple([z.number(), z.number()]),
    regionId: z.number().optional(),
    areaId: z.number().optional(),
});
export const RealestateMapSchema = z.object({
    markers: z.array(RealestateAdSchema).optional(),
    grayMarkers: z.array(GrayMarkerSchema).optional(),
    clusters: z.array(MapClusterSchema).optional(),
});
