import { z } from 'zod';
import { EntityIdSchema } from '../schemas/common.js';

export const numeric = z.number().optional();
export const flag = z.boolean().optional();
export const pageField = z.number().int().positive().optional();

export const idList = z.union([EntityIdSchema, z.array(EntityIdSchema)]).optional();
export const singleId = EntityIdSchema.optional();

export const PriceFields = { minPrice: numeric, maxPrice: numeric };
export const RoomsFields = { minRooms: numeric, maxRooms: numeric };
export const SquareMeterFields = { minSquaremeter: numeric, maxSquaremeter: numeric };
export const BuildAreaFields = { minSquareMeterBuild: numeric, maxSquareMeterBuild: numeric };
export const FloorFields = { minFloor: numeric, maxFloor: numeric };

export const ResidentialLocationFields = {
  area: singleId,
  city: singleId,
  neighborhood: singleId,
  street: singleId,
};

export const ProjectLocationFields = {
  region: singleId,
  topArea: singleId,
  area: singleId,
  city: singleId,
  neighborhood: singleId,
};

export const VehicleLocationFields = {
  area: idList,
  topArea: idList,
};

export const PaginationFields = { page: pageField };
