import { NearbyPath, Service } from '../core/enums/index.js';
import { parseParams } from '../core/params.js';
import { withParams, withRows } from '../core/describable.js';
import { NearbyParamsSchema } from '../params/nearby.js';
import { NearbyResultSchema } from '../schemas/nearby.js';
import { collect } from './paginate.js';
const DEFAULT_MAX_CHUNKS = 10;
export const createNearbyResource = (gateway) => {
    const search = (params) => gateway.getData(`/${Service.Carousels}${NearbyPath.NearMe}`, parseParams('nearby.search', NearbyParamsSchema, params), NearbyResultSchema);
    async function* stream(params, { maxChunks = DEFAULT_MAX_CHUNKS } = {}) {
        const seen = new Set();
        let cursor = params.nextChunk;
        for (let chunk = 0; chunk < maxChunks; chunk += 1) {
            const result = await search(cursor === undefined ? params : { ...params, nextChunk: cursor });
            if (result.docs.length === 0)
                return;
            for (const doc of result.docs) {
                if (seen.has(doc.token))
                    continue;
                seen.add(doc.token);
                yield doc;
            }
            if (result.nextChunk === undefined)
                return;
            cursor = result.nextChunk;
        }
    }
    return {
        search: withParams(withRows(search, ((r) => r.docs)), NearbyParamsSchema),
        stream: withParams(stream, NearbyParamsSchema),
        all: withParams((params, options) => collect(stream(params, options)), NearbyParamsSchema),
    };
};
