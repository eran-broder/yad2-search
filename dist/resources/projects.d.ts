import type { Gateway } from '../core/gateway.js';
import { type Developer, type Listing, type Project } from '../schemas/projects/index.js';
import { type DeveloperFeedParams, type DeveloperListParams, type ProjectListParams, type ProjectListingParams } from '../params/projects.js';
export declare const createProjectsResource: (gateway: Gateway) => {
    list: import("../core/describable.js").Describable<(params?: ProjectListParams) => Promise<Project[]>>;
    map: import("../core/describable.js").Describable<(params?: ProjectListParams) => Promise<Project[]>>;
    listings: import("../core/describable.js").Describable<(params?: ProjectListingParams) => Promise<Listing[]>>;
    developers: import("../core/describable.js").Describable<(params?: DeveloperListParams) => Promise<Developer[]>>;
    developerFeed: import("../core/describable.js").Describable<(params?: DeveloperFeedParams) => Promise<{
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
    autocomplete: (phrase: string) => Promise<Project[]>;
    search(params?: {
        immediateOccupancy?: boolean | undefined;
        page?: number | undefined;
        minRooms?: number | undefined;
        maxRooms?: number | undefined;
        minPrice?: number | undefined;
        maxPrice?: number | undefined;
        propertyType?: import("../core/enums/projects.js").ProjectPropertyType | undefined;
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
        propertyType?: import("../core/enums/projects.js").ProjectPropertyType | undefined;
        region?: string | number | undefined;
        topArea?: string | number | undefined;
        area?: string | number | undefined;
        city?: string | number | undefined;
        neighborhood?: string | number | undefined;
    } | undefined, options?: import("./paginate.js").PaginateOptions): AsyncGenerator<{
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
        propertyType?: import("../core/enums/projects.js").ProjectPropertyType | undefined;
        region?: string | number | undefined;
        topArea?: string | number | undefined;
        area?: string | number | undefined;
        city?: string | number | undefined;
        neighborhood?: string | number | undefined;
    } | undefined, options?: import("./paginate.js").PaginateOptions): Promise<{
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
