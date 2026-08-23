const isPlainObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
export const discover = (root, prefix = '') => Object.entries(root).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'function') {
        return [{ path, invoke: value.bind(root), target: value }];
    }
    return isPlainObject(value) ? discover(value, path) : [];
});
export const findCallable = (callables, path) => callables.find((callable) => callable.path === path);
