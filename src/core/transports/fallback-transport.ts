import type { Transport, TransportResponse } from '../transport.js';
import { isChallenge } from '../challenge.js';

export const createFallbackTransport = (
  primary: Transport,
  secondary: Transport,
): Transport => ({
  request: async (url: string): Promise<TransportResponse> => {
    const first = await primary.request(url).catch(() => null);
    if (first && !isChallenge(first.body)) return first;
    return secondary.request(url);
  },
});
