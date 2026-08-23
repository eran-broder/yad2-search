import { ChallengeMarker } from './enums/challenge.js';
const MARKERS = Object.values(ChallengeMarker);
export const isChallenge = (body) => MARKERS.some((marker) => body.includes(marker));
