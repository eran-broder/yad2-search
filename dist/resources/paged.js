import { paginate, collect } from './paginate.js';
import { withParams, withRows } from '../core/describable.js';
export const createFeed = (search, toPage, key, schema) => {
    const loadPage = async (params, page) => toPage(await search({ ...params, page }));
    const stream = (params = {}, options = {}) => paginate((page) => loadPage(params, page), { ...options, key });
    const all = (params, options) => collect(stream(params, options));
    // `search` hands back the raw feed; record the way into its listings so column
    // output does not have to guess which buckets hold ads.
    const described = withRows(search, ((feed) => toPage(feed).items));
    return schema
        ? {
            search: withParams(described, schema),
            stream: withParams(stream, schema),
            all: withParams(all, schema),
        }
        : { search: described, stream, all };
};
