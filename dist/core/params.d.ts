import { z } from 'zod';
import type { RealestateDeal, VehicleCategory } from './enums/index.js';
export type ParamContext = `vehicles.${VehicleCategory}` | `realestate.${RealestateDeal}` | 'realestate.map' | 'market.search' | 'market.collection' | 'projects.search' | 'projects.list' | 'projects.listings' | 'projects.developers' | 'projects.developerFeed' | 'nearby.search' | 'catalog' | 'labels';
export declare const parseParams: <S extends z.ZodTypeAny>(context: ParamContext, schema: S, value: unknown) => z.infer<S>;
/**
 * Validate a positional enum argument. Only the params object goes through Zod, so a bad
 * positional value otherwise either builds a nonsense URL (`/vehicles-lorries-catalog`,
 * which comes back as a bot challenge) or gets filtered out client-side and returns an
 * empty list indistinguishable from "no results".
 */
export declare const parseEnumArg: <T extends string>(context: ParamContext, name: string, allowed: Record<string, T>, value: unknown) => T;
