# Yad2 gateway reference

Base: `https://gw.yad2.co.il`. Every path and parameter below was confirmed against the live API.
Anything not listed here was tested and rejected.

## Real estate — `/realestate-feed/{forsale|rent|commercial}/{feed|map}`

Shared parameters:

| Group | Parameters |
| --- | --- |
| Location | `region` (**required**, single), `area`, `city`, `neighborhood`, `street` (all single), `multiCity[]`, `multiNeighborhood[]` |
| Size | `minRooms`, `maxRooms`, `minSquaremeter`, `maxSquaremeter`, `minSquareMeterBuild`, `maxSquareMeterBuild`, `minFloor`, `maxFloor` |
| Price | `minPrice`, `maxPrice`, `priceOnly` |
| Shared amenities | `parking`, `elevator`, `airConditioner`, `balcony` |
| Other | `property` (enum, one or many), `newFromContractor`, `tour`, `text` (free text), `page` |

Residential only (`forsale`, `rent`): `shelter`, `bars`, `renovated`, `accessibility`,
`furniture`, `warehouse`, `propertyCondition`.
Rent only: `pets`.
Commercial only: `dealType` (0 = sale, 1 = rent), `highCeiling`, `kitchenette`, `alarm`,
`meetingRoom`, `cameras`, `communicationRoom`, `loadingRamp`, `coolingRoom`.

Response buckets: `private`, `agency`, `platinum`, `booster` are listings; `trio`,
`kingOfTheHar`, `leadingBroker` are agency promos; `yad1` is a new-projects block.

`/map` takes the same filters and returns `markers`, `grayMarkers` (yad1 projects, string
addresses) and `clusters`. It has no geographic bounds parameter — use `nearby` for coordinates.

## Vehicles — `/vehicles-feed/{cars|motorcycles|scooters|trucks|watercraft}`

`other` is served by `/feed-search-vehicles/other/transform` and returns bucketed data that the
SDK flattens to the same `{ ads, pagination }` shape.

| Category | Parameters beyond the common set |
| --- | --- |
| common | `year`, `price`, `km`, `hand` (ranges), `area[]`, `topArea[]`, `priceOnly`, `imgOnly`, `page` |
| cars | `manufacturer[]`, `model[]`, `subModel[]`, `engineval`, `electricRange`, `batteryCapacity` (ranges), `carTag`, `group_color`, `ownerID`, `seats`, `carFamilyType`, `gearBox`, `engineType` |
| motorcycles | `manufacturer[]`, `model[]`, `engineval`, `license`, `motorCycleType` |
| scooters | `manufacturer[]`, `model[]`, `engineval`, `license` |
| trucks | `CarSpecialSubCatID` |
| watercraft | `CarSpecialSubCatID` — **rejects `km` and `hand`** |
| other | `CarSpecialID` |

## New projects (yad1) — `/yad1/...`

Each path has a different contract:

| Path | Parameters |
| --- | --- |
| `/feed` | location, `propertyType`, `minPrice`, `maxPrice`, `minRooms`, `maxRooms`, `page`, `immediateOccupancy` |
| `/projects`, `/map` | same minus price, plus `limit` |
| `/listings` | same minus `propertyType`, plus `limit` |
| `/developers` | `limit` only |
| `/developers/feed` | location, `page`, `limit` |

## Market — `/recommerce-feed/...`

- `/search` — `q` (**required**), `cities[]`, `areas[]`, `productTypes[]`, `conditions[]`,
  `minPrice`, `maxPrice`, `isSMB` (sent as `"true"`), plus a `scrollSessionId` the SDK supplies.
- `/search/{collection}` — browse a category by its Hebrew name (`ריהוט`), same filters.
- `/filters`, `/filters/{collection}` — available facets, including per-category `attributes`.
- `/search/autocomplete`, `/menu-items`.

Pagination does not work: `currentPage` is always 1 and `page`, `offset`, `limit` are ignored.

## Address — `/address-master/...`

`/regions`, `/top-areas`, `/areas`, `/cities`, `/hoods?city_id=`, `/streets?city_id=`,
`/autocomplete/{text}`. Autocomplete entries carry the full hierarchy (`region_id`, `top_area_id`,
`area_id`, `city_id`, `hood_id`) — this is what `locate()` uses. Note `city_id` is not always
numeric (`"691P"`), so ids are typed `number | string`.

## Items, options, catalogs, extras

| Endpoint | Notes |
| --- | --- |
| `/realestate-item/{token}`, `/vehicles-item/{token}` | far richer than feed rows: full spec, amenities (`inProperty`), description, dates |
| `/realestate-search-options/{deal}/base`, `/commercial/dynamic` | property types, sliders, toggles |
| `/vehicles-{category}-catalog` | cars only: `manufacturer`, `model`, `subModel` |
| `/vehicles-{category}-catalog/base` | filter options; manufacturers for motorcycles/scooters live here, special types for trucks/watercraft/other |
| `/feed-literal/{realestate\|vehicles}/{subject}` | turns a filter set into Hebrew labels |
| `/neighborhood-survey/{hoodId}` | resident scores: safety, parks, schools, maintenance, … |
| `/free-search-autocomplete/suggestions?query=` | cross-vertical suggestions |
| `/carousels/near-me?lat&lon&catID&limit` | geo search, cursor paginated via `nextChunk` |

