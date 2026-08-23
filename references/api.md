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

## Known API quirks

- `engineVolume` is a number on cars, an object on watercraft.
- `allElectricRange` can be `"62-67"` — a range string; parse with `parseRange`.
- `agencyLogo`, label `text`, and many nested fields can be `null`.
- `/yad1/feed` can report `total` one higher than the distinct tokens it returns.
- `sort` and `zoom` are accepted everywhere and do nothing.
