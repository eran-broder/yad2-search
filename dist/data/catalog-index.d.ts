import type { VehicleCategory } from '../core/enums/index.js';
/**
 * The vehicle catalog, baked at build time by `tools/bake-catalog.mjs`.
 *
 * Every vehicle search needs a manufacturer id, and learning one meant a request to
 * `/vehicles-{category}-catalog` — the endpoint bot protection challenges first, so the
 * lookup you need to start a search is the one most likely to be refused.
 */
export interface CatalogEntry {
    readonly id: number;
    readonly heb?: string | undefined;
    readonly eng?: string | undefined;
}
export interface CatalogIndex {
    readonly manufacturers: Partial<Record<VehicleCategory, readonly CatalogEntry[]>>;
    readonly specialTypes: Partial<Record<VehicleCategory, readonly CatalogEntry[]>>;
    /** Keyed by `category:manufacturerId`. Only populated when baked with `--models`. */
    readonly models: Readonly<Record<string, readonly CatalogEntry[]>>;
}
export declare const catalogIndex: CatalogIndex;
