import { z } from 'zod';
export declare const numeric: z.ZodOptional<z.ZodNumber>;
export declare const flag: z.ZodOptional<z.ZodBoolean>;
export declare const pageField: z.ZodOptional<z.ZodNumber>;
export declare const idList: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
export declare const singleId: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
export declare const PriceFields: {
    minPrice: z.ZodOptional<z.ZodNumber>;
    maxPrice: z.ZodOptional<z.ZodNumber>;
};
export declare const RoomsFields: {
    minRooms: z.ZodOptional<z.ZodNumber>;
    maxRooms: z.ZodOptional<z.ZodNumber>;
};
export declare const SquareMeterFields: {
    minSquaremeter: z.ZodOptional<z.ZodNumber>;
    maxSquaremeter: z.ZodOptional<z.ZodNumber>;
};
export declare const BuildAreaFields: {
    minSquareMeterBuild: z.ZodOptional<z.ZodNumber>;
    maxSquareMeterBuild: z.ZodOptional<z.ZodNumber>;
};
export declare const FloorFields: {
    minFloor: z.ZodOptional<z.ZodNumber>;
    maxFloor: z.ZodOptional<z.ZodNumber>;
};
export declare const ResidentialLocationFields: {
    area: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    city: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    neighborhood: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    street: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
};
export declare const ProjectLocationFields: {
    region: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    topArea: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    area: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    city: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    neighborhood: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
};
export declare const VehicleLocationFields: {
    area: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
    topArea: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>, z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>]>>;
};
export declare const PaginationFields: {
    page: z.ZodOptional<z.ZodNumber>;
};
