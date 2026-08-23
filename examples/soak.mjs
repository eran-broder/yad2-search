import { createBrowserClient, ProjectPropertyType, VehicleCategory, range } from '../dist/index.js';

const y2 = createBrowserClient({ port: Number(process.argv[2]) });

let calls = 0;
const started = Date.now();
const results = [];

const step = async (label, run) => {
  const t0 = Date.now();
  try {
    const value = await run();
    calls += 1;
    results.push({ label, ok: true, ms: Date.now() - t0, value });
  } catch (error) {
    calls += 1;
    results.push({ label, ok: false, ms: Date.now() - t0, value: String(error).slice(0, 90) });
  }
};

const PLACES = ['תל אביב', 'חיפה', 'ירושלים', 'רמת גן', 'באר שבע', 'נתניה', 'כרמליה חיפה', 'נווה צדק'];
const located = {};

for (const place of PLACES) {
  await step(`locate ${place}`, async () => {
    located[place] = await y2.address.locate(place);
    return JSON.stringify(located[place]);
  });
}

for (const place of PLACES) {
  await step(`realestate forsale ${place}`, async () => {
    const feed = await y2.realestate.forSale.search({ ...located[place], minRooms: 4 });
    return `${feed.pagination.total} listings`;
  });
}

for (const place of PLACES.slice(0, 4)) {
  await step(`realestate rent ${place}`, async () => {
    const feed = await y2.realestate.rent.search({ ...located[place] });
    return `${feed.pagination.total} listings`;
  });
}

const MAKERS = [
  ['Toyota', 19],
  ['Hyundai', 21],
  ['Mazda', 27],
  ['Kia', 48],
  ['Skoda', 41],
];

for (const [name, manufacturer] of MAKERS) {
  await step(`cars ${name}`, async () => {
    const feed = await y2.vehicles.cars.search({ manufacturer, year: range(2018, 2024) });
    return `${feed.pagination.total} ads`;
  });
}

for (const category of [
  VehicleCategory.Motorcycles,
  VehicleCategory.Scooters,
  VehicleCategory.Trucks,
  VehicleCategory.Watercraft,
]) {
  await step(`vehicles ${category}`, async () => {
    const feed = await y2.vehicles[category].search();
    return `${feed.pagination.total} ads`;
  });
}

for (const term of ['ספה', 'אופניים', 'מקרר', 'iphone', 'שולחן']) {
  await step(`market "${term}"`, async () => {
    const found = await y2.market.search({ q: term });
    return `${found.totalItems} catalog / ${found.items.length} returned`;
  });
}

for (const place of PLACES.slice(0, 3)) {
  await step(`projects ${place}`, async () => {
    const feed = await y2.projects.search({ city: located[place].city, propertyType: ProjectPropertyType.New });
    return `${feed.total} projects`;
  });
}

await step('paginate cars 5 pages', async () => {
  const ads = await y2.vehicles.cars.all({ manufacturer: 19 }, { maxPages: 5 });
  return `${ads.length} ads, ${new Set(ads.map((a) => a.token)).size} unique`;
});

await step('paginate realestate 4 pages', async () => {
  const ads = await y2.realestate.forSale.all({ ...located['תל אביב'] }, { maxPages: 4 });
  return `${ads.length} ads, ${new Set(ads.map((a) => a.token)).size} unique`;
});

await step('catalog manufacturers', async () => `${(await y2.catalog.manufacturers()).length} makers`);
await step('address regions', async () => `${(await y2.address.regions()).length} regions`);
await step('address cities', async () => `${(await y2.address.cities()).length} cities`);
await step('options forsale', async () => `${(await y2.options.forSale()).property?.length} types`);

const failed = results.filter((r) => !r.ok);
const elapsed = ((Date.now() - started) / 1000).toFixed(1);

for (const r of results) {
  console.log(`${r.ok ? 'ok  ' : 'FAIL'} ${String(r.ms).padStart(6)}ms  ${r.label.padEnd(30)} ${r.value}`);
}

console.log(`\n${calls - failed.length}/${calls} steps ok in ${elapsed}s`);
console.log(`failures: ${failed.length}`);
