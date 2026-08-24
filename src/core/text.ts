const SEPARATORS = /[,\-–]/g;
// Dropped rather than spaced: Yad2 writes "Be'er Sheva" and מצפה אבי״ב, but people type
// "Beer Sheva". Turning the mark into a space would split the word instead of closing it.
const MARKS = /['"״׳`]/g;
const WHITESPACE = /\s+/g;

/** Fold the punctuation and spacing differences that separate a typed name from Yad2's. */
export const normalizeName = (text: string): string =>
  text.replace(MARKS, '').replace(SEPARATORS, ' ').replace(WHITESPACE, ' ').trim().toLowerCase();

export interface NamedEntry {
  readonly heb?: string | undefined;
  readonly eng?: string | undefined;
}

/**
 * Resolve a typed name against a list, refusing to guess. An exact match wins; a prefix
 * match only counts when exactly one candidate has it, because "Land" matching both
 * "Land Rover" and "Landwind" is a coin toss, not an answer.
 */
export const findByName = <T extends NamedEntry>(entries: readonly T[], name: string): T | undefined => {
  const wanted = normalizeName(name);
  if (wanted.length === 0) return undefined;

  const namesOf = (entry: T): string[] =>
    [entry.heb, entry.eng].filter((value): value is string => Boolean(value)).map(normalizeName);

  const exact = entries.filter((entry) => namesOf(entry).includes(wanted));
  if (exact.length === 1) return exact[0];
  if (exact.length > 1) return undefined;

  const prefixed = entries.filter((entry) => namesOf(entry).some((value) => value.startsWith(wanted)));
  return prefixed.length === 1 ? prefixed[0] : undefined;
};
