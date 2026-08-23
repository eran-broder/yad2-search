import { paginate, collect } from './paginate.js';
import { withParams } from '../core/describable.js';
export const createFeed = (search, toPage, key, schema) => {
    const loadPage = async (params, page) => toPage(await search({ ...params, page }));
    const stream = (params = {}, options = {}) => paginate((page) => loadPage(params, page), { ...options, key });
    const all = (params, options) => collect(stream(params, options));
    return schema
        ? { search: withParams(search, schema), stream: withParams(stream, schema), all: withParams(all, schema) }
        : { search, stream, all };
};
