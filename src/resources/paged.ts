import type { ZodType } from 'zod';
import { paginate, collect, type PaginateOptions, type Page } from './paginate.js';
import { withParams, withRows, type RowsOf } from '../core/describable.js';

export interface PagedResource<T, P> {
  stream(params?: P, options?: PaginateOptions): AsyncGenerator<T>;
  all(params?: P, options?: PaginateOptions): Promise<T[]>;
}

export interface FeedResource<T, P, R> extends PagedResource<T, P> {
  search(params?: P): Promise<R>;
}

export type Search<P, R> = (params?: P) => Promise<R>;
export type ToPage<T, R> = (result: R) => Page<T>;
export type KeyOf<T> = (item: T) => string;

export const createFeed = <T, P extends object, R>(
  search: Search<P, R>,
  toPage: ToPage<T, R>,
  key: KeyOf<T>,
  schema?: ZodType,
): FeedResource<T, P, R> => {
  const loadPage = async (params: P, page: number): Promise<Page<T>> =>
    toPage(await search({ ...params, page }));

  const stream = (params: P = {} as P, options: PaginateOptions = {}): AsyncGenerator<T> =>
    paginate((page) => loadPage(params, page), { ...options, key });

  const all = (params?: P, options?: PaginateOptions) => collect(stream(params, options));

  // `search` hands back the raw feed; record the way into its listings so column
  // output does not have to guess which buckets hold ads.
  const described = withRows(search, ((feed: R) => toPage(feed).items) as RowsOf);

  return schema
    ? {
        search: withParams(described, schema),
        stream: withParams(stream, schema),
        all: withParams(all, schema),
      }
    : { search: described, stream, all };
};
