import { z } from 'zod';
import type { Transport } from './transport.js';
import type { QueryParams } from './query.js';
export declare const GATEWAY_BASE_URL = "https://gw.yad2.co.il";
export interface GatewayOptions {
    readonly transport: Transport;
    readonly baseUrl?: string;
}
export declare const createGateway: ({ transport, baseUrl }: GatewayOptions) => {
    get: <S extends z.ZodTypeAny>(path: string, params: QueryParams, schema: S) => Promise<z.infer<S>>;
    getData: <S extends z.ZodTypeAny>(path: string, params: QueryParams, schema: S) => Promise<z.infer<S>>;
};
export type Gateway = ReturnType<typeof createGateway>;
