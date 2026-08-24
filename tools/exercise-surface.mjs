import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { createBrowserClient } from '../dist/index.js';
import { discover } from '../dist/cli/reflect.js';
import {
  MarketCondition,
  RealestateDeal,
  ResidentialProperty,
  VehicleCategory,
  Yad2Category,
} from '../dist/core/enums/index.js';

const supplied = process.argv[2] ?? process.env.PWHS_PORT;
// No port supplied means "spawn your own server" — passing NaN would send every
// request to http://127.0.0.1:NaN, because `NaN ?? fallback` is still NaN.
const y2 = createBrowserClient(supplied ? { port: Number(supplied) } : {});

const HAIFA = { region: 5, city: 4000 };
const CARMELIA_HOOD = 612;
const HYUNDAI = 21;
const SAMPLE_IMAGE = { metaData: { coverImage: 'https://img.yad2.co.il/x/y.jpeg', images: [] } };

const PAGE = { maxPages: 1 };

const ARGS = {
  'realestate.map': [RealestateDeal.ForSale, HAIFA],
  'realestate.forSale.search': [{ ...HAIFA, property: ResidentialProperty.Apartment }],
  'realestate.forSale.stream': [HAIFA, PAGE],
  'realestate.forSale.all': [HAIFA, PAGE],
  'realestate.rent.search': [HAIFA],
  'realestate.rent.stream': [HAIFA, PAGE],
  'realestate.rent.all': [HAIFA, PAGE],
  'realestate.commercial.search': [HAIFA],
  'realestate.commercial.stream': [HAIFA, PAGE],
  'realestate.commercial.all': [HAIFA, PAGE],
  'market.search': [{ q: 'ספה', conditions: MarketCondition.LikeNew }],
  'market.collection': ['ריהוט'],
  'market.filters': ['ספה'],
  'market.collectionFilters': ['ריהוט'],
  'market.autocomplete': ['ספה'],
  'market.menuItems': [],
  'projects.search': [{ city: 5000 }],
  'projects.stream': [{ city: 5000 }, PAGE],
  'projects.all': [{ city: 5000 }, PAGE],
  'projects.list': [{ city: 5000, limit: 3 }],
  'projects.map': [{ city: 5000 }],
  'projects.listings': [{ limit: 3 }],
  'projects.developers': [{ limit: 3 }],
  'projects.developerFeed': [{ limit: 3 }],
  'projects.autocomplete': ['תל'],
  'address.regions': [],
  'address.topAreas': [],
  'address.areas': [],
  'address.cities': [],
  'address.hoods': [4000],
  'address.streets': [4000],
  'address.autocomplete': ['כרמליה'],
  'address.locate': ['כרמליה חיפה'],
  'options.realestate': [RealestateDeal.ForSale],
  'options.commercialDynamic': [],
  'options.forSale': [],
  'options.rent': [],
  'options.commercial': [],
  'catalog.catalog': [VehicleCategory.Cars, { manufacturer: HYUNDAI }],
  'catalog.options': [VehicleCategory.Cars],
  'catalog.manufacturers': [VehicleCategory.Motorcycles],
  'catalog.models': [HYUNDAI],
  'catalog.subModels': [HYUNDAI, 10287],
  'catalog.specialTypes': [VehicleCategory.Trucks],
  'catalog.findManufacturer': ['Toyota', VehicleCategory.Cars],
  // Trucks have no manufacturers; their makes live in specialTypes, so this is the
  // equivalent lookup for them.
  'catalog.findSpecialType': ['וולוו', VehicleCategory.Trucks],
  'labels.realestate': [RealestateDeal.ForSale, HAIFA],
  'labels.vehicles': [VehicleCategory.Cars, { manufacturer: HYUNDAI }],
  'neighborhood.survey': [CARMELIA_HOOD],
  'neighborhood.suggestions': ['דירה'],
  'nearby.search': [{ lat: 32.7956, lon: 34.9791, catID: Yad2Category.Realestate, limit: 5 }],
  'nearby.stream': [{ lat: 32.7956, lon: 34.9791, catID: Yad2Category.Realestate, limit: 5 }, { maxChunks: 1 }],
  'nearby.all': [{ lat: 32.7956, lon: 34.9791, catID: Yad2Category.Realestate, limit: 5 }, { maxChunks: 1 }],
  'images.cover': [SAMPLE_IMAGE],
  'images.urls': [SAMPLE_IMAGE],
  'images.fileName': ['https://img.yad2.co.il/a/b.jpeg'],
};

const [carAd] = (await y2.vehicles.cars.search({ manufacturer: HYUNDAI })).ads;
const [homeAd] = (await y2.realestate.forSale.search(HAIFA)).private ?? [];

ARGS['items.vehicle'] = [carAd.token];
ARGS['items.realestate'] = [homeAd.token];

const imageUrl = carAd.metaData?.coverImage;
const scratch = join(tmpdir(), `yad2-surface-${carAd.token}.jpeg`);

ARGS['images.fetch'] = [imageUrl];
ARGS['images.fetchMany'] = [[imageUrl]];
ARGS['images.fetchItem'] = [{ metaData: { coverImage: imageUrl, images: [imageUrl] } }];
ARGS['images.save'] = [imageUrl, scratch];

const vehicleArgs = (path) => {
  const category = path.split('.')[1];
  const base = category === VehicleCategory.Cars ? { manufacturer: HYUNDAI } : {};
  return path.endsWith('.search') ? [base] : [base, PAGE];
};

const drain = async (value) => {
  const awaited = await value;
  if (awaited && typeof awaited === 'object' && Symbol.asyncIterator in awaited) {
    const items = [];
    for await (const item of awaited) items.push(item);
    return items;
  }
  return awaited;
};

const callables = discover(y2);
const skipped = [];
const failures = [];
let exercised = 0;

for (const { path, invoke } of callables) {
  const args = path.startsWith('vehicles.') ? vehicleArgs(path) : ARGS[path];

  if (args === null) {
    skipped.push(path);
    continue;
  }
  if (args === undefined) {
    failures.push(`${path} :: no sample arguments defined`);
    continue;
  }

  try {
    const result = await drain(invoke(...args));
    if (result === undefined || result === null) throw new Error('returned nothing');
    exercised += 1;
  } catch (error) {
    failures.push(`${path} :: ${String(error.message).split('\n')[0].slice(0, 90)}`);
  }
}

console.log(`exercised ${exercised}/${callables.length} methods · skipped ${skipped.length}`);
failures.forEach((failure) => console.log(`  FAIL ${failure}`));
console.log(failures.length === 0 ? 'surface exercise: 0 failures' : `surface exercise: ${failures.length} failures`);
process.exit(failures.length === 0 ? 0 : 1);
