import {
  createResilientClient,
  VehicleCategory,
  GearBox,
  EngineType,
  RealestateDeal,
  ProjectPropertyType,
  range,
  flatten,
} from '../dist/index.js';

const portArg = process.argv[2];
const y2 = createResilientClient({
  browser: portArg ? { port: Number(portArg) } : {},
  http: { minIntervalMs: 3000 },
});

const makers = await y2.catalog.manufacturers();
const hyundai = makers.find((m) => m.engTitle === 'Hyundai');
console.log('catalog:', makers.length, 'makers |', (await y2.catalog.models(hyundai.id)).length, 'models');

const cars = await y2.vehicles.cars.search({
  manufacturer: hyundai.id,
  year: range(2020, 2024),
  gearBox: GearBox.Automatic,
  engineType: EngineType.Petrol,
});
console.log('cars:', cars.pagination.total, '| first:', cars.ads[0]?.model?.text, cars.ads[0]?.price);

const paged = await y2.vehicles.cars.all({ manufacturer: hyundai.id }, { maxPages: 3 });
console.log('cars paged:', paged.length, 'unique:', new Set(paged.map((c) => c.token)).size);

console.log('motorcycles:', (await y2.vehicles.motorcycles.search()).pagination.total);
console.log('trucks:', (await y2.vehicles.trucks.search()).pagination.total);
console.log('vehicle item:', (await y2.items.vehicle(cars.ads[0].token)).manufacturer?.text);

const feed = await y2.realestate.forSale.search({ region: 1, minRooms: 4 });
console.log('forsale:', feed.pagination.total, '| ads:', flatten(feed).length);

const homes = await y2.realestate.forSale.all({ region: 1, minRooms: 4 }, { maxPages: 2 });
console.log('homes paged:', homes.length, 'unique:', new Set(homes.map((h) => h.token)).size);

console.log('commercial:', (await y2.realestate.commercial.search({ region: 1 })).pagination.total);
console.log('realestate item:', (await y2.items.realestate(homes[0].token)).price);

const map = await y2.realestate.map(RealestateDeal.ForSale, { region: 1 });
console.log('map:', map.markers?.length, 'markers |', map.clusters?.length, 'clusters');

const projects = await y2.projects.search({ city: 5000, propertyType: ProjectPropertyType.New });
console.log('projects:', projects.total, '| developers:', (await y2.projects.developerFeed()).total);
console.log('listings:', (await y2.projects.listings({ limit: 5 })).length);

const market = await y2.market.search({ q: 'ספה' });
console.log('market:', market.totalItems, '| autocomplete:', (await y2.market.autocomplete('ספה')).searches?.length);

console.log('regions:', (await y2.address.regions()).length, '| options:', (await y2.options.forSale()).property?.length);
