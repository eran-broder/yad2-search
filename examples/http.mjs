import { createNodeClient, Yad2BlockedError, range } from '../dist/index.js';

const yad2 = createNodeClient();

try {
  const { ads, pagination } = await yad2.vehicles.cars.search({
    manufacturer: 21,
    year: range(2019, 2023),
  });

  console.log('total:', pagination.total);
  for (const ad of ads.slice(0, 5)) {
    console.log(ad.manufacturer?.text, ad.model?.text, ad.vehicleDates?.yearOfProduction, ad.price);
  }
} catch (error) {
  if (!(error instanceof Yad2BlockedError)) throw error;
  console.log('Yad2 bot protection challenged this client fingerprint.');
  console.log('Node and curl each get a small request budget before a sticky cooldown.');
  console.log('For sustained use switch to createBrowserClient(), which spawns its own browser,');
  console.log('or ask Yad2 to allowlist the SDK user-agent.');
}
