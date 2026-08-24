import { createBrowserClient, flatten } from '../dist/index.js';

const portArg = process.argv[2];
const yad2 = createBrowserClient(portArg ? { port: Number(portArg) } : {});

const where = await yad2.address.locate('כרמליה חיפה');
const feed = await yad2.realestate.forSale.search({ ...where, minRooms: 4, maxPrice: 4_000_000 });

console.log('total:', feed.pagination.total);
for (const ad of flatten(feed).slice(0, 5)) {
  console.log(
    ad.address?.city?.text,
    ad.address?.street?.text ?? '—',
    `${ad.additionalDetails?.roomsCount} rooms`,
    ad.price,
  );
}
