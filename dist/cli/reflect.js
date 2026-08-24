import { ClientLifecycle } from '../core/enums/http.js';
const isPlainObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
/** Lifecycle helpers on the client that are not part of the searchable surface. */
const HIDDEN = new Set(Object.values(ClientLifecycle));
export const discover = (root, prefix = '') => Object.entries(root).flatMap(([key, value]) => {
    if (!prefix && HIDDEN.has(key))
        return [];
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'function') {
        return [{ path, invoke: value.bind(root), target: value }];
    }
    return isPlainObject(value) ? discover(value, path) : [];
});
export const findCallable = (callables, path) => callables.find((callable) => callable.path === path);
