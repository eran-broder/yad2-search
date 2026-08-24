import { createGateway, GATEWAY_BASE_URL, type Gateway } from './core/gateway.js';
import type { Transport } from './core/transport.js';
import { createFetchTransport, type FetchTransportOptions } from './core/transports/fetch-transport.js';
import { createBrowserTransport, type BrowserTransportOptions } from './core/transports/browser-transport.js';
import { createFallbackTransport } from './core/transports/fallback-transport.js';
import { createCurlTransport, type CurlTransportOptions } from './core/transports/curl-transport.js';
import { createRetryTransport, type RetryTransportOptions } from './core/transports/retry-transport.js';
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

export interface Yad2ClientOptions {
  readonly transport?: Transport;
  readonly baseUrl?: string;
}

const buildResources = (gateway: Gateway) => ({
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

export const createYad2Client = (options: Yad2ClientOptions = {}) => {
  const transport = options.transport ?? createFetchTransport();
  const gateway = createGateway({ transport, baseUrl: options.baseUrl ?? GATEWAY_BASE_URL });
  return buildResources(gateway);
};

export const createHttpClient = (options: FetchTransportOptions = {}) =>
  createYad2Client({ transport: createFetchTransport(options) });

export const createCurlClient = (options: CurlTransportOptions = {}) =>
  createYad2Client({ transport: createCurlTransport(options) });

export interface NodeClientOptions {
  readonly fetch?: FetchTransportOptions;
  readonly curl?: CurlTransportOptions;
}

export const createNodeClient = ({ fetch = {}, curl = {} }: NodeClientOptions = {}) =>
  createYad2Client({
    transport: createFallbackTransport(createFetchTransport(fetch), createCurlTransport(curl)),
  });

export const createBrowserClient = (options: BrowserTransportOptions = {}) =>
  createYad2Client({ transport: createBrowserTransport(options) });

export interface ResilientClientOptions {
  readonly browser?: BrowserTransportOptions;
  readonly http?: FetchTransportOptions;
  readonly curl?: CurlTransportOptions;
  readonly retry?: RetryTransportOptions;
}

export const createResilientClient = ({
  browser = {},
  http = {},
  curl = {},
  retry = {},
}: ResilientClientOptions = {}) =>
  createYad2Client({
    transport: createFallbackTransport(
      createRetryTransport(createFetchTransport(http), retry),
      createFallbackTransport(createCurlTransport(curl), createBrowserTransport(browser)),
    ),
  });

export type Yad2Client = ReturnType<typeof createYad2Client>;
