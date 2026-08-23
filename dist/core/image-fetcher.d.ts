export interface ImageFile {
    readonly url: string;
    readonly contentType: string;
    readonly bytes: Uint8Array;
}
export interface ImageFetcherOptions {
    readonly minIntervalMs?: number;
    readonly timeoutMs?: number;
    readonly userAgent?: string;
}
export declare const createImageFetcher: (options?: ImageFetcherOptions) => (url: string) => Promise<ImageFile>;
