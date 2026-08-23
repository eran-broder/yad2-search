import { raw } from './probe-params.mjs';
import {
  CarColor,
  CarFamilyType,
  CarTag,
  CommercialDealType,
  CommercialProperty,
  EngineType,
  GearBox,
  MarketCondition,
  MotorcycleLicense,
  MotorcycleType,
  OwnerType,
  ProjectPropertyType,
  PropertyCondition,
  ResidentialProperty,
  SpecialVehicleType,
  WatercraftType,
} from '../dist/core/enums/index.js';

const members = (enumObject) =>
  Object.entries(enumObject).filter(([key]) => Number.isNaN(Number(key)));

const CASES = [
  ['ResidentialProperty', ResidentialProperty, '/realestate-feed/forsale/feed', { region: 5 }, 'property'],
  ['PropertyCondition', PropertyCondition, '/realestate-feed/forsale/feed', { region: 5 }, 'propertyCondition'],
  ['CommercialProperty', CommercialProperty, '/realestate-feed/commercial/feed', { region: 5 }, 'property'],
  ['CommercialDealType', CommercialDealType, '/realestate-feed/commercial/feed', { region: 5 }, 'dealType'],
  ['GearBox', GearBox, '/vehicles-feed/cars', {}, 'gearBox'],
  ['EngineType', EngineType, '/vehicles-feed/cars', {}, 'engineType'],
  ['CarFamilyType', CarFamilyType, '/vehicles-feed/cars', {}, 'carFamilyType'],
  ['CarColor', CarColor, '/vehicles-feed/cars', {}, 'group_color'],
  ['CarTag', CarTag, '/vehicles-feed/cars', {}, 'carTag'],
  ['OwnerType', OwnerType, '/vehicles-feed/cars', {}, 'ownerID'],
  ['MotorcycleLicense', MotorcycleLicense, '/vehicles-feed/motorcycles', {}, 'license'],
  ['MotorcycleType', MotorcycleType, '/vehicles-feed/motorcycles', {}, 'motorCycleType'],
  ['WatercraftType', WatercraftType, '/vehicles-feed/watercraft', {}, 'CarSpecialSubCatID'],
  ['SpecialVehicleType', SpecialVehicleType, '/feed-search-vehicles/other/transform', {}, 'CarSpecialID'],
  ['ProjectPropertyType', ProjectPropertyType, '/yad1/feed', {}, 'propertyType'],
  ['MarketCondition', MarketCondition, '/recommerce-feed/search', { q: 'ספה' }, 'conditions'],
];

const totalOf = (json) =>
  json?.data?.pagination?.total ?? json?.data?.total ?? json?.data?.totalItems;

let problems = 0;

for (const [name, enumObject, path, base, param] of CASES) {
  const baseline = totalOf((await raw(path, withSession(path, base))).json);
  const rejected = [];
  const inert = [];

  for (const [key, value] of members(enumObject)) {
    const { json } = await raw(path, withSession(path, { ...base, [param]: value }));
    const message = typeof json?.message === 'string' ? json.message : '';
    const total = totalOf(json);

    if (/not allowed|must be|fails to match/.test(message)) rejected.push(`${key}=${value}`);
    else if (total === baseline) inert.push(`${key}=${value}`);
  }

  const status = rejected.length ? 'REJECTED' : inert.length === members(enumObject).length ? 'ALL INERT' : 'ok';
  if (rejected.length) problems += rejected.length;
  console.log(
    `${status.padEnd(10)} ${name.padEnd(21)} ${members(enumObject).length} values` +
      (rejected.length ? ` · rejected: ${rejected.join(', ')}` : '') +
      (inert.length ? ` · no effect: ${inert.join(', ')}` : ''),
  );
}

function withSession(path, params) {
  return path.includes('recommerce')
    ? { ...params, scrollSessionId: new Date().toISOString() }
    : params;
}

console.log(problems === 0 ? '\nenum check: every value accepted' : `\nenum check: ${problems} rejected values`);
process.exit(problems === 0 ? 0 : 1);
