import { z } from 'zod';
import { CommercialDealType, CommercialProperty, PropertyCondition, ResidentialProperty, } from '../core/enums/index.js';
import { EntityIdSchema, oneOrMany } from '../schemas/common.js';
import { BuildAreaFields, FloorFields, PaginationFields, PriceFields, ResidentialLocationFields, RoomsFields, SquareMeterFields, flag, } from './fields.js';
const SharedAmenityFields = {
    parking: flag,
    elevator: flag,
    airConditioner: flag,
    balcony: flag,
};
const ResidentialAmenityFields = {
    shelter: flag,
    bars: flag,
    renovated: flag,
    accessibility: flag,
    furniture: flag,
    warehouse: flag,
};
const CommercialAmenityFields = {
    highCeiling: flag,
    kitchenette: flag,
    alarm: flag,
    meetingRoom: flag,
    cameras: flag,
    communicationRoom: flag,
    loadingRamp: flag,
    coolingRoom: flag,
};
const RealestateBaseParamsSchema = z.object({
    ...ResidentialLocationFields,
    region: EntityIdSchema,
    multiCity: z.array(EntityIdSchema).optional(),
    multiNeighborhood: z.array(EntityIdSchema).optional(),
    ...RoomsFields,
    ...PriceFields,
    ...SquareMeterFields,
    ...BuildAreaFields,
    ...FloorFields,
    ...SharedAmenityFields,
    ...PaginationFields,
    newFromContractor: flag,
    priceOnly: flag,
    tour: flag,
    text: z.string().optional(),
});
export const RealestateSearchParamsSchema = RealestateBaseParamsSchema.extend({
    ...ResidentialAmenityFields,
    property: oneOrMany(z.enum(ResidentialProperty)).optional(),
    propertyCondition: z.enum(PropertyCondition).optional(),
});
export const RentSearchParamsSchema = RealestateSearchParamsSchema.extend({
    pets: flag,
});
export const CommercialSearchParamsSchema = RealestateBaseParamsSchema.extend({
    ...CommercialAmenityFields,
    property: oneOrMany(z.enum(CommercialProperty)).optional(),
    dealType: z.enum(CommercialDealType).optional(),
});
