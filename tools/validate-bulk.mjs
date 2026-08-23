import { createBrowserClient, VehicleCategory, Yad2Category, flatten } from '../dist/index.js';

const y2 = createBrowserClient({ port: Number(process.argv[2] ?? process.env.PWHS_PORT) });

const failures = new Map();
let checked = 0;

const record = (label, error) => {
  const issue = String(error?.issues ?? error?.message ?? error).split('\n').slice(0, 2).join(' ').trim();
  const key = `${label} :: ${issue}`;
  failures.set(key, (failures.get(key) ?? 0) + 1);
};

const run = async (label, fn) => {
  try {
    const n = await fn();
    checked += n ?? 1;
  } catch (error) {
    record(label, error);
  }
};

const PLACES = ['תל אביב', 'חיפה', 'ירושלים', 'רמת גן', 'באר שבע', 'נתניה', 'אשדוד', 'פתח תקווה'];
const MAKERS = [19, 21, 27, 48, 41, 32, 40, 7];
const TERMS = ['ספה', 'אופניים', 'מקרר', 'iphone', 'שולחן', 'מזגן', 'טלוויזיה'];

for (const place of PLACES) {
  const where = await y2.address.locate(place).catch(() => null);
  if (!where) continue;

  await run(`forSale ${place}`, async () => {
    const ads = await y2.realestate.forSale.all({ ...where }, { maxPages: 2 });
    for (const ad of ads.slice(0, 3)) {
      await run(`realestate-item ${ad.token}`, async () => {
        await y2.items.realestate(ad.token);
        return 1;
      });
    }
    return ads.length;
  });

  await run(`rent ${place}`, async () => {
    const ads = await y2.realestate.rent.all({ ...where }, { maxPages: 1 });
    for (const ad of ads.slice(0, 2)) {
      await run(`rent-item ${ad.token}`, async () => {
        await y2.items.realestate(ad.token);
        return 1;
      });
    }
    return ads.length;
  });
  await run(`commercial ${place}`, async () => (await y2.realestate.commercial.search({ ...where })).pagination.total ? 1 : 1);
  await run(`projects ${place}`, async () => (await y2.projects.all({ city: where.city }, { maxPages: 1 })).length);
  if (where.neighborhood !== undefined) {
    await run(`survey ${place}`, async () => {
      await y2.neighborhood.survey(where.neighborhood);
      return 1;
    });
  }
  await run(`suggestions ${place}`, async () => {
    await y2.neighborhood.suggestions(place);
    return 1;
  });
}

for (const manufacturer of MAKERS) {
  await run(`cars ${manufacturer}`, async () => {
    const ads = await y2.vehicles.cars.all({ manufacturer }, { maxPages: 2 });
    for (const ad of ads.slice(0, 3)) {
      await run(`vehicles-item ${ad.token}`, async () => {
        await y2.items.vehicle(ad.token);
        return 1;
      });
    }
    return ads.length;
  });
}

for (const category of [
  VehicleCategory.Motorcycles,
  VehicleCategory.Scooters,
  VehicleCategory.Trucks,
  VehicleCategory.Watercraft,
  VehicleCategory.Other,
]) {
  await run(`vehicles ${category}`, async () => {
    const ads = await y2.vehicles[category].all({}, { maxPages: 2 });
    for (const ad of ads.slice(0, 4)) {
      await run(`vehicles-item ${category}`, async () => {
        await y2.items.vehicle(ad.token);
        return 1;
      });
    }
    return ads.length;
  });
}

for (const q of TERMS) {
  await run(`market ${q}`, async () => (await y2.market.search({ q })).items.length);
  await run(`filters ${q}`, async () => {
    await y2.market.filters(q);
    return 1;
  });
}

for (const [lat, lon] of [[32.7956, 34.9791], [32.0853, 34.7818], [31.7683, 35.2137]]) {
  await run(`nearby ${lat}`, async () => {
    const docs = await y2.nearby.all(
      { lat, lon, catID: Yad2Category.Realestate, limit: 10 },
      { maxChunks: 3 },
    );
    return docs.length;
  });
}

for (const category of Object.values(VehicleCategory)) {
  await run(`catalog ${category}`, async () => {
    const makers = await y2.catalog.manufacturers(category);
    const special = await y2.catalog.specialTypes(category);
    await y2.catalog.options(category);
    if (makers.length + special.length === 0) throw new Error(`${category} catalog is empty`);
    return makers.length + special.length;
  });
}
await run('regions', async () => (await y2.address.regions()).length);
await run('cities', async () => (await y2.address.cities()).length);

console.log(`\nvalidated ${checked} records`);
console.log(`distinct failures: ${failures.size}`);
for (const [key, count] of [...failures.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  x${count}  ${key.slice(0, 170)}`);
}
