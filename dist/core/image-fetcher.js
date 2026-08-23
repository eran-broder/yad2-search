import { createRateLimiter } from './rate-limiter.js';
import { Yad2RequestError } from './errors.js';
import { HttpHeader, MediaType } from './enums/http.js';
const DEFAULT_MIN_INTERVAL_MS = 250;
const DEFAULT_TIMEOUT_MS = 20000;
const DEFAULT_USER_AGENT = 'yad2-sdk/0.1 (+node)';
export const createImageFetcher = (options = {}) => {
    const schedule = createRateLimiter({
        minIntervalMs: options.minIntervalMs ?? DEFAULT_MIN_INTERVAL_MS,
    });
    const headers = { [HttpHeader.UserAgent]: options.userAgent ?? DEFAULT_USER_AGENT };
    const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    const download = async (url) => {
        const response = await fetch(url, { headers, signal: AbortSignal.timeout(timeoutMs) });
        if (!response.ok)
            throw new Yad2RequestError(response.status, url, response.statusText);
        return {
            url,
            contentType: response.headers.get(HttpHeader.ContentType) ?? MediaType.OctetStream,
            bytes: new Uint8Array(await response.arrayBuffer()),
        };
    };
    return (url) => schedule(() => download(url));
};
