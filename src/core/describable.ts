import type { ZodType } from 'zod';

const PARAMS = Symbol.for('yad2.params');

export type Describable<F> = F & { readonly [PARAMS]?: ZodType };

export const withParams = <F extends (...args: never[]) => unknown>(
  fn: F,
  schema: ZodType,
): Describable<F> => Object.defineProperty(fn, PARAMS, { value: schema, enumerable: false }) as Describable<F>;

export const paramsOf = (fn: unknown): ZodType | undefined =>
  typeof fn === 'function' ? (fn as Describable<() => unknown>)[PARAMS] : undefined;

const ROWS = Symbol.for('yad2.rows');

export type RowsOf = (result: never) => readonly unknown[];

/**
 * Teach a method how to reduce its own result to a list of records. `search` returns a
 * raw bucketed feed; column output (`--fields`) wants the listings inside it, and each
 * vertical already knows which buckets those are.
 */
export const withRows = <F extends (...args: never[]) => unknown>(fn: F, rows: RowsOf): F =>
  Object.defineProperty(fn, ROWS, { value: rows, enumerable: false }) as F;

export const rowsOf = (fn: unknown): RowsOf | undefined =>
  typeof fn === 'function' ? (fn as { [ROWS]?: RowsOf })[ROWS] : undefined;
