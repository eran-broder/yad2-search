import { writeFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { createImageFetcher } from '../core/image-fetcher.js';
const unique = (urls) => [...new Set(urls.filter(Boolean))];
export const coverOf = (item) => item.metaData?.coverImage ?? item.images?.[0];
export const urlsOf = (item) => unique([...(item.metaData?.images ?? []), ...(item.images ?? []), ...(coverOf(item) ? [coverOf(item)] : [])]);
export const fileNameOf = (url) => basename(new URL(url).pathname);
export const createImagesResource = (options = {}) => {
    const fetchImage = createImageFetcher(options);
    const fetchMany = (urls) => Promise.all(urls.map(fetchImage));
    const save = async (url, path) => {
        const { bytes } = await fetchImage(url);
        await writeFile(path, bytes);
        return path;
    };
    return {
        cover: coverOf,
        urls: urlsOf,
        fileName: fileNameOf,
        fetch: fetchImage,
        fetchMany,
        fetchItem: (item) => fetchMany(urlsOf(item)),
        save,
    };
};
