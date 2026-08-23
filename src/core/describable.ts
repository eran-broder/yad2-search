import type { ZodType } from 'zod';

const PARAMS = Symbol.for('yad2.params');

export type Describable<F> = F & { readonly [PARAMS]?: ZodType };

export const withParams = <F extends (...args: never[]) => unknown>(
  fn: F,
  schema: ZodType,
): Describable<F> => Object.defineProperty(fn, PARAMS, { value: schema, enumerable: false }) as Describable<F>;

export const paramsOf = (fn: unknown): ZodType | undefined =>
  typeof fn === 'function' ? (fn as Describable<() => unknown>)[PARAMS] : undefined;
