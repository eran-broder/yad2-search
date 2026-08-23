import { createBrowserClient, flatten } from '../dist/index.js';

const yad2 = createBrowserClient({ port: Number(process.argv[2]) });

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
