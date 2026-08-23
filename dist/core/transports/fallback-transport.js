import { isChallenge } from '../challenge.js';
export const createFallbackTransport = (primary, secondary) => ({
    request: async (url) => {
        const first = await primary.request(url).catch(() => null);
        if (first && !isChallenge(first.body))
            return first;
        return secondary.request(url);
    },
});
