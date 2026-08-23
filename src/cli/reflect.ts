export interface Callable {
  readonly path: string;
  readonly invoke: (...args: unknown[]) => unknown;
  readonly target: unknown;
}

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const discover = (root: Record<string, unknown>, prefix = ''): Callable[] =>
  Object.entries(root).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'function') {
      return [{ path, invoke: value.bind(root) as Callable['invoke'], target: value }];
    }
    return isPlainObject(value) ? discover(value, path) : [];
  });

export const findCallable = (callables: readonly Callable[], path: string): Callable | undefined =>
  callables.find((callable) => callable.path === path);
