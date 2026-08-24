# Recipes

All examples assume:

```ts
import {
  createResilientClient, flatten, range,
  CarTag, CommercialDealType, GearBox, MarketCondition,
  PropertyCondition, ResidentialProperty, Yad2Category,
} from 'yad2-sdk';

const yad2 = createResilientClient();   // spawns and manages its own browser
```

## Apartments in a neighbourhood

```ts
const where = await yad2.address.locate('כרמליה חיפה');

const feed = await yad2.realestate.forSale.search({
  ...where,
  minRooms: 5,
  maxRooms: 5,
  maxPrice: 4_000_000,
  property: ResidentialProperty.Apartment,
  propertyCondition: PropertyCondition.Renovated,
});

for (const ad of flatten(feed)) {
  console.log(ad.address?.street?.text, ad.additionalDetails?.roomsCount, ad.price);
}
```

## Every listing in an area, deduped

```ts
const homes = await yad2.realestate.forSale.all({ ...where }, { maxPages: 20 });
```

`all` walks pages until `totalPages` and drops repeated promoted ads.

## Rentals that allow pets

```ts
await yad2.realestate.rent.search({ ...where, pets: true, minRooms: 3 });
```

## Commercial space to rent

```ts
await yad2.realestate.commercial.search({
  ...where,
  dealType: CommercialDealType.Rent,
  loadingRamp: true,
});
```

## Cars by spec

```ts
const makers = await yad2.catalog.manufacturers();
const toyota = makers.find((m) => m.engTitle === 'Toyota');
const models = await yad2.catalog.models(toyota.id);

await yad2.vehicles.cars.search({
  manufacturer: toyota.id,
  model: models.find((m) => m.title.includes('קורולה'))?.id,
  year: range(2020, 2024),
  price: range(60_000, 130_000),
  km: range(0, 80_000),
  gearBox: GearBox.Automatic,
  carTag: CarTag.HighSafetyEquipment,
});
```

## Motorcycles, trucks, boats, oddities

```ts
await yad2.vehicles.motorcycles.search({ manufacturer: 240 });
await yad2.vehicles.trucks.search({ CarSpecialSubCatID: 46 });
await yad2.vehicles.watercraft.search({ CarSpecialSubCatID: WatercraftType.Motorboat });
await yad2.vehicles.other.search({ CarSpecialID: SpecialVehicleType.Atv });
```

## Full detail for one listing

```ts
const item = await yad2.items.realestate(ad.token);
item.metaData?.description;
Object.entries(item.inProperty ?? {}).filter(([, on]) => on);

const car = await yad2.items.vehicle(carAd.token);
car.horsePower; car.specification?.airBags; car.vehicleDates?.testDate;
```

## Second-hand marketplace

```ts
await yad2.market.search({
  q: 'ספה',
  cities: 5000,
  conditions: MarketCondition.LikeNew,
  maxPrice: 2000,
});

await yad2.market.collection('ריהוט');
const facets = await yad2.market.filters('ספה');
```

Only one page is available — see the pagination note in `api.md`.

## New-construction projects

```ts
await yad2.projects.search({ city: where.city, immediateOccupancy: true });
await yad2.projects.developers({ limit: 10 });
```

## Search by coordinates

```ts
const docs = await yad2.nearby.all(
  { lat: 32.0853, lon: 34.7818, catID: Yad2Category.Realestate, limit: 10 },
  { maxChunks: 5 },
);
```

## Neighbourhood quality

```ts
import { scoreBySegment, NeighborhoodSegment } from 'yad2-sdk';

const survey = await yad2.neighborhood.survey(where.neighborhood);
const scores = scoreBySegment(survey);
scores[NeighborhoodSegment.Safety];
```

## Human-readable filter summary

```ts
import { isFilterLabels } from 'yad2-sdk';

const labels = await yad2.labels.realestate(RealestateDeal.ForSale, where);
const title = Object.values(labels).filter(isFilterLabels)
  .flatMap((entry) => entry.map((label) => label.title))
  .join(' · ');                       // "מישור החוף הצפוני · חיפה · כרמליה"
```

## Photos

```ts
yad2.images.cover(ad);
yad2.images.urls(ad);
await yad2.images.fetchItem(ad);              // [{ url, contentType, bytes }]
await yad2.images.save(yad2.images.cover(ad), './cover.jpeg');
```

## Sorting and comparing

There is no server-side sort. Collect, then sort locally:

```ts
const homes = await yad2.realestate.forSale.all({ ...where }, { maxPages: 10 });

homes
  .filter((h) => h.price && h.additionalDetails?.squareMeter)
  .map((h) => ({ ...h, perSqm: Math.round(h.price / h.additionalDetails.squareMeter) }))
  .sort((a, b) => a.perSqm - b.perSqm);
```

## Handling failures

```ts
import { Yad2BlockedError, Yad2ParamsError, Yad2NotFoundError } from 'yad2-sdk';

try { … } catch (error) {
  if (error instanceof Yad2ParamsError) …   // bad filter — the message names the field
  if (error instanceof Yad2BlockedError) …  // fingerprint cooled down; use the browser transport
  if (error instanceof Yad2NotFoundError) … // locate() found no such place
}
```
