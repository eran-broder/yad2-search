// Bakes the vehicle catalog into src/data/catalog-index.json.
//
// Every vehicle search needs a manufacturer id, and the only way to learn one was a
// request to /vehicles-{category}-catalog — the endpoint bot protection challenges first,
// and the one most likely to be cold exactly when you need it. Manufacturers and special
// types are six requests in total and change rarely, so they ship with the SDK.
//
//   node tools/bake-catalog.mjs [port]            manufacturers + special types (6 requests)
//   node tools/bake-catalog.mjs [port] --models   also every model (adds ~271 requests)
//
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { createBrowserClient, VehicleCategory } from '../dist/index.js';
import { disposeSharedServer } from '../dist/core/managed-server.js';

const OUT = 'src/data/catalog-index.json';
const MODEL_PACING_MS = 400;

const args = process.argv.slice(2);
const withModels = args.includes('--models');
const supplied = args.find((arg) => !arg.startsWith('--')) ?? process.env.PWHS_PORT;
const y2 = createBrowserClient(supplied ? { port: Number(supplied) } : {});

const entry = (row) => ({ id: row.id, heb: row.title, ...(row.engTitle ? { eng: row.engTitle } : {}) });
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const index = { manufacturers: {}, specialTypes: {}, models: {} };

for (const category of Object.values(VehicleCategory)) {
  const manufacturers = await y2.catalog.manufacturers(category);
  const special = await y2.catalog.specialTypes(category);
  // Trucks, watercraft and `other` carry no manufacturer at all — they filter by special
  // type instead. Record only what a category actually has.
  if (manufacturers.length) index.manufacturers[category] = manufacturers.map(entry);
  if (special.length) index.specialTypes[category] = special.map(entry);
  console.log(`${category.padEnd(12)} ${manufacturers.length} manufacturers, ${special.length} special types`);
}

if (withModels) {
  // Cars, motorcycles and scooters all have models; the other categories have no
  // manufacturers to hang them off.
  for (const [category, manufacturers] of Object.entries(index.manufacturers)) {
    for (const manufacturer of manufacturers) {
      const models = await y2.catalog.models(manufacturer.id, category);
      if (models.length) index.models[`${category}:${manufacturer.id}`] = models.map(entry);
      await wait(MODEL_PACING_MS);
    }
    console.log(`${category}: models for ${manufacturers.length} manufacturers`);
  }
}

if (Object.keys(index.manufacturers).length === 0) throw new Error('refusing to bake an empty catalog');

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify(index), 'utf8');
console.log(`wrote ${OUT}`);

await disposeSharedServer();
