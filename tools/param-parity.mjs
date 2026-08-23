import { raw } from './probe-params.mjs';
import { schemaPaths } from './schema-paths.mjs';
import {
  CarSearchParamsSchema,
  MotorcycleSearchParamsSchema,
  ScooterSearchParamsSchema,
  TruckSearchParamsSchema,
  WatercraftSearchParamsSchema,
  OtherVehicleSearchParamsSchema,
} from '../dist/params/vehicles.js';
import {
  RealestateSearchParamsSchema,
  RentSearchParamsSchema,
  CommercialSearchParamsSchema,
} from '../dist/params/realestate.js';
import {
  ProjectSearchParamsSchema,
  ProjectListParamsSchema,
  ProjectListingParamsSchema,
  DeveloperFeedParamsSchema,
  DeveloperListParamsSchema,
} from '../dist/params/projects.js';
import { MarketSearchParamsSchema } from '../dist/params/market.js';

const RANGE_FIELDS = new Set([
  'year', 'price', 'km', 'hand', 'engineval', 'electricRange', 'batteryCapacity',
]);

const SAMPLE = {
  q: 'ספה',
  text: 'גן',
  region: 5,
  dealType: 1,
  propertyCondition: 2,
  gearBox: 102,
  engineType: 1101,
  carFamilyType: 5,
  group_color: 10,
  ownerID: 1,
  license: 4,
  motorCycleType: 1,
  CarSpecialID: 2,
  CarSpecialSubCatID: 35,
  conditions: 2,
  isSMB: 'true',
  propertyType: 'new',
};

const valueFor = (field) => {
  if (field in SAMPLE) return SAMPLE[field];
  if (RANGE_FIELDS.has(field)) return '1-100000';
  if (field.startsWith('multi')) return '1';
  return 1;
};

const topLevel = (schema) => [...schemaPaths(schema)].filter((p) => !p.includes('.'));

const check = async (label, path, schema, base = {}) => {
  const fields = topLevel(schema);
  const params = { ...base };
  fields.forEach((f) => {
    params[f] = valueFor(f);
  });

  const { status, json } = await raw(path, params);
  const message = typeof json?.message === 'string' ? json.message : '';
  const rejected = [...message.matchAll(/([A-Za-z_][A-Za-z0-9_]*) is not allowed/g)].map((m) => m[1]);

  const verdict = rejected.length === 0 ? 'OK' : 'MISMATCH';
  console.log(`${verdict.padEnd(9)} ${label.padEnd(26)} ${fields.length} params  ${rejected.length ? 'rejected: ' + rejected.join(', ') : `(HTTP ${status})`}`);
  return rejected.length;
};

let problems = 0;
problems += await check('cars', '/vehicles-feed/cars', CarSearchParamsSchema);
problems += await check('motorcycles', '/vehicles-feed/motorcycles', MotorcycleSearchParamsSchema);
problems += await check('scooters', '/vehicles-feed/scooters', ScooterSearchParamsSchema);
problems += await check('trucks', '/vehicles-feed/trucks', TruckSearchParamsSchema);
problems += await check('watercraft', '/vehicles-feed/watercraft', WatercraftSearchParamsSchema);
problems += await check('other', '/feed-search-vehicles/other/transform', OtherVehicleSearchParamsSchema);
problems += await check('forSale', '/realestate-feed/forsale/feed', RealestateSearchParamsSchema);
problems += await check('rent', '/realestate-feed/rent/feed', RentSearchParamsSchema);
problems += await check('commercial', '/realestate-feed/commercial/feed', CommercialSearchParamsSchema);
problems += await check('projects', '/yad1/feed', ProjectSearchParamsSchema);
problems += await check('project list', '/yad1/projects', ProjectListParamsSchema);
problems += await check('project map', '/yad1/map', ProjectListParamsSchema);
problems += await check('project listings', '/yad1/listings', ProjectListingParamsSchema);
problems += await check('developers', '/yad1/developers', DeveloperListParamsSchema);
problems += await check('developer feed', '/yad1/developers/feed', DeveloperFeedParamsSchema);
problems += await check('market', '/recommerce-feed/search', MarketSearchParamsSchema, {
  scrollSessionId: new Date().toISOString(),
});

console.log(`\n${problems === 0 ? 'PARITY OK — every exposed param is accepted' : problems + ' rejected params'}`);
