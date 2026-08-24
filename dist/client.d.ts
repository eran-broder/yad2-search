import type { Transport } from './core/transport.js';
import { type FetchTransportOptions } from './core/transports/fetch-transport.js';
import { type BrowserTransportOptions } from './core/transports/browser-transport.js';
import { type CurlTransportOptions } from './core/transports/curl-transport.js';
import { type RetryTransportOptions } from './core/transports/retry-transport.js';
export interface Yad2ClientOptions {
    readonly transport?: Transport;
    readonly baseUrl?: string;
}
export declare const createYad2Client: (options?: Yad2ClientOptions) => {
    vehicles: import("./resources/vehicles.js").VehiclesResource;
    realestate: {
        forSale: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
        }>;
        rent: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
            pets?: boolean | undefined;
        }>;
        commercial: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").CommercialProperty | import("./index.js").CommercialProperty[] | undefined;
            dealType?: import("./index.js").CommercialDealType | undefined;
            highCeiling?: boolean | undefined;
            kitchenette?: boolean | undefined;
            alarm?: boolean | undefined;
            meetingRoom?: boolean | undefined;
            cameras?: boolean | undefined;
            communicationRoom?: boolean | undefined;
            loadingRamp?: boolean | undefined;
            coolingRoom?: boolean | undefined;
        }>;
        map: import("./core/describable.js").Describable<(deal: import("./index.js").RealestateDeal, params: import("./index.js").RealestateSearchParams) => Promise<import("./index.js").RealestateMap>>;
    };
    market: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").MarketSearchParams) => Promise<import("./resources/market.js").MarketResult>>;
        collection: import("./core/describable.js").Describable<(name: string, params?: import("./index.js").MarketCollectionParams) => Promise<import("./resources/market.js").MarketResult>>;
        filters: (q: string) => Promise<import("./index.js").MarketFilters>;
        collectionFilters: (name: string) => Promise<import("./index.js").MarketFilters>;
        autocomplete: (searchTerm: string) => Promise<import("./index.js").MarketAutocomplete>;
        menuItems: () => Promise<import("./index.js").MarketMenuItem[]>;
    };
    projects: {
        list: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        map: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        listings: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListingParams) => Promise<import("./index.js").Listing[]>>;
        developers: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperListParams) => Promise<import("./index.js").Developer[]>>;
        developerFeed: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperFeedParams) => Promise<{
            developers: {
                id: string;
                name?: string | undefined;
                logo?: string | null | undefined;
                info?: string | null | undefined;
                infoStyled?: string | null | undefined;
                projectCount?: string | undefined;
            }[];
            total?: number | undefined;
        }>>;
        autocomplete: (phrase: string) => Promise<import("./index.js").Project[]>;
        search(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined): Promise<{
            projects: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[];
            total?: number | undefined;
            similarProjects?: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[] | undefined;
        }>;
        stream(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): AsyncGenerator<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }, any, any>;
        all(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): Promise<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }[]>;
    };
    address: {
        regions: () => Promise<{
            region_id: string | number;
            region_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            region_eng?: string | null | undefined;
        }[]>;
        topAreas: () => Promise<{
            top_area_id: string | number;
            top_area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            top_area_eng?: string | null | undefined;
        }[]>;
        areas: () => Promise<{
            area_id: string | number;
            area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            area_eng?: string | null | undefined;
        }[]>;
        cities: () => Promise<{
            city_id: string | number;
            city_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            city_eng?: string | null | undefined;
        }[]>;
        hoods: (cityId?: import("./index.js").EntityId) => Promise<{
            hood_id: string | number;
            hood_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            street_id?: string | number | undefined;
            hood_eng?: string | null | undefined;
        }[]>;
        streets: (cityId: import("./index.js").EntityId) => Promise<{
            street_id: string | number;
            street_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
        }[]>;
        autocomplete: (text: string) => Promise<import("./index.js").AddressSuggestions>;
        locate: (text: string) => Promise<import("./resources/address.js").SearchLocation>;
    };
    options: {
        realestate: (deal: import("./index.js").RealestateDeal) => Promise<import("./index.js").RealestateOptions>;
        commercialDynamic: () => Promise<import("./index.js").CommercialDynamicOptions>;
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
    catalog: {
        catalog: (category: import("./index.js").VehicleCategory, scope?: import("./resources/catalog.js").CatalogScope) => Promise<import("./index.js").VehicleCatalog>;
        options: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").VehicleCatalogOptions>;
        manufacturers: (category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        models: (manufacturer: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        subModels: (manufacturer: number, model: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        specialTypes: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        findManufacturer: (name: string, category?: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
        findSpecialType: (name: string, category: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
    };
    items: {
        realestate: (token: string) => Promise<import("./index.js").RealestateItem>;
        vehicle: (token: string) => Promise<import("./index.js").VehicleItem>;
    };
    images: {
        cover: (item: import("./index.js").MediaBearing) => string | undefined;
        urls: (item: import("./index.js").MediaBearing) => string[];
        fileName: (url: string) => string;
        fetch: (url: string) => Promise<import("./index.js").ImageFile>;
        fetchMany: (urls: readonly string[]) => Promise<import("./index.js").ImageFile[]>;
        fetchItem: (item: import("./index.js").MediaBearing) => Promise<import("./index.js").ImageFile[]>;
        save: (url: string, path: string) => Promise<string>;
    };
    labels: {
        realestate: (deal: import("./index.js").RealestateDeal, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
        vehicles: (category: import("./index.js").VehicleCategory, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
    };
    neighborhood: {
        survey: (hoodId: import("./index.js").EntityId) => Promise<import("./index.js").NeighborhoodSurvey>;
        suggestions: (query: string) => Promise<import("./index.js").SearchSuggestions>;
    };
    nearby: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams) => Promise<import("./index.js").NearbyResult>>;
        stream: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, { maxChunks }?: import("./resources/nearby.js").NearbyStreamOptions) => AsyncGenerator<import("./index.js").NearbyDoc>>;
        all: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, options?: import("./resources/nearby.js").NearbyStreamOptions) => Promise<{
            token: string;
            order_id?: number | undefined;
            category_id?: number | undefined;
            subcategory_id?: number | undefined;
            status_id?: number | undefined;
            priority?: number | undefined;
            price?: number | null | undefined;
            is_price_only?: boolean | undefined;
            is_image_only?: boolean | undefined;
            search_text?: string | undefined;
            address?: {
                top_area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                address_master_id?: string | number | null | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | null | undefined;
            } | null | undefined;
            meta_data?: {
                images?: string[] | null | undefined;
                cover_image?: string | null | undefined;
                property_condition?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                balconies_count?: number | null | undefined;
                rooms_count?: number | null | undefined;
                square_meter?: number | null | undefined;
            } | null | undefined;
            dates?: {
                start?: string | null | undefined;
                update?: string | null | undefined;
                end?: string | null | undefined;
                rebounce?: string | null | undefined;
            } | null | undefined;
            feed_section?: string | null | undefined;
            customer?: {
                agency_name?: string | null | undefined;
                agency_logo?: string | null | undefined;
                second_phone?: string | null | undefined;
                second_broker_avatar?: string | null | undefined;
                brokers?: {
                    phone?: string | null | undefined;
                    name?: string | null | undefined;
                    avatar?: string | null | undefined;
                }[] | null | undefined;
            } | null | undefined;
            packages?: Record<string, unknown> | null | undefined;
            broker_packages?: Record<string, unknown> | null | undefined;
            search_fields?: {
                [x: string]: unknown;
                entrance_date?: string | null | undefined;
                square_meter?: number | null | undefined;
                rooms_count?: number | null | undefined;
                property_group?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | null | undefined;
            } | null | undefined;
        }[]>>;
    };
    [Symbol.asyncDispose]?: () => Promise<void>;
    /**
     * Release the auto-spawned browser server, if one was started. Call it before the
     * process ends — a bare `process.exit()` with a live Chromium session aborts the
     * runtime on Windows. `await using` handles this for you.
     */
    dispose: () => Promise<void>;
};
export declare const createHttpClient: (options?: FetchTransportOptions) => {
    vehicles: import("./resources/vehicles.js").VehiclesResource;
    realestate: {
        forSale: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
        }>;
        rent: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
            pets?: boolean | undefined;
        }>;
        commercial: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").CommercialProperty | import("./index.js").CommercialProperty[] | undefined;
            dealType?: import("./index.js").CommercialDealType | undefined;
            highCeiling?: boolean | undefined;
            kitchenette?: boolean | undefined;
            alarm?: boolean | undefined;
            meetingRoom?: boolean | undefined;
            cameras?: boolean | undefined;
            communicationRoom?: boolean | undefined;
            loadingRamp?: boolean | undefined;
            coolingRoom?: boolean | undefined;
        }>;
        map: import("./core/describable.js").Describable<(deal: import("./index.js").RealestateDeal, params: import("./index.js").RealestateSearchParams) => Promise<import("./index.js").RealestateMap>>;
    };
    market: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").MarketSearchParams) => Promise<import("./resources/market.js").MarketResult>>;
        collection: import("./core/describable.js").Describable<(name: string, params?: import("./index.js").MarketCollectionParams) => Promise<import("./resources/market.js").MarketResult>>;
        filters: (q: string) => Promise<import("./index.js").MarketFilters>;
        collectionFilters: (name: string) => Promise<import("./index.js").MarketFilters>;
        autocomplete: (searchTerm: string) => Promise<import("./index.js").MarketAutocomplete>;
        menuItems: () => Promise<import("./index.js").MarketMenuItem[]>;
    };
    projects: {
        list: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        map: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        listings: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListingParams) => Promise<import("./index.js").Listing[]>>;
        developers: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperListParams) => Promise<import("./index.js").Developer[]>>;
        developerFeed: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperFeedParams) => Promise<{
            developers: {
                id: string;
                name?: string | undefined;
                logo?: string | null | undefined;
                info?: string | null | undefined;
                infoStyled?: string | null | undefined;
                projectCount?: string | undefined;
            }[];
            total?: number | undefined;
        }>>;
        autocomplete: (phrase: string) => Promise<import("./index.js").Project[]>;
        search(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined): Promise<{
            projects: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[];
            total?: number | undefined;
            similarProjects?: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[] | undefined;
        }>;
        stream(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): AsyncGenerator<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }, any, any>;
        all(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): Promise<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }[]>;
    };
    address: {
        regions: () => Promise<{
            region_id: string | number;
            region_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            region_eng?: string | null | undefined;
        }[]>;
        topAreas: () => Promise<{
            top_area_id: string | number;
            top_area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            top_area_eng?: string | null | undefined;
        }[]>;
        areas: () => Promise<{
            area_id: string | number;
            area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            area_eng?: string | null | undefined;
        }[]>;
        cities: () => Promise<{
            city_id: string | number;
            city_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            city_eng?: string | null | undefined;
        }[]>;
        hoods: (cityId?: import("./index.js").EntityId) => Promise<{
            hood_id: string | number;
            hood_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            street_id?: string | number | undefined;
            hood_eng?: string | null | undefined;
        }[]>;
        streets: (cityId: import("./index.js").EntityId) => Promise<{
            street_id: string | number;
            street_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
        }[]>;
        autocomplete: (text: string) => Promise<import("./index.js").AddressSuggestions>;
        locate: (text: string) => Promise<import("./resources/address.js").SearchLocation>;
    };
    options: {
        realestate: (deal: import("./index.js").RealestateDeal) => Promise<import("./index.js").RealestateOptions>;
        commercialDynamic: () => Promise<import("./index.js").CommercialDynamicOptions>;
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
    catalog: {
        catalog: (category: import("./index.js").VehicleCategory, scope?: import("./resources/catalog.js").CatalogScope) => Promise<import("./index.js").VehicleCatalog>;
        options: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").VehicleCatalogOptions>;
        manufacturers: (category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        models: (manufacturer: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        subModels: (manufacturer: number, model: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        specialTypes: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        findManufacturer: (name: string, category?: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
        findSpecialType: (name: string, category: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
    };
    items: {
        realestate: (token: string) => Promise<import("./index.js").RealestateItem>;
        vehicle: (token: string) => Promise<import("./index.js").VehicleItem>;
    };
    images: {
        cover: (item: import("./index.js").MediaBearing) => string | undefined;
        urls: (item: import("./index.js").MediaBearing) => string[];
        fileName: (url: string) => string;
        fetch: (url: string) => Promise<import("./index.js").ImageFile>;
        fetchMany: (urls: readonly string[]) => Promise<import("./index.js").ImageFile[]>;
        fetchItem: (item: import("./index.js").MediaBearing) => Promise<import("./index.js").ImageFile[]>;
        save: (url: string, path: string) => Promise<string>;
    };
    labels: {
        realestate: (deal: import("./index.js").RealestateDeal, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
        vehicles: (category: import("./index.js").VehicleCategory, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
    };
    neighborhood: {
        survey: (hoodId: import("./index.js").EntityId) => Promise<import("./index.js").NeighborhoodSurvey>;
        suggestions: (query: string) => Promise<import("./index.js").SearchSuggestions>;
    };
    nearby: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams) => Promise<import("./index.js").NearbyResult>>;
        stream: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, { maxChunks }?: import("./resources/nearby.js").NearbyStreamOptions) => AsyncGenerator<import("./index.js").NearbyDoc>>;
        all: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, options?: import("./resources/nearby.js").NearbyStreamOptions) => Promise<{
            token: string;
            order_id?: number | undefined;
            category_id?: number | undefined;
            subcategory_id?: number | undefined;
            status_id?: number | undefined;
            priority?: number | undefined;
            price?: number | null | undefined;
            is_price_only?: boolean | undefined;
            is_image_only?: boolean | undefined;
            search_text?: string | undefined;
            address?: {
                top_area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                address_master_id?: string | number | null | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | null | undefined;
            } | null | undefined;
            meta_data?: {
                images?: string[] | null | undefined;
                cover_image?: string | null | undefined;
                property_condition?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                balconies_count?: number | null | undefined;
                rooms_count?: number | null | undefined;
                square_meter?: number | null | undefined;
            } | null | undefined;
            dates?: {
                start?: string | null | undefined;
                update?: string | null | undefined;
                end?: string | null | undefined;
                rebounce?: string | null | undefined;
            } | null | undefined;
            feed_section?: string | null | undefined;
            customer?: {
                agency_name?: string | null | undefined;
                agency_logo?: string | null | undefined;
                second_phone?: string | null | undefined;
                second_broker_avatar?: string | null | undefined;
                brokers?: {
                    phone?: string | null | undefined;
                    name?: string | null | undefined;
                    avatar?: string | null | undefined;
                }[] | null | undefined;
            } | null | undefined;
            packages?: Record<string, unknown> | null | undefined;
            broker_packages?: Record<string, unknown> | null | undefined;
            search_fields?: {
                [x: string]: unknown;
                entrance_date?: string | null | undefined;
                square_meter?: number | null | undefined;
                rooms_count?: number | null | undefined;
                property_group?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | null | undefined;
            } | null | undefined;
        }[]>>;
    };
    [Symbol.asyncDispose]?: () => Promise<void>;
    /**
     * Release the auto-spawned browser server, if one was started. Call it before the
     * process ends — a bare `process.exit()` with a live Chromium session aborts the
     * runtime on Windows. `await using` handles this for you.
     */
    dispose: () => Promise<void>;
};
export declare const createCurlClient: (options?: CurlTransportOptions) => {
    vehicles: import("./resources/vehicles.js").VehiclesResource;
    realestate: {
        forSale: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
        }>;
        rent: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
            pets?: boolean | undefined;
        }>;
        commercial: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").CommercialProperty | import("./index.js").CommercialProperty[] | undefined;
            dealType?: import("./index.js").CommercialDealType | undefined;
            highCeiling?: boolean | undefined;
            kitchenette?: boolean | undefined;
            alarm?: boolean | undefined;
            meetingRoom?: boolean | undefined;
            cameras?: boolean | undefined;
            communicationRoom?: boolean | undefined;
            loadingRamp?: boolean | undefined;
            coolingRoom?: boolean | undefined;
        }>;
        map: import("./core/describable.js").Describable<(deal: import("./index.js").RealestateDeal, params: import("./index.js").RealestateSearchParams) => Promise<import("./index.js").RealestateMap>>;
    };
    market: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").MarketSearchParams) => Promise<import("./resources/market.js").MarketResult>>;
        collection: import("./core/describable.js").Describable<(name: string, params?: import("./index.js").MarketCollectionParams) => Promise<import("./resources/market.js").MarketResult>>;
        filters: (q: string) => Promise<import("./index.js").MarketFilters>;
        collectionFilters: (name: string) => Promise<import("./index.js").MarketFilters>;
        autocomplete: (searchTerm: string) => Promise<import("./index.js").MarketAutocomplete>;
        menuItems: () => Promise<import("./index.js").MarketMenuItem[]>;
    };
    projects: {
        list: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        map: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        listings: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListingParams) => Promise<import("./index.js").Listing[]>>;
        developers: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperListParams) => Promise<import("./index.js").Developer[]>>;
        developerFeed: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperFeedParams) => Promise<{
            developers: {
                id: string;
                name?: string | undefined;
                logo?: string | null | undefined;
                info?: string | null | undefined;
                infoStyled?: string | null | undefined;
                projectCount?: string | undefined;
            }[];
            total?: number | undefined;
        }>>;
        autocomplete: (phrase: string) => Promise<import("./index.js").Project[]>;
        search(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined): Promise<{
            projects: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[];
            total?: number | undefined;
            similarProjects?: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[] | undefined;
        }>;
        stream(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): AsyncGenerator<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }, any, any>;
        all(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): Promise<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }[]>;
    };
    address: {
        regions: () => Promise<{
            region_id: string | number;
            region_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            region_eng?: string | null | undefined;
        }[]>;
        topAreas: () => Promise<{
            top_area_id: string | number;
            top_area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            top_area_eng?: string | null | undefined;
        }[]>;
        areas: () => Promise<{
            area_id: string | number;
            area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            area_eng?: string | null | undefined;
        }[]>;
        cities: () => Promise<{
            city_id: string | number;
            city_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            city_eng?: string | null | undefined;
        }[]>;
        hoods: (cityId?: import("./index.js").EntityId) => Promise<{
            hood_id: string | number;
            hood_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            street_id?: string | number | undefined;
            hood_eng?: string | null | undefined;
        }[]>;
        streets: (cityId: import("./index.js").EntityId) => Promise<{
            street_id: string | number;
            street_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
        }[]>;
        autocomplete: (text: string) => Promise<import("./index.js").AddressSuggestions>;
        locate: (text: string) => Promise<import("./resources/address.js").SearchLocation>;
    };
    options: {
        realestate: (deal: import("./index.js").RealestateDeal) => Promise<import("./index.js").RealestateOptions>;
        commercialDynamic: () => Promise<import("./index.js").CommercialDynamicOptions>;
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
    catalog: {
        catalog: (category: import("./index.js").VehicleCategory, scope?: import("./resources/catalog.js").CatalogScope) => Promise<import("./index.js").VehicleCatalog>;
        options: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").VehicleCatalogOptions>;
        manufacturers: (category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        models: (manufacturer: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        subModels: (manufacturer: number, model: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        specialTypes: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        findManufacturer: (name: string, category?: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
        findSpecialType: (name: string, category: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
    };
    items: {
        realestate: (token: string) => Promise<import("./index.js").RealestateItem>;
        vehicle: (token: string) => Promise<import("./index.js").VehicleItem>;
    };
    images: {
        cover: (item: import("./index.js").MediaBearing) => string | undefined;
        urls: (item: import("./index.js").MediaBearing) => string[];
        fileName: (url: string) => string;
        fetch: (url: string) => Promise<import("./index.js").ImageFile>;
        fetchMany: (urls: readonly string[]) => Promise<import("./index.js").ImageFile[]>;
        fetchItem: (item: import("./index.js").MediaBearing) => Promise<import("./index.js").ImageFile[]>;
        save: (url: string, path: string) => Promise<string>;
    };
    labels: {
        realestate: (deal: import("./index.js").RealestateDeal, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
        vehicles: (category: import("./index.js").VehicleCategory, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
    };
    neighborhood: {
        survey: (hoodId: import("./index.js").EntityId) => Promise<import("./index.js").NeighborhoodSurvey>;
        suggestions: (query: string) => Promise<import("./index.js").SearchSuggestions>;
    };
    nearby: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams) => Promise<import("./index.js").NearbyResult>>;
        stream: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, { maxChunks }?: import("./resources/nearby.js").NearbyStreamOptions) => AsyncGenerator<import("./index.js").NearbyDoc>>;
        all: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, options?: import("./resources/nearby.js").NearbyStreamOptions) => Promise<{
            token: string;
            order_id?: number | undefined;
            category_id?: number | undefined;
            subcategory_id?: number | undefined;
            status_id?: number | undefined;
            priority?: number | undefined;
            price?: number | null | undefined;
            is_price_only?: boolean | undefined;
            is_image_only?: boolean | undefined;
            search_text?: string | undefined;
            address?: {
                top_area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                address_master_id?: string | number | null | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | null | undefined;
            } | null | undefined;
            meta_data?: {
                images?: string[] | null | undefined;
                cover_image?: string | null | undefined;
                property_condition?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                balconies_count?: number | null | undefined;
                rooms_count?: number | null | undefined;
                square_meter?: number | null | undefined;
            } | null | undefined;
            dates?: {
                start?: string | null | undefined;
                update?: string | null | undefined;
                end?: string | null | undefined;
                rebounce?: string | null | undefined;
            } | null | undefined;
            feed_section?: string | null | undefined;
            customer?: {
                agency_name?: string | null | undefined;
                agency_logo?: string | null | undefined;
                second_phone?: string | null | undefined;
                second_broker_avatar?: string | null | undefined;
                brokers?: {
                    phone?: string | null | undefined;
                    name?: string | null | undefined;
                    avatar?: string | null | undefined;
                }[] | null | undefined;
            } | null | undefined;
            packages?: Record<string, unknown> | null | undefined;
            broker_packages?: Record<string, unknown> | null | undefined;
            search_fields?: {
                [x: string]: unknown;
                entrance_date?: string | null | undefined;
                square_meter?: number | null | undefined;
                rooms_count?: number | null | undefined;
                property_group?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | null | undefined;
            } | null | undefined;
        }[]>>;
    };
    [Symbol.asyncDispose]?: () => Promise<void>;
    /**
     * Release the auto-spawned browser server, if one was started. Call it before the
     * process ends — a bare `process.exit()` with a live Chromium session aborts the
     * runtime on Windows. `await using` handles this for you.
     */
    dispose: () => Promise<void>;
};
export interface NodeClientOptions {
    readonly fetch?: FetchTransportOptions;
    readonly curl?: CurlTransportOptions;
}
export declare const createNodeClient: ({ fetch, curl }?: NodeClientOptions) => {
    vehicles: import("./resources/vehicles.js").VehiclesResource;
    realestate: {
        forSale: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
        }>;
        rent: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
            pets?: boolean | undefined;
        }>;
        commercial: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").CommercialProperty | import("./index.js").CommercialProperty[] | undefined;
            dealType?: import("./index.js").CommercialDealType | undefined;
            highCeiling?: boolean | undefined;
            kitchenette?: boolean | undefined;
            alarm?: boolean | undefined;
            meetingRoom?: boolean | undefined;
            cameras?: boolean | undefined;
            communicationRoom?: boolean | undefined;
            loadingRamp?: boolean | undefined;
            coolingRoom?: boolean | undefined;
        }>;
        map: import("./core/describable.js").Describable<(deal: import("./index.js").RealestateDeal, params: import("./index.js").RealestateSearchParams) => Promise<import("./index.js").RealestateMap>>;
    };
    market: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").MarketSearchParams) => Promise<import("./resources/market.js").MarketResult>>;
        collection: import("./core/describable.js").Describable<(name: string, params?: import("./index.js").MarketCollectionParams) => Promise<import("./resources/market.js").MarketResult>>;
        filters: (q: string) => Promise<import("./index.js").MarketFilters>;
        collectionFilters: (name: string) => Promise<import("./index.js").MarketFilters>;
        autocomplete: (searchTerm: string) => Promise<import("./index.js").MarketAutocomplete>;
        menuItems: () => Promise<import("./index.js").MarketMenuItem[]>;
    };
    projects: {
        list: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        map: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        listings: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListingParams) => Promise<import("./index.js").Listing[]>>;
        developers: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperListParams) => Promise<import("./index.js").Developer[]>>;
        developerFeed: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperFeedParams) => Promise<{
            developers: {
                id: string;
                name?: string | undefined;
                logo?: string | null | undefined;
                info?: string | null | undefined;
                infoStyled?: string | null | undefined;
                projectCount?: string | undefined;
            }[];
            total?: number | undefined;
        }>>;
        autocomplete: (phrase: string) => Promise<import("./index.js").Project[]>;
        search(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined): Promise<{
            projects: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[];
            total?: number | undefined;
            similarProjects?: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[] | undefined;
        }>;
        stream(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): AsyncGenerator<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }, any, any>;
        all(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): Promise<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }[]>;
    };
    address: {
        regions: () => Promise<{
            region_id: string | number;
            region_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            region_eng?: string | null | undefined;
        }[]>;
        topAreas: () => Promise<{
            top_area_id: string | number;
            top_area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            top_area_eng?: string | null | undefined;
        }[]>;
        areas: () => Promise<{
            area_id: string | number;
            area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            area_eng?: string | null | undefined;
        }[]>;
        cities: () => Promise<{
            city_id: string | number;
            city_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            city_eng?: string | null | undefined;
        }[]>;
        hoods: (cityId?: import("./index.js").EntityId) => Promise<{
            hood_id: string | number;
            hood_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            street_id?: string | number | undefined;
            hood_eng?: string | null | undefined;
        }[]>;
        streets: (cityId: import("./index.js").EntityId) => Promise<{
            street_id: string | number;
            street_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
        }[]>;
        autocomplete: (text: string) => Promise<import("./index.js").AddressSuggestions>;
        locate: (text: string) => Promise<import("./resources/address.js").SearchLocation>;
    };
    options: {
        realestate: (deal: import("./index.js").RealestateDeal) => Promise<import("./index.js").RealestateOptions>;
        commercialDynamic: () => Promise<import("./index.js").CommercialDynamicOptions>;
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
    catalog: {
        catalog: (category: import("./index.js").VehicleCategory, scope?: import("./resources/catalog.js").CatalogScope) => Promise<import("./index.js").VehicleCatalog>;
        options: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").VehicleCatalogOptions>;
        manufacturers: (category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        models: (manufacturer: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        subModels: (manufacturer: number, model: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        specialTypes: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        findManufacturer: (name: string, category?: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
        findSpecialType: (name: string, category: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
    };
    items: {
        realestate: (token: string) => Promise<import("./index.js").RealestateItem>;
        vehicle: (token: string) => Promise<import("./index.js").VehicleItem>;
    };
    images: {
        cover: (item: import("./index.js").MediaBearing) => string | undefined;
        urls: (item: import("./index.js").MediaBearing) => string[];
        fileName: (url: string) => string;
        fetch: (url: string) => Promise<import("./index.js").ImageFile>;
        fetchMany: (urls: readonly string[]) => Promise<import("./index.js").ImageFile[]>;
        fetchItem: (item: import("./index.js").MediaBearing) => Promise<import("./index.js").ImageFile[]>;
        save: (url: string, path: string) => Promise<string>;
    };
    labels: {
        realestate: (deal: import("./index.js").RealestateDeal, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
        vehicles: (category: import("./index.js").VehicleCategory, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
    };
    neighborhood: {
        survey: (hoodId: import("./index.js").EntityId) => Promise<import("./index.js").NeighborhoodSurvey>;
        suggestions: (query: string) => Promise<import("./index.js").SearchSuggestions>;
    };
    nearby: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams) => Promise<import("./index.js").NearbyResult>>;
        stream: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, { maxChunks }?: import("./resources/nearby.js").NearbyStreamOptions) => AsyncGenerator<import("./index.js").NearbyDoc>>;
        all: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, options?: import("./resources/nearby.js").NearbyStreamOptions) => Promise<{
            token: string;
            order_id?: number | undefined;
            category_id?: number | undefined;
            subcategory_id?: number | undefined;
            status_id?: number | undefined;
            priority?: number | undefined;
            price?: number | null | undefined;
            is_price_only?: boolean | undefined;
            is_image_only?: boolean | undefined;
            search_text?: string | undefined;
            address?: {
                top_area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                address_master_id?: string | number | null | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | null | undefined;
            } | null | undefined;
            meta_data?: {
                images?: string[] | null | undefined;
                cover_image?: string | null | undefined;
                property_condition?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                balconies_count?: number | null | undefined;
                rooms_count?: number | null | undefined;
                square_meter?: number | null | undefined;
            } | null | undefined;
            dates?: {
                start?: string | null | undefined;
                update?: string | null | undefined;
                end?: string | null | undefined;
                rebounce?: string | null | undefined;
            } | null | undefined;
            feed_section?: string | null | undefined;
            customer?: {
                agency_name?: string | null | undefined;
                agency_logo?: string | null | undefined;
                second_phone?: string | null | undefined;
                second_broker_avatar?: string | null | undefined;
                brokers?: {
                    phone?: string | null | undefined;
                    name?: string | null | undefined;
                    avatar?: string | null | undefined;
                }[] | null | undefined;
            } | null | undefined;
            packages?: Record<string, unknown> | null | undefined;
            broker_packages?: Record<string, unknown> | null | undefined;
            search_fields?: {
                [x: string]: unknown;
                entrance_date?: string | null | undefined;
                square_meter?: number | null | undefined;
                rooms_count?: number | null | undefined;
                property_group?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | null | undefined;
            } | null | undefined;
        }[]>>;
    };
    [Symbol.asyncDispose]?: () => Promise<void>;
    /**
     * Release the auto-spawned browser server, if one was started. Call it before the
     * process ends — a bare `process.exit()` with a live Chromium session aborts the
     * runtime on Windows. `await using` handles this for you.
     */
    dispose: () => Promise<void>;
};
export declare const createBrowserClient: (options?: BrowserTransportOptions) => {
    vehicles: import("./resources/vehicles.js").VehiclesResource;
    realestate: {
        forSale: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
        }>;
        rent: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
            pets?: boolean | undefined;
        }>;
        commercial: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").CommercialProperty | import("./index.js").CommercialProperty[] | undefined;
            dealType?: import("./index.js").CommercialDealType | undefined;
            highCeiling?: boolean | undefined;
            kitchenette?: boolean | undefined;
            alarm?: boolean | undefined;
            meetingRoom?: boolean | undefined;
            cameras?: boolean | undefined;
            communicationRoom?: boolean | undefined;
            loadingRamp?: boolean | undefined;
            coolingRoom?: boolean | undefined;
        }>;
        map: import("./core/describable.js").Describable<(deal: import("./index.js").RealestateDeal, params: import("./index.js").RealestateSearchParams) => Promise<import("./index.js").RealestateMap>>;
    };
    market: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").MarketSearchParams) => Promise<import("./resources/market.js").MarketResult>>;
        collection: import("./core/describable.js").Describable<(name: string, params?: import("./index.js").MarketCollectionParams) => Promise<import("./resources/market.js").MarketResult>>;
        filters: (q: string) => Promise<import("./index.js").MarketFilters>;
        collectionFilters: (name: string) => Promise<import("./index.js").MarketFilters>;
        autocomplete: (searchTerm: string) => Promise<import("./index.js").MarketAutocomplete>;
        menuItems: () => Promise<import("./index.js").MarketMenuItem[]>;
    };
    projects: {
        list: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        map: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        listings: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListingParams) => Promise<import("./index.js").Listing[]>>;
        developers: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperListParams) => Promise<import("./index.js").Developer[]>>;
        developerFeed: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperFeedParams) => Promise<{
            developers: {
                id: string;
                name?: string | undefined;
                logo?: string | null | undefined;
                info?: string | null | undefined;
                infoStyled?: string | null | undefined;
                projectCount?: string | undefined;
            }[];
            total?: number | undefined;
        }>>;
        autocomplete: (phrase: string) => Promise<import("./index.js").Project[]>;
        search(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined): Promise<{
            projects: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[];
            total?: number | undefined;
            similarProjects?: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[] | undefined;
        }>;
        stream(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): AsyncGenerator<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }, any, any>;
        all(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): Promise<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }[]>;
    };
    address: {
        regions: () => Promise<{
            region_id: string | number;
            region_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            region_eng?: string | null | undefined;
        }[]>;
        topAreas: () => Promise<{
            top_area_id: string | number;
            top_area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            top_area_eng?: string | null | undefined;
        }[]>;
        areas: () => Promise<{
            area_id: string | number;
            area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            area_eng?: string | null | undefined;
        }[]>;
        cities: () => Promise<{
            city_id: string | number;
            city_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            city_eng?: string | null | undefined;
        }[]>;
        hoods: (cityId?: import("./index.js").EntityId) => Promise<{
            hood_id: string | number;
            hood_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            street_id?: string | number | undefined;
            hood_eng?: string | null | undefined;
        }[]>;
        streets: (cityId: import("./index.js").EntityId) => Promise<{
            street_id: string | number;
            street_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
        }[]>;
        autocomplete: (text: string) => Promise<import("./index.js").AddressSuggestions>;
        locate: (text: string) => Promise<import("./resources/address.js").SearchLocation>;
    };
    options: {
        realestate: (deal: import("./index.js").RealestateDeal) => Promise<import("./index.js").RealestateOptions>;
        commercialDynamic: () => Promise<import("./index.js").CommercialDynamicOptions>;
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
    catalog: {
        catalog: (category: import("./index.js").VehicleCategory, scope?: import("./resources/catalog.js").CatalogScope) => Promise<import("./index.js").VehicleCatalog>;
        options: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").VehicleCatalogOptions>;
        manufacturers: (category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        models: (manufacturer: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        subModels: (manufacturer: number, model: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        specialTypes: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        findManufacturer: (name: string, category?: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
        findSpecialType: (name: string, category: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
    };
    items: {
        realestate: (token: string) => Promise<import("./index.js").RealestateItem>;
        vehicle: (token: string) => Promise<import("./index.js").VehicleItem>;
    };
    images: {
        cover: (item: import("./index.js").MediaBearing) => string | undefined;
        urls: (item: import("./index.js").MediaBearing) => string[];
        fileName: (url: string) => string;
        fetch: (url: string) => Promise<import("./index.js").ImageFile>;
        fetchMany: (urls: readonly string[]) => Promise<import("./index.js").ImageFile[]>;
        fetchItem: (item: import("./index.js").MediaBearing) => Promise<import("./index.js").ImageFile[]>;
        save: (url: string, path: string) => Promise<string>;
    };
    labels: {
        realestate: (deal: import("./index.js").RealestateDeal, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
        vehicles: (category: import("./index.js").VehicleCategory, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
    };
    neighborhood: {
        survey: (hoodId: import("./index.js").EntityId) => Promise<import("./index.js").NeighborhoodSurvey>;
        suggestions: (query: string) => Promise<import("./index.js").SearchSuggestions>;
    };
    nearby: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams) => Promise<import("./index.js").NearbyResult>>;
        stream: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, { maxChunks }?: import("./resources/nearby.js").NearbyStreamOptions) => AsyncGenerator<import("./index.js").NearbyDoc>>;
        all: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, options?: import("./resources/nearby.js").NearbyStreamOptions) => Promise<{
            token: string;
            order_id?: number | undefined;
            category_id?: number | undefined;
            subcategory_id?: number | undefined;
            status_id?: number | undefined;
            priority?: number | undefined;
            price?: number | null | undefined;
            is_price_only?: boolean | undefined;
            is_image_only?: boolean | undefined;
            search_text?: string | undefined;
            address?: {
                top_area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                address_master_id?: string | number | null | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | null | undefined;
            } | null | undefined;
            meta_data?: {
                images?: string[] | null | undefined;
                cover_image?: string | null | undefined;
                property_condition?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                balconies_count?: number | null | undefined;
                rooms_count?: number | null | undefined;
                square_meter?: number | null | undefined;
            } | null | undefined;
            dates?: {
                start?: string | null | undefined;
                update?: string | null | undefined;
                end?: string | null | undefined;
                rebounce?: string | null | undefined;
            } | null | undefined;
            feed_section?: string | null | undefined;
            customer?: {
                agency_name?: string | null | undefined;
                agency_logo?: string | null | undefined;
                second_phone?: string | null | undefined;
                second_broker_avatar?: string | null | undefined;
                brokers?: {
                    phone?: string | null | undefined;
                    name?: string | null | undefined;
                    avatar?: string | null | undefined;
                }[] | null | undefined;
            } | null | undefined;
            packages?: Record<string, unknown> | null | undefined;
            broker_packages?: Record<string, unknown> | null | undefined;
            search_fields?: {
                [x: string]: unknown;
                entrance_date?: string | null | undefined;
                square_meter?: number | null | undefined;
                rooms_count?: number | null | undefined;
                property_group?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | null | undefined;
            } | null | undefined;
        }[]>>;
    };
    [Symbol.asyncDispose]?: () => Promise<void>;
    /**
     * Release the auto-spawned browser server, if one was started. Call it before the
     * process ends — a bare `process.exit()` with a live Chromium session aborts the
     * runtime on Windows. `await using` handles this for you.
     */
    dispose: () => Promise<void>;
};
export interface ResilientClientOptions {
    readonly browser?: BrowserTransportOptions;
    readonly http?: FetchTransportOptions;
    readonly curl?: CurlTransportOptions;
    readonly retry?: RetryTransportOptions;
}
export declare const createResilientClient: ({ browser, http, curl, retry, }?: ResilientClientOptions) => {
    vehicles: import("./resources/vehicles.js").VehiclesResource;
    realestate: {
        forSale: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
        }>;
        rent: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").ResidentialProperty | import("./index.js").ResidentialProperty[] | undefined;
            propertyCondition?: import("./index.js").PropertyCondition | undefined;
            shelter?: boolean | undefined;
            bars?: boolean | undefined;
            renovated?: boolean | undefined;
            accessibility?: boolean | undefined;
            furniture?: boolean | undefined;
            warehouse?: boolean | undefined;
            pets?: boolean | undefined;
        }>;
        commercial: import("./resources/realestate.js").RealestateFeedResource<{
            region: string | number;
            newFromContractor?: boolean | undefined;
            priceOnly?: boolean | undefined;
            tour?: boolean | undefined;
            text?: string | undefined;
            page?: number | undefined;
            parking?: boolean | undefined;
            elevator?: boolean | undefined;
            airConditioner?: boolean | undefined;
            balcony?: boolean | undefined;
            minFloor?: number | undefined;
            maxFloor?: number | undefined;
            minSquareMeterBuild?: number | undefined;
            maxSquareMeterBuild?: number | undefined;
            minSquaremeter?: number | undefined;
            maxSquaremeter?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            multiCity?: (string | number)[] | undefined;
            multiNeighborhood?: (string | number)[] | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
            street?: string | number | undefined;
            property?: import("./index.js").CommercialProperty | import("./index.js").CommercialProperty[] | undefined;
            dealType?: import("./index.js").CommercialDealType | undefined;
            highCeiling?: boolean | undefined;
            kitchenette?: boolean | undefined;
            alarm?: boolean | undefined;
            meetingRoom?: boolean | undefined;
            cameras?: boolean | undefined;
            communicationRoom?: boolean | undefined;
            loadingRamp?: boolean | undefined;
            coolingRoom?: boolean | undefined;
        }>;
        map: import("./core/describable.js").Describable<(deal: import("./index.js").RealestateDeal, params: import("./index.js").RealestateSearchParams) => Promise<import("./index.js").RealestateMap>>;
    };
    market: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").MarketSearchParams) => Promise<import("./resources/market.js").MarketResult>>;
        collection: import("./core/describable.js").Describable<(name: string, params?: import("./index.js").MarketCollectionParams) => Promise<import("./resources/market.js").MarketResult>>;
        filters: (q: string) => Promise<import("./index.js").MarketFilters>;
        collectionFilters: (name: string) => Promise<import("./index.js").MarketFilters>;
        autocomplete: (searchTerm: string) => Promise<import("./index.js").MarketAutocomplete>;
        menuItems: () => Promise<import("./index.js").MarketMenuItem[]>;
    };
    projects: {
        list: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        map: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListParams) => Promise<import("./index.js").Project[]>>;
        listings: import("./core/describable.js").Describable<(params?: import("./index.js").ProjectListingParams) => Promise<import("./index.js").Listing[]>>;
        developers: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperListParams) => Promise<import("./index.js").Developer[]>>;
        developerFeed: import("./core/describable.js").Describable<(params?: import("./index.js").DeveloperFeedParams) => Promise<{
            developers: {
                id: string;
                name?: string | undefined;
                logo?: string | null | undefined;
                info?: string | null | undefined;
                infoStyled?: string | null | undefined;
                projectCount?: string | undefined;
            }[];
            total?: number | undefined;
        }>>;
        autocomplete: (phrase: string) => Promise<import("./index.js").Project[]>;
        search(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined): Promise<{
            projects: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[];
            total?: number | undefined;
            similarProjects?: {
                token: string;
                projectId?: number | undefined;
                projectYzerId?: number | undefined;
                treedisId?: string | undefined;
                orderId?: number | undefined;
                adNumber?: number | undefined;
                adType?: string | undefined;
                categoryId?: number | undefined;
                subcategoryId?: number | undefined;
                statusId?: number | undefined;
                packageId?: number | undefined;
                slug?: string | undefined;
                price?: number | null | undefined;
                abovePrice?: number | null | undefined;
                address?: {
                    region?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    topArea?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    area?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    city?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    neighborhood?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    street?: {
                        id?: string | number | undefined;
                        text?: string | undefined;
                        textEng?: string | null | undefined;
                    } | undefined;
                    house?: {
                        number?: number | undefined;
                    } | undefined;
                    coords?: {
                        lon: number;
                        lat: number;
                    } | undefined;
                    display?: string | undefined;
                    addressMasterId?: string | number | undefined;
                } | undefined;
                additionalDetails?: {
                    propertyTypes?: string[] | undefined;
                    property?: {
                        id?: string | undefined;
                        textEng?: string | undefined;
                    } | undefined;
                    projectCategories?: number[] | undefined;
                    companyIds?: string[] | undefined;
                    roomsCount?: number | undefined;
                    minRooms?: number | undefined;
                    maxRooms?: number | undefined;
                    minPrice?: number | undefined;
                    maxPrice?: number | undefined;
                    minFloor?: number | undefined;
                    maxFloor?: number | undefined;
                    floors?: number | undefined;
                    minSquaremeter?: number | undefined;
                    maxSquaremeter?: number | undefined;
                    entranceDate?: string | null | undefined;
                    timelineStatus?: string | number | null | undefined;
                } | undefined;
                metaData?: {
                    projectName?: string | undefined;
                    projectLogo?: string | null | undefined;
                    coverImage?: string | undefined;
                    images?: string[] | undefined;
                    video?: string | null | undefined;
                    promotionImage?: string | null | undefined;
                    promotionText?: string | null | undefined;
                    flag?: string | null | undefined;
                    info?: string | null | undefined;
                    infoHeader?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    infoHeaderStyled?: string | null | undefined;
                    projectBenefits?: string[] | undefined;
                    videos?: string[] | undefined;
                    has3D?: boolean | undefined;
                    hasAiDesign?: boolean | undefined;
                    hideDealsHistory?: boolean | undefined;
                    previewType?: string | undefined;
                    immediateOccupancy?: boolean | undefined;
                    isOnSale?: boolean | undefined;
                    buildings?: number | undefined;
                    apartments?: number | undefined;
                    blueprints?: string[] | undefined;
                    bank?: string | null | undefined;
                    companyDetails?: {
                        id: string;
                        name?: string | undefined;
                        logo?: string | null | undefined;
                        info?: string | null | undefined;
                        infoStyled?: string | null | undefined;
                        projectCount?: string | undefined;
                    }[] | undefined;
                    specs?: {
                        category?: string | undefined;
                        labels?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                packages?: Record<string, boolean> | undefined;
                dates?: {
                    createdAt?: string | undefined;
                    updatedAt?: string | undefined;
                } | undefined;
                customer?: {
                    phone?: string | null | undefined;
                } | undefined;
            }[] | undefined;
        }>;
        stream(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): AsyncGenerator<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }, any, any>;
        all(params?: {
            immediateOccupancy?: boolean | undefined;
            page?: number | undefined;
            minRooms?: number | undefined;
            maxRooms?: number | undefined;
            minPrice?: number | undefined;
            maxPrice?: number | undefined;
            propertyType?: import("./index.js").ProjectPropertyType | undefined;
            region?: string | number | undefined;
            topArea?: string | number | undefined;
            area?: string | number | undefined;
            city?: string | number | undefined;
            neighborhood?: string | number | undefined;
        } | undefined, options?: import("./index.js").PaginateOptions): Promise<{
            token: string;
            projectId?: number | undefined;
            projectYzerId?: number | undefined;
            treedisId?: string | undefined;
            orderId?: number | undefined;
            adNumber?: number | undefined;
            adType?: string | undefined;
            categoryId?: number | undefined;
            subcategoryId?: number | undefined;
            statusId?: number | undefined;
            packageId?: number | undefined;
            slug?: string | undefined;
            price?: number | null | undefined;
            abovePrice?: number | null | undefined;
            address?: {
                region?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                topArea?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | undefined;
                    textEng?: string | null | undefined;
                } | undefined;
                house?: {
                    number?: number | undefined;
                } | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | undefined;
                display?: string | undefined;
                addressMasterId?: string | number | undefined;
            } | undefined;
            additionalDetails?: {
                propertyTypes?: string[] | undefined;
                property?: {
                    id?: string | undefined;
                    textEng?: string | undefined;
                } | undefined;
                projectCategories?: number[] | undefined;
                companyIds?: string[] | undefined;
                roomsCount?: number | undefined;
                minRooms?: number | undefined;
                maxRooms?: number | undefined;
                minPrice?: number | undefined;
                maxPrice?: number | undefined;
                minFloor?: number | undefined;
                maxFloor?: number | undefined;
                floors?: number | undefined;
                minSquaremeter?: number | undefined;
                maxSquaremeter?: number | undefined;
                entranceDate?: string | null | undefined;
                timelineStatus?: string | number | null | undefined;
            } | undefined;
            metaData?: {
                projectName?: string | undefined;
                projectLogo?: string | null | undefined;
                coverImage?: string | undefined;
                images?: string[] | undefined;
                video?: string | null | undefined;
                promotionImage?: string | null | undefined;
                promotionText?: string | null | undefined;
                flag?: string | null | undefined;
                info?: string | null | undefined;
                infoHeader?: string | null | undefined;
                infoStyled?: string | null | undefined;
                infoHeaderStyled?: string | null | undefined;
                projectBenefits?: string[] | undefined;
                videos?: string[] | undefined;
                has3D?: boolean | undefined;
                hasAiDesign?: boolean | undefined;
                hideDealsHistory?: boolean | undefined;
                previewType?: string | undefined;
                immediateOccupancy?: boolean | undefined;
                isOnSale?: boolean | undefined;
                buildings?: number | undefined;
                apartments?: number | undefined;
                blueprints?: string[] | undefined;
                bank?: string | null | undefined;
                companyDetails?: {
                    id: string;
                    name?: string | undefined;
                    logo?: string | null | undefined;
                    info?: string | null | undefined;
                    infoStyled?: string | null | undefined;
                    projectCount?: string | undefined;
                }[] | undefined;
                specs?: {
                    category?: string | undefined;
                    labels?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            packages?: Record<string, boolean> | undefined;
            dates?: {
                createdAt?: string | undefined;
                updatedAt?: string | undefined;
            } | undefined;
            customer?: {
                phone?: string | null | undefined;
            } | undefined;
        }[]>;
    };
    address: {
        regions: () => Promise<{
            region_id: string | number;
            region_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            region_eng?: string | null | undefined;
        }[]>;
        topAreas: () => Promise<{
            top_area_id: string | number;
            top_area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            top_area_eng?: string | null | undefined;
        }[]>;
        areas: () => Promise<{
            area_id: string | number;
            area_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            area_eng?: string | null | undefined;
        }[]>;
        cities: () => Promise<{
            city_id: string | number;
            city_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            hood_id?: string | number | undefined;
            street_id?: string | number | undefined;
            city_eng?: string | null | undefined;
        }[]>;
        hoods: (cityId?: import("./index.js").EntityId) => Promise<{
            hood_id: string | number;
            hood_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            street_id?: string | number | undefined;
            hood_eng?: string | null | undefined;
        }[]>;
        streets: (cityId: import("./index.js").EntityId) => Promise<{
            street_id: string | number;
            street_heb: string;
            type_weight?: number | undefined;
            title_text?: string | undefined;
            full_title_text?: string | undefined;
            region_id?: string | number | undefined;
            top_area_id?: string | number | undefined;
            area_id?: string | number | undefined;
            city_id?: string | number | undefined;
            hood_id?: string | number | undefined;
        }[]>;
        autocomplete: (text: string) => Promise<import("./index.js").AddressSuggestions>;
        locate: (text: string) => Promise<import("./resources/address.js").SearchLocation>;
    };
    options: {
        realestate: (deal: import("./index.js").RealestateDeal) => Promise<import("./index.js").RealestateOptions>;
        commercialDynamic: () => Promise<import("./index.js").CommercialDynamicOptions>;
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
    catalog: {
        catalog: (category: import("./index.js").VehicleCategory, scope?: import("./resources/catalog.js").CatalogScope) => Promise<import("./index.js").VehicleCatalog>;
        options: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").VehicleCatalogOptions>;
        manufacturers: (category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        models: (manufacturer: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        subModels: (manufacturer: number, model: number, category?: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogModel[]>;
        specialTypes: (category: import("./index.js").VehicleCategory) => Promise<import("./index.js").CatalogEntry[]>;
        findManufacturer: (name: string, category?: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
        findSpecialType: (name: string, category: import("./index.js").VehicleCategory) => import("./data/catalog-index.js").CatalogEntry | undefined;
    };
    items: {
        realestate: (token: string) => Promise<import("./index.js").RealestateItem>;
        vehicle: (token: string) => Promise<import("./index.js").VehicleItem>;
    };
    images: {
        cover: (item: import("./index.js").MediaBearing) => string | undefined;
        urls: (item: import("./index.js").MediaBearing) => string[];
        fileName: (url: string) => string;
        fetch: (url: string) => Promise<import("./index.js").ImageFile>;
        fetchMany: (urls: readonly string[]) => Promise<import("./index.js").ImageFile[]>;
        fetchItem: (item: import("./index.js").MediaBearing) => Promise<import("./index.js").ImageFile[]>;
        save: (url: string, path: string) => Promise<string>;
    };
    labels: {
        realestate: (deal: import("./index.js").RealestateDeal, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
        vehicles: (category: import("./index.js").VehicleCategory, params: import("./core/query.js").QueryParams) => Promise<Record<string, {
            value: string;
        } | {
            id: string | number;
            title: string;
            pluralTitle?: string | undefined;
            engTitle?: string | null | undefined;
        }[]>>;
    };
    neighborhood: {
        survey: (hoodId: import("./index.js").EntityId) => Promise<import("./index.js").NeighborhoodSurvey>;
        suggestions: (query: string) => Promise<import("./index.js").SearchSuggestions>;
    };
    nearby: {
        search: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams) => Promise<import("./index.js").NearbyResult>>;
        stream: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, { maxChunks }?: import("./resources/nearby.js").NearbyStreamOptions) => AsyncGenerator<import("./index.js").NearbyDoc>>;
        all: import("./core/describable.js").Describable<(params: import("./index.js").NearbyParams, options?: import("./resources/nearby.js").NearbyStreamOptions) => Promise<{
            token: string;
            order_id?: number | undefined;
            category_id?: number | undefined;
            subcategory_id?: number | undefined;
            status_id?: number | undefined;
            priority?: number | undefined;
            price?: number | null | undefined;
            is_price_only?: boolean | undefined;
            is_image_only?: boolean | undefined;
            search_text?: string | undefined;
            address?: {
                top_area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                area?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                city?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                neighborhood?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                street?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                address_master_id?: string | number | null | undefined;
                coords?: {
                    lon: number;
                    lat: number;
                } | null | undefined;
            } | null | undefined;
            meta_data?: {
                images?: string[] | null | undefined;
                cover_image?: string | null | undefined;
                property_condition?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | undefined;
                balconies_count?: number | null | undefined;
                rooms_count?: number | null | undefined;
                square_meter?: number | null | undefined;
            } | null | undefined;
            dates?: {
                start?: string | null | undefined;
                update?: string | null | undefined;
                end?: string | null | undefined;
                rebounce?: string | null | undefined;
            } | null | undefined;
            feed_section?: string | null | undefined;
            customer?: {
                agency_name?: string | null | undefined;
                agency_logo?: string | null | undefined;
                second_phone?: string | null | undefined;
                second_broker_avatar?: string | null | undefined;
                brokers?: {
                    phone?: string | null | undefined;
                    name?: string | null | undefined;
                    avatar?: string | null | undefined;
                }[] | null | undefined;
            } | null | undefined;
            packages?: Record<string, unknown> | null | undefined;
            broker_packages?: Record<string, unknown> | null | undefined;
            search_fields?: {
                [x: string]: unknown;
                entrance_date?: string | null | undefined;
                square_meter?: number | null | undefined;
                rooms_count?: number | null | undefined;
                property_group?: {
                    id?: string | number | undefined;
                    text?: string | null | undefined;
                    text_eng?: string | null | undefined;
                } | null | undefined;
            } | null | undefined;
        }[]>>;
    };
    [Symbol.asyncDispose]?: () => Promise<void>;
    /**
     * Release the auto-spawned browser server, if one was started. Call it before the
     * process ends — a bare `process.exit()` with a live Chromium session aborts the
     * runtime on Windows. `await using` handles this for you.
     */
    dispose: () => Promise<void>;
};
export type Yad2Client = ReturnType<typeof createYad2Client>;
