import { type ImageFetcherOptions, type ImageFile } from '../core/image-fetcher.js';
import type { MediaBearing } from '../schemas/media.js';
export declare const coverOf: (item: MediaBearing) => string | undefined;
export declare const urlsOf: (item: MediaBearing) => string[];
export declare const fileNameOf: (url: string) => string;
export declare const createImagesResource: (options?: ImageFetcherOptions) => {
    cover: (item: MediaBearing) => string | undefined;
    urls: (item: MediaBearing) => string[];
    fileName: (url: string) => string;
    fetch: (url: string) => Promise<ImageFile>;
    fetchMany: (urls: readonly string[]) => Promise<ImageFile[]>;
    fetchItem: (item: MediaBearing) => Promise<ImageFile[]>;
    save: (url: string, path: string) => Promise<string>;
};
