export interface Page<T> {
    readonly items: readonly T[];
    readonly totalPages: number | undefined;
}
export type PageFetcher<T> = (page: number) => Promise<Page<T>>;
export interface PaginateOptions {
    readonly startPage?: number;
    readonly maxPages?: number;
}
interface InternalOptions<T> extends PaginateOptions {
    readonly key?: (item: T) => string;
}
export declare function paginate<T>(fetchPage: PageFetcher<T>, { startPage, maxPages, key }?: InternalOptions<T>): AsyncGenerator<T>;
export declare const collect: <T>(source: AsyncGenerator<T>) => Promise<T[]>;
export {};
