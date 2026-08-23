import { writeFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { createImageFetcher, type ImageFetcherOptions, type ImageFile } from '../core/image-fetcher.js';
import type { MediaBearing } from '../schemas/media.js';

const unique = (urls: readonly string[]): string[] => [...new Set(urls.filter(Boolean))];

export const coverOf = (item: MediaBearing): string | undefined =>
  item.metaData?.coverImage ?? item.images?.[0];

export const urlsOf = (item: MediaBearing): string[] =>
  unique([...(item.metaData?.images ?? []), ...(item.images ?? []), ...(coverOf(item) ? [coverOf(item) as string] : [])]);

export const fileNameOf = (url: string): string => basename(new URL(url).pathname);

export const createImagesResource = (options: ImageFetcherOptions = {}) => {
  const fetchImage = createImageFetcher(options);

  const fetchMany = (urls: readonly string[]): Promise<ImageFile[]> =>
    Promise.all(urls.map(fetchImage));

  const save = async (url: string, path: string): Promise<string> => {
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
    fetchItem: (item: MediaBearing) => fetchMany(urlsOf(item)),
    save,
  };
};
