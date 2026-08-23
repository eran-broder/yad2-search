import { raw } from './probe-params.mjs';
import { diff } from './schema-paths.mjs';
import { VehicleAdSchema } from '../dist/schemas/vehicles.js';
import { RealestateAdSchema } from '../dist/schemas/realestate.js';
import { MarketItemSchema } from '../dist/schemas/market.js';
import { ProjectSchema } from '../dist/schemas/projects/index.js';
import { RealestateItemSchema, VehicleItemSchema } from '../dist/schemas/items/index.js';
import { RealestateOptionsSchema } from '../dist/schemas/options.js';

const SAMPLE_PAGES = [1, 2, 3];
const ITEM_SAMPLE = 12;

const gather = async (path, params, pick) => {
  const out = [];
  for (const page of SAMPLE_PAGES) {
    const { json } = await raw(path, { ...params, page });
    out.push(...(pick(json?.data) ?? []));
  }
  return out;
};

const cars = await gather('/vehicles-feed/cars', { manufacturer: 21 }, (d) => d?.ads);
diff('vehicle ad', VehicleAdSchema, cars);

const reAds = await gather('/realestate-feed/forsale/feed', { region: 5, city: 4000 }, (d) => [
  ...(d?.private ?? []),
  ...(d?.agency ?? []),
]);
diff('realestate ad', RealestateAdSchema, reAds);

const market = [];
for (const q of ['ספה', 'מקרר', 'אופניים']) {
  const { json } = await raw('/recommerce-feed/search', { q, scrollSessionId: new Date().toISOString() });
  market.push(...(json?.data?.items ?? []));
}
diff('market item', MarketItemSchema, market);

const projects = await gather('/yad1/feed', {}, (d) => d?.projects);
diff('yad1 project', ProjectSchema, projects);

const reItems = [];
for (const ad of reAds.slice(0, ITEM_SAMPLE)) {
  reItems.push((await raw(`/realestate-item/${ad.token}`)).json?.data);
}
diff('realestate item', RealestateItemSchema, reItems.filter(Boolean));

const vItems = [];
for (const ad of cars.slice(0, ITEM_SAMPLE)) {
  vItems.push((await raw(`/vehicles-item/${ad.token}`)).json?.data);
}
diff('vehicle item', VehicleItemSchema, vItems.filter(Boolean));

const optionSamples = [];
for (const deal of ['forsale', 'rent', 'commercial']) {
  const { json } = await raw(`/realestate-search-options/${deal}/base`, {});
  optionSamples.push(json?.data);
}
diff('realestate options', RealestateOptionsSchema, optionSamples.filter(Boolean));
