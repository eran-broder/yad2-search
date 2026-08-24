/** Fold the punctuation and spacing differences that separate a typed name from Yad2's. */
export declare const normalizeName: (text: string) => string;
export interface NamedEntry {
    readonly heb?: string | undefined;
    readonly eng?: string | undefined;
}
/**
 * Resolve a typed name against a list, refusing to guess. An exact match wins; a prefix
 * match only counts when exactly one candidate has it, because "Land" matching both
 * "Land Rover" and "Landwind" is a coin toss, not an answer.
 */
export declare const findByName: <T extends NamedEntry>(entries: readonly T[], name: string) => T | undefined;
