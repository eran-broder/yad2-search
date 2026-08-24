import { Service, Yad1Path } from '../core/enums/index.js';
import { DeveloperFeedSchema, DeveloperListSchema, ListingListSchema, ProjectFeedSchema, ProjectListSchema, } from '../schemas/projects/index.js';
import { DeveloperFeedParamsSchema, DeveloperListParamsSchema, ProjectListParamsSchema, ProjectListingParamsSchema, ProjectSearchParamsSchema, } from '../params/projects.js';
import { createFeed } from './paged.js';
import { parseParams } from '../core/params.js';
import { withParams } from '../core/describable.js';
const PAGE_SIZE = 18;
const toPage = (feed) => ({
    items: feed.projects,
    totalPages: feed.total === undefined ? undefined : Math.ceil(feed.total / PAGE_SIZE),
});
const tokenOf = (project) => project.token;
export const createProjectsResource = (gateway) => {
    const path = (suffix) => `/${Service.Yad1}${suffix}`;
    const query = (params) => parseParams('projects.search', ProjectSearchParamsSchema, params);
    const feed = createFeed((params = {}) => gateway.getData(path(Yad1Path.Feed), query(params), ProjectFeedSchema), toPage, tokenOf, ProjectSearchParamsSchema);
    const list = (params = {}) => gateway
        .getData(path(Yad1Path.Projects), parseParams('projects.list', ProjectListParamsSchema, params), ProjectListSchema)
        .then((r) => r.projects);
    const map = (params = {}) => gateway
        .getData(path(Yad1Path.Map), parseParams('projects.list', ProjectListParamsSchema, params), ProjectListSchema)
        .then((r) => r.projects);
    const listings = (params = {}) => gateway
        .getData(path(Yad1Path.Listings), parseParams('projects.listings', ProjectListingParamsSchema, params), ListingListSchema)
        .then((r) => r.listings);
    const developers = (params = {}) => gateway
        .getData(path(Yad1Path.Developers), parseParams('projects.developers', DeveloperListParamsSchema, params), DeveloperListSchema)
        .then((r) => r.developers);
    const developerFeed = (params = {}) => gateway.getData(path(Yad1Path.DeveloperFeed), parseParams('projects.developerFeed', DeveloperFeedParamsSchema, params), DeveloperFeedSchema);
    const autocomplete = (phrase) => gateway
        .getData(path(Yad1Path.ProjectsAutocomplete), { phrase }, ProjectListSchema)
        .then((r) => r.projects);
    return {
        ...feed,
        list: withParams(list, ProjectListParamsSchema),
        map: withParams(map, ProjectListParamsSchema),
        listings: withParams(listings, ProjectListingParamsSchema),
        developers: withParams(developers, DeveloperListParamsSchema),
        developerFeed: withParams(developerFeed, DeveloperFeedParamsSchema),
        autocomplete,
    };
};
