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
  | 'nearby.search';

export const parseParams = <S extends z.ZodTypeAny>(
  context: ParamContext,
  schema: S,
  value: unknown,
): z.infer<S> => {
  const parsed = schema.safeParse(value);
  if (!parsed.success) throw new Yad2ParamsError(context, z.prettifyError(parsed.error));
  return parsed.data;
};
