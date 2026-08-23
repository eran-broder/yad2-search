import { createResilientClient, CarTag, GearBox, range } from '../dist/index.js';

const yad2 = createResilientClient({
  browser: { port: Number(process.argv[2]) },
  http: { minIntervalMs: 3000 },
});

const cars = await yad2.vehicles.cars.all(
  { manufacturer: 21, year: range(2020, 2024), gearBox: GearBox.Automatic, carTag: CarTag.Sunroof },
  { maxPages: 3 },
);
console.log('cars:', cars.length, 'unique:', new Set(cars.map((c) => c.token)).size);

const where = await yad2.address.locate('חיפה');
const homes = await yad2.realestate.forSale.all({ ...where, minRooms: 4 }, { maxPages: 2 });
console.log('homes:', homes.length, 'unique:', new Set(homes.map((h) => h.token)).size);

const projects = await yad2.projects.all({ city: where.city }, { maxPages: 2 });
console.log('projects:', projects.length, 'unique:', new Set(projects.map((p) => p.token)).size);
