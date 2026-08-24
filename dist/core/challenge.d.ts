/**
 * The gateway answers with JSON; Radware answers with an HTML interstitial. Checking the
 * markers alone means a listing that merely *mentions* one — "Radware Alteon load
 * balancer" is a real thing people sell — reads as a block, raising Yad2BlockedError on a
 * perfectly good response and burning the browser fallback on every page of that search.
 * A body that opens as JSON is a real answer whatever words appear inside it.
 */
export declare const isChallenge: (body: string) => boolean;
