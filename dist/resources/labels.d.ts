import type { Gateway } from '../core/gateway.js';
import type { QueryParams } from '../core/query.js';
import { RealestateDeal, VehicleCategory } from '../core/enums/index.js';
export declare const createLabelsResource: (gateway: Gateway) => {
    realestate: (deal: RealestateDeal, params: QueryParams) => Promise<Record<string, {
        value: string;
    } | {
        id: string | number;
        title: string;
        pluralTitle?: string | undefined;
        engTitle?: string | null | undefined;
    }[]>>;
    vehicles: (category: VehicleCategory, params: QueryParams) => Promise<Record<string, {
        value: string;
    } | {
        id: string | number;
        title: string;
        pluralTitle?: string | undefined;
        engTitle?: string | null | undefined;
    }[]>>;
};
