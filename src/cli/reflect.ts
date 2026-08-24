import { ClientLifecycle } from '../core/enums/http.js';

export interface Callable {
  readonly path: string;
  readonly invoke: (...args: unknown[]) => unknown;
  readonly target: unknown;
}

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

/** Lifecycle helpers on the client that are not part of the searchable surface. */
const HIDDEN: ReadonlySet<string> = new Set(Object.values(ClientLifecycle));

export const discover = (root: Record<string, unknown>, prefix = ''): Callable[] =>
  Object.entries(root).flatMap(([key, value]) => {
    if (!prefix && HIDDEN.has(key)) return [];
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'function') {
      return [{ path, invoke: value.bind(root) as Callable['invoke'], target: value }];
    }
    return isPlainObject(value) ? discover(value, path) : [];
  });

export const findCallable = (callables: readonly Callable[], path: string): Callable | undefined =>
  callables.find((callable) => callable.path === path);
