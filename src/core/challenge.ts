import { ChallengeMarker } from './enums/challenge.js';

const MARKERS: readonly string[] = Object.values(ChallengeMarker);

export const isChallenge = (body: string): boolean =>
  MARKERS.some((marker) => body.includes(marker));
