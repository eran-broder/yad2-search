import { z } from 'zod';
export declare const NearbyLabelSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const NearbyAddressSchema: z.ZodObject<{
    top_area: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    area: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    city: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    neighborhood: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    street: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    address_master_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
    coords: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        lon: z.ZodNumber;
        lat: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const NearbyMetaSchema: z.ZodObject<{
    images: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    cover_image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    property_condition: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    balconies_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rooms_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    square_meter: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export declare const NearbyDatesSchema: z.ZodObject<{
    start: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    update: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    end: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rebounce: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const NearbyBrokerSchema: z.ZodObject<{
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const NearbyCustomerSchema: z.ZodObject<{
    agency_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agency_logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    second_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    second_broker_avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    brokers: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
export declare const NearbySearchFieldsSchema: z.ZodObject<{
    entrance_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    square_meter: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rooms_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    property_group: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
}, z.core.$catchall<z.ZodUnknown>>;
export declare const NearbyDocSchema: z.ZodObject<{
    token: z.ZodString;
    order_id: z.ZodOptional<z.ZodNumber>;
    category_id: z.ZodOptional<z.ZodNumber>;
    subcategory_id: z.ZodOptional<z.ZodNumber>;
    status_id: z.ZodOptional<z.ZodNumber>;
    priority: z.ZodOptional<z.ZodNumber>;
    price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    is_price_only: z.ZodOptional<z.ZodBoolean>;
    is_image_only: z.ZodOptional<z.ZodBoolean>;
    search_text: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        top_area: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        area: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        city: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        neighborhood: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        street: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        address_master_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
        coords: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            lon: z.ZodNumber;
            lat: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    meta_data: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        images: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        cover_image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        property_condition: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>;
        balconies_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rooms_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        square_meter: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    dates: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        start: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        update: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        end: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rebounce: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    feed_section: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    customer: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agency_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        agency_logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        second_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        second_broker_avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        brokers: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>>;
    }, z.core.$strip>>>;
    packages: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    broker_packages: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    search_fields: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entrance_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        square_meter: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rooms_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        property_group: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
    }, z.core.$catchall<z.ZodUnknown>>>>;
}, z.core.$strip>;
export declare const NearbyResultSchema: z.ZodObject<{
    docs: z.ZodArray<z.ZodObject<{
        token: z.ZodString;
        order_id: z.ZodOptional<z.ZodNumber>;
        category_id: z.ZodOptional<z.ZodNumber>;
        subcategory_id: z.ZodOptional<z.ZodNumber>;
        status_id: z.ZodOptional<z.ZodNumber>;
        priority: z.ZodOptional<z.ZodNumber>;
        price: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        is_price_only: z.ZodOptional<z.ZodBoolean>;
        is_image_only: z.ZodOptional<z.ZodBoolean>;
        search_text: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            top_area: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>;
            area: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>;
            city: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>;
            neighborhood: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>;
            street: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>;
            address_master_id: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>>;
            coords: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                lon: z.ZodNumber;
                lat: z.ZodNumber;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
        meta_data: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            images: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            cover_image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            property_condition: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>;
            balconies_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            rooms_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            square_meter: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
        dates: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            start: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            update: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            end: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rebounce: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        feed_section: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        customer: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            agency_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            agency_logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            second_phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            second_broker_avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            brokers: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
                phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>>>;
        packages: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        broker_packages: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        search_fields: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            entrance_date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            square_meter: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            rooms_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            property_group: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                text_eng: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>>>;
        }, z.core.$catchall<z.ZodUnknown>>>>;
    }, z.core.$strip>>;
    pointInTime: z.ZodOptional<z.ZodString>;
    nextChunk: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type NearbyDoc = z.infer<typeof NearbyDocSchema>;
export type NearbyResult = z.infer<typeof NearbyResultSchema>;
export type NearbyAddress = z.infer<typeof NearbyAddressSchema>;
export type NearbyCustomer = z.infer<typeof NearbyCustomerSchema>;
