import type { Gateway } from '../core/gateway.js';
import { RealestateDeal } from '../core/enums/index.js';
import { type CommercialDynamicOptions, type RealestateOptions } from '../schemas/options.js';
export declare const createOptionsResource: (gateway: Gateway) => {
    realestate: (deal: RealestateDeal) => Promise<RealestateOptions>;
    commercialDynamic: () => Promise<CommercialDynamicOptions>;
    forSale: () => Promise<{
        property?: {
            id: string;
            title: string;
            propertyGroupId?: string | undefined;
        }[] | undefined;
        propertyGroup?: {
            id: string;
            title: string;
            engTitle?: string | undefined;
            isSearchable?: boolean | undefined;
        }[] | undefined;
        rooms?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        squaremeter?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        squareMeterBuild?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        floor?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        price?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        dealType?: {
            id: string;
            title: string;
        }[] | undefined;
        toilet?: {
            id: string;
            title: string;
        }[] | undefined;
        warehouse?: {
            id: string;
            title: string;
        }[] | undefined;
        shelter?: {
            id: string;
            title: string;
        }[] | undefined;
    }>;
    rent: () => Promise<{
        property?: {
            id: string;
            title: string;
            propertyGroupId?: string | undefined;
        }[] | undefined;
        propertyGroup?: {
            id: string;
            title: string;
            engTitle?: string | undefined;
            isSearchable?: boolean | undefined;
        }[] | undefined;
        rooms?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        squaremeter?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        squareMeterBuild?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        floor?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        price?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        dealType?: {
            id: string;
            title: string;
        }[] | undefined;
        toilet?: {
            id: string;
            title: string;
        }[] | undefined;
        warehouse?: {
            id: string;
            title: string;
        }[] | undefined;
        shelter?: {
            id: string;
            title: string;
        }[] | undefined;
    }>;
    commercial: () => Promise<{
        property?: {
            id: string;
            title: string;
            propertyGroupId?: string | undefined;
        }[] | undefined;
        propertyGroup?: {
            id: string;
            title: string;
            engTitle?: string | undefined;
            isSearchable?: boolean | undefined;
        }[] | undefined;
        rooms?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        squaremeter?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        squareMeterBuild?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        floor?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        price?: {
            from: number;
            to: number;
            step?: number | undefined;
        } | undefined;
        dealType?: {
            id: string;
            title: string;
        }[] | undefined;
        toilet?: {
            id: string;
            title: string;
        }[] | undefined;
        warehouse?: {
            id: string;
            title: string;
        }[] | undefined;
        shelter?: {
            id: string;
            title: string;
        }[] | undefined;
    }>;
};
