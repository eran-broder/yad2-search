export {
  createYad2Client,
  createHttpClient,
  createCurlClient,
  createNodeClient,
  createBrowserClient,
  createResilientClient,
  type Yad2Client,
  type Yad2ClientOptions,
  type NodeClientOptions,
  type ResilientClientOptions,
} from './client.js';

export * from './core/enums/index.js';
export * from './core/errors.js';
export { sharedServer, Yad2BrowserUnavailableError, type ManagedServer } from './core/managed-server.js';
export * from './core/range.js';
export * from './core/transport.js';

export { createFetchTransport, type FetchTransportOptions } from './core/transports/fetch-transport.js';
export { createCurlTransport, type CurlTransportOptions } from './core/transports/curl-transport.js';
export { createBrowserTransport, type BrowserTransportOptions } from './core/transports/browser-transport.js';
export { createFallbackTransport } from './core/transports/fallback-transport.js';
export { createRetryTransport, type RetryTransportOptions } from './core/transports/retry-transport.js';
export type { ImageFile, ImageFetcherOptions } from './core/image-fetcher.js';

export * from './schemas/common.js';
export * from './schemas/media.js';
export * from './schemas/vehicles.js';
export * from './schemas/realestate.js';
export * from './schemas/market.js';
export * from './schemas/projects/index.js';
export * from './schemas/address.js';
export * from './schemas/catalog.js';
export * from './schemas/options.js';
export * from './schemas/labels.js';
export * from './schemas/neighborhood.js';
export * from './schemas/nearby.js';
export * from './schemas/items/index.js';

export * from './params/vehicles.js';
export * from './params/realestate.js';
export * from './params/market.js';
export * from './params/projects.js';
export * from './params/nearby.js';

export { flatten } from './resources/realestate.js';
export { coverOf, urlsOf, fileNameOf } from './resources/images.js';
export { paginate, collect, type PaginateOptions } from './resources/paginate.js';
export type { SearchLocation } from './resources/address.js';
export type { MarketResult } from './resources/market.js';
export type { CatalogScope } from './resources/catalog.js';
