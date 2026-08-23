# yad2-search

A Claude Code skill and typed Node SDK for searching [Yad2](https://www.yad2.co.il) — Israeli
real estate, vehicles, new-construction projects and the second-hand marketplace.

## Install as a Claude Code skill

```bash
git clone <repo-url> ~/.claude/skills/yad2-search
cd ~/.claude/skills/yad2-search && npm install
```

`dist/` is committed so the skill works straight after `npm install`. Run `npm run build` after
editing anything under `src/`.

Claude Code picks the skill up from `SKILL.md`. Ask it things like *"find 5 room apartments in
כרמליה חיפה"* or *"compare used Mazda prices by year"*.

## Use as a library

```ts
import { createResilientClient, flatten } from 'yad2-search';

const yad2 = createResilientClient({ browser: { port: 1234 } });
const where = await yad2.address.locate('כרמליה חיפה');
const feed = await yad2.realestate.forSale.search({ ...where, minRooms: 5 });

flatten(feed).forEach((ad) => console.log(ad.address?.street?.text, ad.price));
```

## Use from the CLI

```bash
node dist/cli.js                                     # every command
node dist/cli.js realestate.forSale.search --help    # params, types, enum members
node dist/cli.js address.locate '"רמת גן"' --port 1234
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run build` | compile to `dist/` |
| `npm run verify` | 8 live checks against the real API |
| `npm run surface` | print the generated API surface |
| `npm run lint` | fail on magic strings |
| `npm run typecheck` | types only |

## Documentation

- `SKILL.md` — how Claude should use this, and the rules that are easy to get wrong
- `references/api.md` — every endpoint, parameter and quirk
- `references/recipes.md` — worked examples
- `examples/` — runnable scripts, including an HTML report generator

## Notes

Yad2's JSON gateway is not itself behind a login, but each non-browser client fingerprint gets a
small request budget before a sticky cooldown. For sustained use, drive it through a real browser
via [playwright-http-server](https://github.com/eran-broder/playwright-server), or ask Yad2 to
allowlist the SDK user-agent. Don't spoof browser fingerprints — it is detected and blocked faster
than identifying honestly.

Reads public listing data. Keep the default rate limits and check Yad2's terms before doing
anything redistributive.
