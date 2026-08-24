import { createRateLimiter } from './rate-limiter.js';
import { Yad2RequestError } from './errors.js';
import { HttpHeader, MediaType } from './enums/http.js';
import { USER_AGENT } from './identity.js';

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

const DEFAULT_MIN_INTERVAL_MS = 250;
const DEFAULT_TIMEOUT_MS = 20000;

export const createImageFetcher = (options: ImageFetcherOptions = {}) => {
  const schedule = createRateLimiter({
    minIntervalMs: options.minIntervalMs ?? DEFAULT_MIN_INTERVAL_MS,
  });
  const headers = { [HttpHeader.UserAgent]: options.userAgent ?? USER_AGENT };
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;

  const download = async (url: string): Promise<ImageFile> => {
    const response = await fetch(url, { headers, signal: AbortSignal.timeout(timeoutMs) });
    if (!response.ok) throw new Yad2RequestError(response.status, url, response.statusText);
    return {
      url,
      contentType: response.headers.get(HttpHeader.ContentType) ?? MediaType.OctetStream,
      bytes: new Uint8Array(await response.arrayBuffer()),
    };
  };

  return (url: string): Promise<ImageFile> => schedule(() => download(url));
};
