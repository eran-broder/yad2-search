import type { Gateway } from '../core/gateway.js';
import { NearbyPath, Service } from '../core/enums/index.js';
import { parseParams } from '../core/params.js';
import { withParams, withRows, type RowsOf } from '../core/describable.js';
import { NearbyParamsSchema, type NearbyParams } from '../params/nearby.js';
import { NearbyResultSchema, type NearbyDoc, type NearbyResult } from '../schemas/nearby.js';
import { collect } from './paginate.js';

export interface NearbyStreamOptions {
  readonly maxChunks?: number;
}

const DEFAULT_MAX_CHUNKS = 10;

export const createNearbyResource = (gateway: Gateway) => {
  const search = (params: NearbyParams): Promise<NearbyResult> =>
    gateway.getData(
      `/${Service.Carousels}${NearbyPath.NearMe}`,
      parseParams('nearby.search', NearbyParamsSchema, params),
      NearbyResultSchema,
    );

  async function* stream(
    params: NearbyParams,
    { maxChunks = DEFAULT_MAX_CHUNKS }: NearbyStreamOptions = {},
  ): AsyncGenerator<NearbyDoc> {
    const seen = new Set<string>();
    let cursor = params.nextChunk;

    for (let chunk = 0; chunk < maxChunks; chunk += 1) {
      const result = await search(cursor === undefined ? params : { ...params, nextChunk: cursor });
      if (result.docs.length === 0) return;

      for (const doc of result.docs) {
        if (seen.has(doc.token)) continue;
        seen.add(doc.token);
        yield doc;
      }

      if (result.nextChunk === undefined) return;
      cursor = result.nextChunk;
    }
  }

  return {
    search: withParams(withRows(search, ((r: NearbyResult) => r.docs) as RowsOf), NearbyParamsSchema),
    stream: withParams(stream, NearbyParamsSchema),
    all: withParams(
      (params: NearbyParams, options?: NearbyStreamOptions) => collect(stream(params, options)),
      NearbyParamsSchema,
    ),
  };
};
