import { z } from 'zod';
import { Yad2ParamsError } from './errors.js';
import type { RealestateDeal, VehicleCategory } from './enums/index.js';

export type ParamContext =
  | `vehicles.${VehicleCategory}`
  | `realestate.${RealestateDeal}`
  | 'realestate.map'
  | 'market.search'
  | 'market.collection'
  | 'projects.search'
  | 'projects.list'
  | 'projects.listings'
  | 'projects.developers'
  | 'projects.developerFeed'
  | 'nearby.search'
  | 'catalog'
  | 'labels';

export const parseParams = <S extends z.ZodTypeAny>(
  context: ParamContext,
  schema: S,
  value: unknown,
): z.infer<S> => {
  const parsed = schema.safeParse(value);
  if (!parsed.success) throw new Yad2ParamsError(context, z.prettifyError(parsed.error));
  return parsed.data;
};

/**
 * Validate a positional enum argument. Only the params object goes through Zod, so a bad
 * positional value otherwise either builds a nonsense URL (`/vehicles-lorries-catalog`,
 * which comes back as a bot challenge) or gets filtered out client-side and returns an
 * empty list indistinguishable from "no results".
 */
export const parseEnumArg = <T extends string>(
  context: ParamContext,
  name: string,
  allowed: Record<string, T>,
  value: unknown,
): T => {
  const values = Object.values(allowed);
  if (values.includes(value as T)) return value as T;
  throw new Yad2ParamsError(
    context,
    `${name} must be one of ${values.join(', ')} — received ${JSON.stringify(value)}`,
  );
};
