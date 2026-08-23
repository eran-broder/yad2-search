import type { ZodType } from 'zod';
import { type PaginateOptions, type Page } from './paginate.js';
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
export declare const createFeed: <T, P extends object, R>(search: Search<P, R>, toPage: ToPage<T, R>, key: KeyOf<T>, schema?: ZodType) => FeedResource<T, P, R>;
