const isLastPage = (current, totalPages) => totalPages !== undefined && current >= totalPages;
export async function* paginate(fetchPage, { startPage = 1, maxPages = Infinity, key } = {}) {
    const seen = new Set();
    let current = startPage;
    let visited = 0;
    while (visited < maxPages) {
        const { items, totalPages } = await fetchPage(current);
        if (items.length === 0)
            return;
        for (const item of items) {
            const id = key?.(item);
            if (id !== undefined && seen.has(id))
                continue;
            if (id !== undefined)
                seen.add(id);
            yield item;
        }
        visited += 1;
        if (isLastPage(current, totalPages))
            return;
        current += 1;
    }
}
export const collect = async (source) => {
    const out = [];
    for await (const item of source)
        out.push(item);
    return out;
};
