const DEFAULT_RETRIES = 2;
const DEFAULT_BASE_DELAY_MS = 500;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const createRetryTransport = (inner, { retries = DEFAULT_RETRIES, baseDelayMs = DEFAULT_BASE_DELAY_MS } = {}) => ({
    request: async (url) => {
        let lastError;
        for (let attempt = 0; attempt <= retries; attempt += 1) {
            try {
                return await inner.request(url);
            }
            catch (error) {
                lastError = error;
                if (attempt < retries)
                    await delay(baseDelayMs * 2 ** attempt);
            }
        }
        throw lastError;
    },
});
