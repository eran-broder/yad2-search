import { createRateLimiter } from '../rate-limiter.js';
import { HttpHeader, MediaType } from '../enums/http.js';
import { USER_AGENT } from '../identity.js';
const DEFAULT_MIN_INTERVAL_MS = 3000;
const DEFAULT_TIMEOUT_MS = 20000;
export const createFetchTransport = (options = {}) => {
    const userAgent = options.userAgent ?? USER_AGENT;
    const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    const schedule = createRateLimiter({
        minIntervalMs: options.minIntervalMs ?? DEFAULT_MIN_INTERVAL_MS,
    });
    const headers = { [HttpHeader.UserAgent]: userAgent, [HttpHeader.Accept]: MediaType.Json };
    const send = async (url) => {
        const response = await fetch(url, { headers, signal: AbortSignal.timeout(timeoutMs) });
        return { status: response.status, body: await response.text() };
    };
    return { request: (url) => schedule(() => send(url)) };
};
