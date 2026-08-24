import { createGateway, GATEWAY_BASE_URL } from './core/gateway.js';
import { createFetchTransport } from './core/transports/fetch-transport.js';
import { createBrowserTransport } from './core/transports/browser-transport.js';
import { createFallbackTransport } from './core/transports/fallback-transport.js';
import { createCurlTransport } from './core/transports/curl-transport.js';
import { createRetryTransport } from './core/transports/retry-transport.js';
import { createVehiclesResource } from './resources/vehicles.js';
import { createRealestateResource } from './resources/realestate.js';
import { createMarketResource } from './resources/market.js';
import { createProjectsResource } from './resources/projects.js';
import { createAddressResource } from './resources/address.js';
import { createOptionsResource } from './resources/options.js';
import { createCatalogResource } from './resources/catalog.js';
import { createItemsResource } from './resources/items.js';
import { createImagesResource } from './resources/images.js';
import { createLabelsResource } from './resources/labels.js';
import { createNeighborhoodResource } from './resources/neighborhood.js';
import { createNearbyResource } from './resources/nearby.js';
import { disposeSharedServer } from './core/managed-server.js';
const buildResources = (gateway) => ({
    /**
     * Release the auto-spawned browser server, if one was started. Call it before the
     * process ends — a bare `process.exit()` with a live Chromium session aborts the
     * runtime on Windows. `await using` handles this for you.
     */
    dispose: disposeSharedServer,
    // `await using` support, but only where the runtime has the symbol (Node 20+).
    // A computed `undefined` key on older Node would create a stray "undefined" property.
    ...(typeof Symbol.asyncDispose === 'symbol' ? { [Symbol.asyncDispose]: disposeSharedServer } : {}),
    vehicles: createVehiclesResource(gateway),
    realestate: createRealestateResource(gateway),
    market: createMarketResource(gateway),
    projects: createProjectsResource(gateway),
    address: createAddressResource(gateway),
    options: createOptionsResource(gateway),
    catalog: createCatalogResource(gateway),
    items: createItemsResource(gateway),
    images: createImagesResource(),
    labels: createLabelsResource(gateway),
    neighborhood: createNeighborhoodResource(gateway),
    nearby: createNearbyResource(gateway),
});
export const createYad2Client = (options = {}) => {
    const transport = options.transport ?? createFetchTransport();
    const gateway = createGateway({ transport, baseUrl: options.baseUrl ?? GATEWAY_BASE_URL });
    return buildResources(gateway);
};
export const createHttpClient = (options = {}) => createYad2Client({ transport: createFetchTransport(options) });
export const createCurlClient = (options = {}) => createYad2Client({ transport: createCurlTransport(options) });
export const createNodeClient = ({ fetch = {}, curl = {} } = {}) => createYad2Client({
    transport: createFallbackTransport(createFetchTransport(fetch), createCurlTransport(curl)),
});
export const createBrowserClient = (options = {}) => createYad2Client({ transport: createBrowserTransport(options) });
export const createResilientClient = ({ browser = {}, http = {}, curl = {}, retry = {}, } = {}) => createYad2Client({
    transport: createFallbackTransport(createRetryTransport(createFetchTransport(http), retry), createFallbackTransport(createCurlTransport(curl), createBrowserTransport(browser))),
});
