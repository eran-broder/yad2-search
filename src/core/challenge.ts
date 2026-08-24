import { ChallengeMarker } from './enums/challenge.js';

const MARKERS: readonly string[] = Object.values(ChallengeMarker);
const JSON_OPENERS = ['{', '['];

/**
 * The gateway answers with JSON; Radware answers with an HTML interstitial. Checking the
 * markers alone means a listing that merely *mentions* one — "Radware Alteon load
 * balancer" is a real thing people sell — reads as a block, raising Yad2BlockedError on a
 * perfectly good response and burning the browser fallback on every page of that search.
 * A body that opens as JSON is a real answer whatever words appear inside it.
 */
export const isChallenge = (body: string): boolean => {
  const trimmed = body.trimStart();
  if (JSON_OPENERS.some((opener) => trimmed.startsWith(opener))) return false;
  return MARKERS.some((marker) => body.includes(marker));
};