## Field paths in results

Response field names rarely match the filter names — `minRooms` filters, but the ad reports
`additionalDetails.roomsCount`, and a car's year lives at `vehicleDates.yearOfProduction`.
Guessing gives you a silently blank column. These were read off live responses; for anything
not listed, run the same command with `--paths`.

Real-estate ad (`realestate.{forSale,rent,commercial}`):

| What | Path |
| --- | --- |
| id / price | `token`, `price`, `priceBeforeTag` |
| rooms, size | `additionalDetails.roomsCount`, `additionalDetails.squareMeter`, `metaData.squareMeterBuild` |
| type, condition | `additionalDetails.property.text`, `additionalDetails.propertyCondition.id` |
| address | `address.street.text`, `address.house.number`, `address.house.floor`, `address.neighborhood.text`, `address.city.text` |
| coords | `address.coords.lat`, `address.coords.lon` |
| seller | `adType` (`private`/`commercial`), `customer.agencyName` |
| media | `metaData.coverImage`, `metaData.images[]`, `metaData.video` |
| amenities | `tags[].name` |

Vehicle ad (`vehicles.*`):

| What | Path |
| --- | --- |
| id / price | `token`, `price`, `metaData.priceBeforeTag` |
| **year** | `vehicleDates.yearOfProduction` |
| model | `manufacturer.text`, `model.text`, `subModel.text` |
| spec | `engineType.text`, `engineVolume`, `hand.text` |
| seller | `adType`, `customer.agencyName` |

Market ad (`market.*`) — note it uses `textHeb`, not `text`, for labels:
`adId`, `title`, `price`, `previousPrice`, `condition.textHeb`, `productType.textHeb`,
`address.city.textHeb`, `images[]`, `tags[]`. The ads sit under `items`; `totalItems` and
`totalPages` sit beside it and overstate what the endpoint will actually hand back.

Nearby (`nearby.*`): ads sit under `docs`, addresses use snake_case
(`address.address_master_id`, `address.area.text_eng`) unlike every other vertical.

`address.cities`, `.hoods` and `.streets` do not paginate — they return what `limit` allows
and never say what was cut. The SDK asks for 10000; the real sizes are 1454 cities, up to
~3700 streets per city. A larger limit makes the endpoint answer 500.

**Address lists are snake_case too** — `address.cities`, `.hoods`, `.streets`, `.areas`,
`.regions` return `city_id`/`city_heb`/`city_eng`, `hood_id`/`hood_heb`, `street_id`/`street_heb`,
plus `title_text` and `full_title_text`. There is no `hoodId` or `hoodName`; asking for those
gives you blank columns. Note `city_id` can be non-numeric (`"691P"`), which is why
`EntityId` is `number | string`.

Naming conventions differ per vertical and there is no rule to infer them from:

| Vertical | Label field | Case |
| --- | --- | --- |
| realestate, vehicles, projects | `.text` | camelCase |
| market | `.textHeb` | camelCase |
| address, nearby | `_heb` / `_text` | snake_case |

Neighbourhood survey: `hoodId`, `segmantList[].title`, `.score` (0–1), `.amountRespondents`.

Project (`projects.*`): `metaData.projectName`, `metaData.companyDetails.name`,
`additionalDetails.minPrice`/`maxPrice`, `additionalDetails.minRooms`/`maxRooms`,
`additionalDetails.entranceDate`, `address.city.id`.

**`price` can be `0`** on both real estate and vehicles — that is "call for price", not free.
Pass `priceOnly: true` to have the server drop those instead of filtering afterwards.

## Vehicle catalog

`catalog.findManufacturer(name, category)` resolves a make to its id offline, in either
language, from the baked catalog (`npm run bake:catalog`). It returns `undefined` rather
than guessing when a name is ambiguous. A vehicle search cannot start without this id, and
the live catalog endpoint is the first thing bot protection refuses.

`specialTypes` means different things per category, so read it before mapping a name:

| Category | manufacturers | specialTypes holds |
| --- | --- | --- |
| cars (126), motorcycles (85), scooters (60) | yes | — |

`models(manufacturer, category)` works for all three of those — Yamaha has 88 motorcycle
models. `subModels` is cars-only: scoping a motorcycle query by model is rejected with
"model is not allowed".
| trucks | none | **makes** — Volvo, Iveco, GMC (23) |
| watercraft | none | **vehicle types** — yachts, jet skis, fishing boats (6) |
| other | none | **vehicle types** — ATVs, forklifts, caravans (10) |

So a truck make is `findSpecialType('Volvo', 'trucks')`, not `findManufacturer`.

## Known API quirks

- `engineVolume` is a number on cars, an object on watercraft.
- `allElectricRange` can be `"62-67"` — a range string; parse with `parseRange`.
- `agencyLogo`, label `text`, and many nested fields can be `null`.
- `/yad1/feed` can report `total` one higher than the distinct tokens it returns.
- `sort` and `zoom` are accepted everywhere and do nothing.
