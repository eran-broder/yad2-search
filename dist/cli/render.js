const isAsyncIterable = (value) => typeof value === 'object' && value !== null && Symbol.asyncIterator in value;
export const resolve = async (value) => {
    const awaited = await value;
    if (!isAsyncIterable(awaited))
        return awaited;
    const items = [];
    for await (const item of awaited)
        items.push(item);
    return items;
};
const pick = (value, fields) => {
    if (Array.isArray(value))
        return value.map((item) => pick(item, fields));
    if (typeof value !== 'object' || value === null)
        return value;
    const source = value;
    return Object.fromEntries(fields.map((field) => [field, path(source, field)]));
};
const path = (source, dotted) => dotted.split('.').reduce((acc, key) => {
    if (typeof acc !== 'object' || acc === null)
        return undefined;
    return acc[key];
}, source);
export const render = (value, fields) => JSON.stringify(fields ? pick(value, fields.split(',')) : value, null, 2);
