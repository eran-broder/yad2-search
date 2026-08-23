import {
  createBrowserClient,
  Yad2NotFoundError,
  Yad2ParamsError,
  Yad2RequestError,
} from '../dist/index.js';

const y2 = createBrowserClient({ port: Number(process.argv[2] ?? process.env.PWHS_PORT) });

const CASES = [
  ['invalid item token', Yad2RequestError, () => y2.items.realestate('zzzzzzzz')],
  ['empty item token', Yad2RequestError, () => y2.items.vehicle('')],
  ['missing required region', Yad2ParamsError, () => y2.realestate.forSale.search({})],
  ['bad enum value', Yad2ParamsError, () => y2.realestate.forSale.search({ region: 5, property: 999 })],
  ['wrong scalar type', Yad2ParamsError, () => y2.realestate.forSale.search({ region: 5, minRooms: 'four' })],
  ['negative page', Yad2ParamsError, () => y2.vehicles.cars.search({ page: -1 })],
  ['array where single expected', Yad2ParamsError, () => y2.realestate.forSale.search({ region: 5, city: [1, 2] })],
  ['empty market query', Yad2ParamsError, () => y2.market.search({ q: '' })],
  ['unknown location', Yad2NotFoundError, () => y2.address.locate('qqqqzzzz')],
];

const TOLERANT = [
  ['empty result set', async () => {
    const r = await y2.realestate.forSale.search({ region: 5, city: 4000, minPrice: 999999999 });
    return r.pagination.total === 0;
  }],
  ['unknown manufacturer', async () => (await y2.catalog.models(999999)).length === 0],
];

let failed = 0;

for (const [label, expected, fn] of CASES) {
  try {
    await fn();
    failed += 1;
    console.log(`FAIL  ${label.padEnd(28)} expected ${expected.name}, resolved instead`);
  } catch (error) {
    const ok = error instanceof expected;
    if (!ok) failed += 1;
    console.log(`${ok ? 'ok  ' : 'FAIL'}  ${label.padEnd(28)} ${error.constructor.name}`);
  }
}

for (const [label, fn] of TOLERANT) {
  try {
    const ok = await fn();
    if (!ok) failed += 1;
    console.log(`${ok ? 'ok  ' : 'FAIL'}  ${label.padEnd(28)} handled without throwing`);
  } catch (error) {
    failed += 1;
    console.log(`FAIL  ${label.padEnd(28)} threw ${error.constructor.name}`);
  }
}

console.log(failed === 0 ? '\nerror behaviour: 0 failures' : `\nerror behaviour: ${failed} failures`);
process.exit(failed === 0 ? 0 : 1);
