import { z } from 'zod';
import type { Transport } from './transport.js';
import type { QueryParams } from './query.js';
import { buildUrl } from './query.js';
import { isChallenge } from './challenge.js';
import { envelope } from '../schemas/common.js';
import { Yad2BlockedError, Yad2RequestError, Yad2SchemaError } from './errors.js';

export const GATEWAY_BASE_URL = 'https://gw.yad2.co.il';

export interface GatewayOptions {
  readonly transport: Transport;
  readonly baseUrl?: string;
}

const parseJson = (path: string, body: string): unknown => {
  try {
    return JSON.parse(body);
  } catch {
    throw new Yad2RequestError(200, path, 'response was not valid JSON');
  }
};

const detailOf = (payload: unknown): string => {
  const shape = z.object({ message: z.string().optional(), data: z.unknown() }).safeParse(payload);
  if (!shape.success) return 'unknown error';
  const { message, data } = shape.data;
  return typeof data === 'string' ? data : (message ?? 'unknown error');
};

export const createGateway = ({ transport, baseUrl = GATEWAY_BASE_URL }: GatewayOptions) => {
  const get = async <S extends z.ZodTypeAny>(
    path: string,
    params: QueryParams,
    schema: S,
  ): Promise<z.infer<S>> => {
    const { status, body } = await transport.request(buildUrl(baseUrl, path, params));
    if (isChallenge(body)) throw new Yad2BlockedError(path);

    const payload = parseJson(path, body);
    if (status >= 400) throw new Yad2RequestError(status, path, detailOf(payload));

    const parsed = schema.safeParse(payload);
    if (!parsed.success) throw new Yad2SchemaError(path, z.prettifyError(parsed.error));
    return parsed.data;
  };

  const getData = async <S extends z.ZodTypeAny>(
    path: string,
    params: QueryParams,
    schema: S,
  ): Promise<z.infer<S>> => {
    const response = (await get(path, params, envelope(schema))) as { data: z.infer<S> };
    return response.data;
  };

  return { get, getData };
};

export type Gateway = ReturnType<typeof createGateway>;
