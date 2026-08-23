import { z } from 'zod';
import { CoordsSchema, EntityIdSchema, LabelSchema } from './common.js';
export const ProjectAddressSchema = z.object({
    region: LabelSchema.optional(),
    topArea: LabelSchema.optional(),
    area: LabelSchema.optional(),
    city: LabelSchema.optional(),
    neighborhood: LabelSchema.optional(),
    street: LabelSchema.optional(),
    house: z.object({ number: z.number().optional() }).optional(),
    coords: CoordsSchema.optional(),
    display: z.string().optional(),
    addressMasterId: EntityIdSchema.optional(),
});
export const ProjectDetailsSchema = z.object({
    propertyTypes: z.array(z.string()).optional(),
    property: z.object({ id: z.string().optional(), textEng: z.string().optional() }).optional(),
    projectCategories: z.array(z.number()).optional(),
    companyIds: z.array(z.string()).optional(),
    roomsCount: z.number().optional(),
    minRooms: z.number().optional(),
    maxRooms: z.number().optional(),
    minPrice: z.number().optional(),
    maxPrice: z.number().optional(),
    minFloor: z.number().optional(),
    maxFloor: z.number().optional(),
    floors: z.number().optional(),
    minSquaremeter: z.number().optional(),
    maxSquaremeter: z.number().optional(),
    entranceDate: z.string().nullable().optional(),
    timelineStatus: EntityIdSchema.nullable().optional(),
});
export const DeveloperSchema = z.object({
    id: z.string(),
    name: z.string().optional(),
    logo: z.string().nullable().optional(),
    info: z.string().nullable().optional(),
    infoStyled: z.string().nullable().optional(),
    projectCount: z.string().optional(),
});
export const ProjectSpecSchema = z.object({
    category: z.string().optional(),
    labels: z.array(z.string()).optional(),
});
export const ProjectMetaSchema = z.object({
    projectName: z.string().optional(),
    projectLogo: z.string().nullable().optional(),
    coverImage: z.string().optional(),
    images: z.array(z.string()).optional(),
    video: z.string().nullable().optional(),
    promotionImage: z.string().nullable().optional(),
    promotionText: z.string().nullable().optional(),
    flag: z.string().nullable().optional(),
    info: z.string().nullable().optional(),
    infoHeader: z.string().nullable().optional(),
    infoStyled: z.string().nullable().optional(),
    infoHeaderStyled: z.string().nullable().optional(),
    projectBenefits: z.array(z.string()).optional(),
    videos: z.array(z.string()).optional(),
    has3D: z.boolean().optional(),
    hasAiDesign: z.boolean().optional(),
    hideDealsHistory: z.boolean().optional(),
    previewType: z.string().optional(),
    immediateOccupancy: z.boolean().optional(),
    isOnSale: z.boolean().optional(),
    buildings: z.number().optional(),
    apartments: z.number().optional(),
    blueprints: z.array(z.string()).optional(),
    bank: z.string().nullable().optional(),
    companyDetails: z.array(DeveloperSchema).optional(),
    specs: z.array(ProjectSpecSchema).optional(),
});
export const ProjectDatesSchema = z.object({
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
});
export const ProjectSchema = z.object({
    token: z.string(),
    projectId: z.number().optional(),
    projectYzerId: z.number().optional(),
    treedisId: z.string().optional(),
    orderId: z.number().optional(),
    adNumber: z.number().optional(),
    adType: z.string().optional(),
    categoryId: z.number().optional(),
    subcategoryId: z.number().optional(),
    statusId: z.number().optional(),
    packageId: z.number().optional(),
    slug: z.string().optional(),
    price: z.number().nullable().optional(),
    abovePrice: z.coerce.number().nullable().optional(),
    address: ProjectAddressSchema.optional(),
    additionalDetails: ProjectDetailsSchema.optional(),
    metaData: ProjectMetaSchema.optional(),
    packages: z.record(z.string(), z.boolean()).optional(),
    dates: ProjectDatesSchema.optional(),
    customer: z.object({ phone: z.string().nullable().optional() }).optional(),
});
export const ProjectFeedSchema = z.object({
    total: z.number().optional(),
    projects: z.array(ProjectSchema),
    similarProjects: z.array(ProjectSchema).optional(),
});
export const ProjectListSchema = z.object({ projects: z.array(ProjectSchema) });
export const ListingSchema = ProjectSchema.extend({
    listingId: z.string().optional(),
    listingOrder: z.number().optional(),
});
export const ListingListSchema = z.object({ listings: z.array(ListingSchema) });
export const DeveloperFeedSchema = z.object({
    developers: z.array(DeveloperSchema),
    total: z.number().optional(),
});
export const DeveloperListSchema = z.object({ developers: z.array(DeveloperSchema) });
