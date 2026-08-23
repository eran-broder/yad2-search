import { createResilientClient, flatten } from '../dist/index.js';
import { mkdtemp } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const y2 = createResilientClient({ browser: { port: Number(process.argv[2]) } });
const dir = await mkdtemp(join(tmpdir(), 'yad2-'));

const feed = await y2.realestate.forSale.search({ region: 1, minRooms: 4 });
const home = flatten(feed)[0];

console.log('cover:', y2.images.cover(home));
console.log('urls:', y2.images.urls(home).length);

const files = await y2.images.fetchItem(home);
console.log('fetched:', files.length, files.map((f) => `${f.contentType}:${f.bytes.length}b`).join(' '));

const saved = await y2.images.save(y2.images.cover(home), join(dir, y2.images.fileName(y2.images.cover(home))));
console.log('saved:', saved);

const cars = await y2.vehicles.cars.search({ manufacturer: 21 });
console.log('car images:', y2.images.urls(cars.ads[0]).length);

const market = await y2.market.search({ q: 'ספה' });
console.log('market images:', y2.images.urls(market.items[0]).length);

const projects = await y2.projects.search({ city: 5000 });
const p = projects.projects[0];
console.log('project images:', y2.images.urls(p).length, '| logo:', p.metaData?.projectLogo ? 'yes' : 'no');
