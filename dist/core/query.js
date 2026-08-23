import { RangeSchema, serializeRange } from './range.js';
const isRange = (value) => RangeSchema.safeParse(value).success;
const serializeValue = (value) => {
    if (Array.isArray(value))
        return value.join(',');
    if (typeof value === 'boolean')
        return value ? '1' : '0';
    if (isRange(value))
        return serializeRange(value);
    return String(value);
};
const isPresent = (entry) => entry[1] !== undefined;
export const toQueryString = (params) => {
    const search = new URLSearchParams();
    Object.entries(params)
        .filter(isPresent)
        .forEach(([key, value]) => search.set(key, serializeValue(value)));
    return search.toString();
};
export const buildUrl = (baseUrl, path, params) => {
    const query = toQueryString(params);
    return query ? `${baseUrl}${path}?${query}` : `${baseUrl}${path}`;
};
