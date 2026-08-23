import { createRateLimiter } from '../rate-limiter.js';
import { HttpHeader, HttpMethod, MediaType } from '../enums/http.js';
const DEFAULT_ORIGIN_URL = 'https://www.yad2.co.il/';
const WAIT_UNTIL = 'domcontentloaded';
const CREDENTIALS = 'include';
const DEFAULT_MIN_INTERVAL_MS = 700;
const DEFAULT_SETTLE_MS = 4000;
const evaluate = async (port, code) => {
    const response = await fetch(`http://127.0.0.1:${port}/script/execute-playwright`, {
        method: HttpMethod.Post,
        headers: { [HttpHeader.ContentType]: MediaType.Json },
        body: JSON.stringify({ code }),
    });
    const payload = (await response.json());
    if (!payload.success)
        throw new Error(payload.error ?? 'playwright-server call failed');
    return payload.result;
};
const openOriginCode = (originUrl, settleMs) => `
  await page.goto(${JSON.stringify(originUrl)}, { waitUntil: ${JSON.stringify(WAIT_UNTIL)}, timeout: 45000 });
  await page.waitForTimeout(${settleMs});
  try { await page.click('button:has-text("הבנתי")', { timeout: 3000 }); } catch {}
  return page.url();
`;
const fetchInPageCode = (url) => `
  return page.evaluate(async (target) => {
    const response = await fetch(target, { credentials: ${JSON.stringify(CREDENTIALS)} });
    return { status: response.status, body: await response.text() };
  }, ${JSON.stringify(url)});
`;
export const createBrowserTransport = (options) => {
    const originUrl = options.originUrl ?? DEFAULT_ORIGIN_URL;
    const settleMs = options.settleMs ?? DEFAULT_SETTLE_MS;
    const schedule = createRateLimiter({
        minIntervalMs: options.minIntervalMs ?? DEFAULT_MIN_INTERVAL_MS,
    });
    let session = null;
    const openOrigin = () => {
        session ??= evaluate(options.port, openOriginCode(originUrl, settleMs));
        return session;
    };
    const attempt = async (url) => {
        await openOrigin();
        return (await evaluate(options.port, fetchInPageCode(url)));
    };
    const send = async (url) => {
        try {
            return await attempt(url);
        }
        catch {
            session = null;
            return attempt(url);
        }
    };
    return { request: (url) => schedule(() => send(url)) };
};
