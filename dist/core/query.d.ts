import { type Range } from './range.js';
export type QueryValue = string | number | boolean | Range | readonly (string | number)[];
export type QueryParams = Readonly<Record<string, QueryValue | undefined>>;
export declare const toQueryString: (params: QueryParams) => string;
export declare const buildUrl: (baseUrl: string, path: string, params: QueryParams) => string;
