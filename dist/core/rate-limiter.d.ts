export interface RateLimiterOptions {
    readonly minIntervalMs: number;
}
export declare const createRateLimiter: ({ minIntervalMs }: RateLimiterOptions) => <T>(task: () => Promise<T>) => Promise<T>;
