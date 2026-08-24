// Bakes Yad2's address hierarchy into src/data/address-index.json.
//
// Resolving a place used to cost a network round-trip per locate() call, against an API
// with a bot-protection budget. Regions, top areas, areas, cities and hoods are five
// requests in total and change on the order of never, so they ship with the SDK instead.
// Streets are deliberately excluded: that endpoint requires a city_id, so covering every
// city would mean 1454 requests and tens of megabytes.
//
//   node tools/bake-address.mjs [port]
//
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { createBrowserClient } from '../dist/index.js';
import { disposeSharedServer } from '../dist/core/managed-server.js';

const OUT = 'src/data/address-index.json';

const supplied = process.argv[2] ?? process.env.PWHS_PORT;
const y2 = createBrowserClient(supplied ? { port: Number(supplied) } : {});

/** Keep only what matching and SearchLocation need; the rest is weight we would ship forever. */
const pick = (row, idField, hebField, engField) => {
  const out = {
    id: row[idField],
    heb: row[hebField],
    title: row.title_text,
    full: row.full_title_text,
  };
  if (row[engField]) out.eng = row[engField];
  if (row.region_id !== undefined) out.region = row.region_id;
  if (row.top_area_id !== undefined) out.topArea = row.top_area_id;
  if (row.area_id !== undefined) out.area = row.area_id;
  if (row.city_id !== undefined) out.city = row.city_id;
  return out;
};

const [regions, topAreas, areas, cities, hoods] = await Promise.all([
  y2.address.regions(),
  y2.address.topAreas(),
  y2.address.areas(),
  y2.address.cities(),
  y2.address.hoods(),
]);

const index = {
  regions: regions.map((r) => pick(r, 'region_id', 'region_heb', 'region_eng')),
  topAreas: topAreas.map((r) => pick(r, 'top_area_id', 'top_area_heb', 'top_area_eng')),
  areas: areas.map((r) => pick(r, 'area_id', 'area_heb', 'area_eng')),
  cities: cities.map((r) => pick(r, 'city_id', 'city_heb', 'city_eng')),
  hoods: hoods.map((r) => pick(r, 'hood_id', 'hood_heb', 'hood_eng')),
};

for (const [name, rows] of Object.entries(index)) {
  if (rows.length === 0) throw new Error(`refusing to bake an empty ${name} list`);
  console.log(`${name.padEnd(9)} ${rows.length}`);
}

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify(index), 'utf8');
console.log(`wrote ${OUT}`);

await disposeSharedServer();
