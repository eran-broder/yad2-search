---
name: yad2-search
description: Search Yad2 (יד2), Israel's largest classifieds site, from Node/TypeScript — apartments and commercial real estate for sale or rent, new-construction projects, cars/motorcycles/scooters/trucks/watercraft, and the second-hand marketplace. Use whenever someone asks to find, search, compare, scrape, monitor, or report on Israeli listings: "apartments in Tel Aviv", "דירות למכירה", "5 rooms in כרמליה", "used Toyota under 100k", "cars by year and gearbox", "yad2 listings", "new projects in Haifa", or wants prices, photos, neighbourhood scores, or a listings report. Covers the typed SDK, its CLI, and the bot-protection workarounds needed to reach the API.
---

# Yad2 Search

A typed SDK over Yad2's internal gateway (`gw.yad2.co.il`). Every endpoint, parameter, and enum
in it was verified against the live API — do not guess parameter names or enum values, they are
frequently counter-intuitive.

## Setup

```bash
cd <skill-dir> && npm install    # dist/ is committed; `npm run build` only after editing src/
```

Playwright comes with the install, and the browser transport is self-managing —
`createBrowserClient()` with no arguments spawns and reuses its own server and shuts it down with
the process. Pass `{ port }` only to attach to a server you are already running.

**If a search fails with `Yad2BrowserUnavailableError`,** Playwright's Chromium build is not on
this machine. Tell the user what it costs and let them decide — it is a one-time ~115MB download:

```bash
npx playwright install chromium
```

Don't run it silently; a large download deserves a heads-up. Note that Playwright pins a browser
build per version, so a machine with Playwright already installed can still be missing the exact
build this one needs.

Yad2's HTML front end sits behind Radware bot protection, but the JSON gateway does not — with
one catch: **each client fingerprint gets a small request budget, then a sticky cooldown**. Node
and curl each get their own budget. A real browser never gets blocked.

| Transport | Factory | Use for |
| --- | --- | --- |
| Node fetch → curl | `createNodeClient()` | a handful of queries |
| Chrome, auto-spawned | `createBrowserClient()` | anything sustained |
| fetch → curl → browser | `createResilientClient()` | recommended default |

Never spoof a Chrome user-agent from Node — a browser UA over a non-browser TLS fingerprint is
blocked *faster* than an honest one. If sustained access is needed and the browser route is not
available, ask Yad2 to allowlist the SDK user-agent rather than rotating fingerprints.

## Always start from a place name

`region` is required for real estate, and a wrong region silently returns **zero results** rather
than an error. Never hardcode it — resolve the whole hierarchy from a Hebrew place name:

```ts
const where = await yad2.address.locate('כרמליה חיפה');
// { region: 5, topArea: 25, area: 5, city: '4000', neighborhood: 612 }

const feed = await yad2.realestate.forSale.search({ ...where, minRooms: 4 });
```

`locate` accepts a neighbourhood, city, area or region and returns the most specific match.

## Resources

```
vehicles.{cars,motorcycles,scooters,trucks,watercraft,other}  .search .stream .all
realestate.{forSale,rent,commercial}                          .search .stream .all
realestate.map(deal, params)
projects        search stream all list map listings developers developerFeed autocomplete
market          search collection filters collectionFilters autocomplete menuItems
address         regions topAreas areas cities hoods streets autocomplete locate
catalog         catalog options manufacturers models subModels specialTypes
items           realestate(token) vehicle(token)
labels          realestate(deal, params) vehicles(category, params)
neighborhood    survey(hoodId) suggestions(query)
nearby          search stream all      (lat/lon geo search)
images          cover urls fileName fetch fetchMany fetchItem save
options         forSale rent commercial commercialDynamic realestate
```

`search` returns one page; `stream` is an async generator across pages; `all` collects it.
Both dedupe by token — Yad2 repeats promoted ads across pages.

See `references/api.md` for every parameter per vertical, and `references/recipes.md` for
worked examples.

## Rules that are easy to get wrong

- **Real-estate `city`/`neighborhood`/`area`/`region` are single-valued.** Passing an array
  returns zero results. Use `multiCity` / `multiNeighborhood` for lists. Vehicles *do* accept
  arrays for `area`, `topArea`, `manufacturer`, `model`.
- **Vehicle ranges are objects**, serialized as `from-to`: `year: range(2020, 2024)`.
  Real estate uses separate `minX`/`maxX` numbers instead.
- **Enum values are not sequential.** `GearBox.Automatic` is 102, not 2. Always use the exported
  enums (`ResidentialProperty`, `CommercialProperty`, `PropertyCondition`, `CommercialDealType`,
  `EngineType`, `CarTag`, `MarketCondition`, `SpecialVehicleType`, `WatercraftType`, …).
- **`other` vehicles use `CarSpecialID`**; trucks and watercraft use `CarSpecialSubCatID`.
- **Watercraft rejects `km` and `hand`**; commercial rejects `shelter`, `bars`, `renovated`,
  `accessibility`, `furniture`, `warehouse`, `propertyCondition`; `pets` is rent-only.
- **The market feed does not paginate.** `totalItems` reports thousands but the endpoint returns
  ~10 items and ignores `page`. There is no `market.all`; do not promise more.
- **There is no working sort** on any feed. `sort` and `zoom` are accepted but inert, so the SDK
  does not expose them. Sort client-side.
- Flatten real-estate feeds with `flatten(feed)` — `trio`, `kingOfTheHar` and `leadingBroker`
  are agency promos, not listings.

## CLI

Every SDK method is a command, generated by reflection:

```bash
node dist/cli.js                                        # list all commands
node dist/cli.js realestate.forSale.search --help       # params, types and enum members
node dist/cli.js address.locate '"כרמליה חיפה"' --transport browser
node dist/cli.js realestate.forSale.all '{"region":5,"city":4000,"minRooms":5}' '{"maxPages":5}' \
  --port 1234 --fields price,address.street.text,additionalDetails.roomsCount,token
```

Flags: `--transport node|http|curl|browser|resilient`, `--port` (attach to an existing server),
`--fields`, `--interval`.

## Verifying against the live site

```bash
npm run verify     # 8 live checks: schema coverage, param parity, enum values,
                   # error behaviour, full surface exercise, bulk validation, soak, lint
npm run surface    # print the generated API surface
```

Run `verify` after any change, and whenever Yad2 might have shifted — it validates thousands of
live records and every exposed parameter and enum value against the real API.

## Reporting

`examples/report.mjs` builds a self-contained HTML report (photos, filters breadcrumb via
`labels`, agency names, amenity chips) for a neighbourhood. Adapt it rather than writing a new
renderer.

## Etiquette

This reads public listing data. Keep the default rate limits, cache instead of re-fetching, and
check Yad2's terms before anything redistributive.
