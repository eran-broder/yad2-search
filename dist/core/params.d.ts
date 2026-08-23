import { z } from 'zod';
import type { RealestateDeal, VehicleCategory } from './enums/index.js';
export type ParamContext = `vehicles.${VehicleCategory}` | `realestate.${RealestateDeal}` | 'realestate.map' | 'market.search' | 'market.collection' | 'projects.search' | 'projects.list' | 'projects.listings' | 'projects.developers' | 'projects.developerFeed' | 'nearby.search';
export declare const parseParams: <S extends z.ZodTypeAny>(context: ParamContext, schema: S, value: unknown) => z.infer<S>;
