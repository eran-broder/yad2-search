import { writeFile } from 'node:fs/promises';
import { createBrowserClient, RealestateDeal, isFilterLabels } from '../dist/index.js';

const [, , portArg, outArg] = process.argv;
const y2 = createBrowserClient({ port: Number(portArg) });
const out = outArg ?? 'carmelia.html';

const AREA = { region: 5, city: 4000, neighborhood: 612 };
const AMENITY_LABELS = {
  includeElevator: 'מעלית',
  includeParking: 'חניה',
  includeBalcony: 'מרפסת',
  includeAirconditioner: 'מזגן',
  includeBuildingShelter: 'ממ״ד',
  isRenovated: 'משופץ',
  isImmediateEntrance: 'כניסה מיידית',
  isAssetExclusive: 'בלעדי',
};
const GROUPS = [
  { id: 'five', label: '5 חדרים', params: { ...AREA, minRooms: 5, maxRooms: 5 } },
  { id: 'six', label: '6+ חדרים', params: { ...AREA, minRooms: 6, maxRooms: 10 } },
];

const REAL_PRICE_MIN = 100000;

const ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ENTITIES[c]);

const shekels = (n) => (n ? '₪' + n.toLocaleString('en-US') : 'ללא מחיר');

const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted.length ? sorted[Math.floor(sorted.length / 2)] : 0;
};

const normalize = (ad, group) => {
  const details = ad.additionalDetails ?? {};
  const address = ad.address ?? {};
  const sqm = details.squareMeter ?? 0;
  return {
    group,
    price: ad.price ?? 0,
    rooms: details.roomsCount ?? 0,
    sqm,
    perSqm: ad.price && sqm ? Math.round(ad.price / sqm) : 0,
    floor: address.house?.floor,
    street: address.street?.text ?? '',
    houseNumber: address.house?.number,
    type: details.property?.text ?? '',
    cover: ad.metaData?.coverImage ?? '',
    imageCount: ad.metaData?.images?.length ?? 0,
    agency: ad.customer?.agencyName ?? '',
    amenities: Object.entries(ad.inProperty ?? {})
      .filter(([key, value]) => value && key in AMENITY_LABELS)
      .map(([key]) => AMENITY_LABELS[key]),
    url: `https://www.yad2.co.il/realestate/item/${ad.token}`,
  };
};

const streetLine = (l) =>
  l.street ? l.street + (l.houseNumber ? ' ' + l.houseNumber : '') : 'רחוב לא צוין';

const shot = (l) => `
    <a class="shot" href="${esc(l.url)}" target="_blank" rel="noopener">
      ${l.cover ? `<img loading="lazy" src="${esc(l.cover)}" alt="${esc(l.street || l.type)}">` : '<div class="noshot">אין תמונה</div>'}
      ${l.imageCount > 1 ? `<span class="count">${l.imageCount} תמונות</span>` : ''}
      ${l.type ? `<span class="type">${esc(l.type)}</span>` : ''}
    </a>`;

const card = (l) => `
  <article class="card" data-group="${l.group}" data-price="${l.price}" data-sqm="${l.sqm}" data-per="${l.perSqm}">
    ${shot(l)}
    <div class="body">
      <div class="price">${esc(shekels(l.price))}</div>
      <div class="facts">
        <span><b>${esc(l.rooms)}</b> חדרים</span>
        <span><b>${esc(l.sqm || '?')}</b> מ״ר</span>
        <span>קומה <b>${esc(l.floor ?? '?')}</b></span>
      </div>
      <div class="where">${esc(streetLine(l))}${l.agency ? ' · ' + esc(l.agency) : ''}</div>
      ${l.amenities.length ? `<div class="amenities">${l.amenities.map((a) => `<span>${esc(a)}</span>`).join('')}</div>` : ''}
      ${l.price && l.price < REAL_PRICE_MIN ? '<div class="warn">מחיר לא ריאלי במודעה</div>' : ''}
      <div class="foot">
        <span class="per">${l.perSqm ? esc(shekels(l.perSqm)) + ' למ״ר' : ''}</span>
        <a href="${esc(l.url)}" target="_blank" rel="noopener">למודעה ↗</a>
      </div>
    </div>
  </article>`;

const statsFor = (listings) => {
  const priced = listings.filter((l) => l.price >= REAL_PRICE_MIN);
  const prices = priced.map((l) => l.price);
  const perSqm = priced.filter((l) => l.perSqm).map((l) => l.perSqm);
  return [
    ['מודעות', String(listings.length)],
    ['הזול ביותר', shekels(Math.min(...prices))],
    ['היקר ביותר', shekels(Math.max(...prices))],
    ['חציון', shekels(median(prices))],
    ['חציון למ״ר', shekels(median(perSqm))],
  ];
};

const STYLE = `
  :root {
    --bg: #f7f4ef; --panel: #fffdfa; --ink: #1b1916; --muted: #6f675e;
    --line: #e5ded3; --accent: #b0431e; --accent-soft: #f6ebe4; --shadow: rgba(27,25,22,.10);
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --bg: #15140f; --panel: #201e18; --ink: #f2ece3; --muted: #a49a8c;
      --line: #322d25; --accent: #ee8452; --accent-soft: #2b221c; --shadow: rgba(0,0,0,.5);
    }
  }
  :root[data-theme="dark"] {
    --bg: #15140f; --panel: #201e18; --ink: #f2ece3; --muted: #a49a8c;
    --line: #322d25; --accent: #ee8452; --accent-soft: #2b221c; --shadow: rgba(0,0,0,.5);
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; direction: rtl; background: var(--bg); color: var(--ink);
    font-family: 'Heebo', 'Segoe UI', system-ui, sans-serif;
    padding: clamp(20px, 4vw, 56px);
  }
  header, .bar, .grid, footer { max-width: 1280px; margin-inline: auto; }
  .eyebrow { color: var(--accent); font-weight: 600; letter-spacing: .14em; font-size: .72rem; }
  h1 { font-size: clamp(2.2rem, 6vw, 3.6rem); font-weight: 800; margin: .16em 0 .12em; letter-spacing: -.02em; }
  .sub { color: var(--muted); max-width: 62ch; margin: 0; }
  .filters { color: var(--accent); font-size: .82rem; font-weight: 600; margin: 8px 0 0; }
  .stats { display: flex; flex-wrap: wrap; gap: 10px; margin: 26px 0 34px; }
  .stat { background: var(--panel); border: 1px solid var(--line); border-radius: 13px; padding: 11px 17px; box-shadow: 0 1px 2px var(--shadow); }
  .stat span { display: block; color: var(--muted); font-size: .7rem; letter-spacing: .09em; margin-bottom: 2px; }
  .stat b { font-size: 1.08rem; font-weight: 600; white-space: nowrap; }
  .bar { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 22px; }
  button {
    font: inherit; font-size: .87rem; cursor: pointer; border-radius: 999px;
    border: 1px solid var(--line); background: var(--panel); color: var(--ink); padding: 8px 16px;
  }
  button[aria-pressed="true"] { background: var(--accent); border-color: var(--accent); color: #fff; }
  .spacer { flex: 1; min-width: 12px; }
  .grid { display: grid; gap: 20px; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
  .card { background: var(--panel); border: 1px solid var(--line); border-radius: 17px; overflow: hidden; box-shadow: 0 2px 10px var(--shadow); display: flex; flex-direction: column; }
  .shot { position: relative; display: block; flex: none; aspect-ratio: 4/3; background: var(--accent-soft); overflow: hidden; }
  .shot img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .noshot { display: grid; place-items: center; height: 100%; color: var(--muted); font-size: .85rem; }
  .count, .type { position: absolute; bottom: 10px; font-size: .69rem; padding: 4px 9px; border-radius: 999px; color: #fff; }
  .count { inset-inline-start: 10px; background: rgba(18,16,13,.72); }
  .type { inset-inline-end: 10px; background: var(--accent); }
  .body { padding: 15px 17px 17px; display: flex; flex-direction: column; gap: 9px; flex: 1; }
  .price { font-size: 1.38rem; font-weight: 800; letter-spacing: -.01em; }
  .facts { display: flex; gap: 14px; flex-wrap: wrap; color: var(--muted); font-size: .85rem; }
  .facts b { color: var(--ink); font-weight: 600; }
  .where { color: var(--muted); font-size: .9rem; }
  .warn { color: var(--accent); font-size: .74rem; font-weight: 600; }
  .amenities { display: flex; flex-wrap: wrap; gap: 5px; }
  .amenities span { font-size: .7rem; padding: 2px 8px; border-radius: 999px; background: var(--accent-soft); color: var(--ink); }
  .foot { margin-top: auto; padding-top: 11px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; align-items: center; gap: 8px; }
  .per { color: var(--muted); font-size: .77rem; }
  .foot a { color: var(--accent); text-decoration: none; font-size: .82rem; font-weight: 600; }
  .foot a:hover { text-decoration: underline; }
  footer { margin-top: 40px; color: var(--muted); font-size: .78rem; border-top: 1px solid var(--line); padding-top: 16px; }
  .hidden { display: none !important; }`;

const SCRIPT = `
  const grid = document.querySelector('.grid');
  const cards = [...grid.children];
  const state = { filter: 'all', sort: 'price' };

  const press = (group, value) =>
    document.querySelectorAll('[data-' + group + ']').forEach((b) =>
      b.setAttribute('aria-pressed', String(b.dataset[group] === value)));

  const apply = () => {
    cards.forEach((c) =>
      c.classList.toggle('hidden', state.filter !== 'all' && c.dataset.group !== state.filter));
    const descending = state.sort === 'sqm';
    const value = (c) => Number(c.dataset[state.sort]) || (descending ? -1 : Infinity);
    [...cards]
      .sort((a, b) => (descending ? value(b) - value(a) : value(a) - value(b)))
      .forEach((c) => grid.appendChild(c));
  };

  document.querySelectorAll('[data-filter]').forEach((b) =>
    b.addEventListener('click', () => { state.filter = b.dataset.filter; press('filter', state.filter); apply(); }));
  document.querySelectorAll('[data-sort]').forEach((b) =>
    b.addEventListener('click', () => { state.sort = b.dataset.sort; press('sort', state.sort); apply(); }));

  apply();`;

const page = (listings, described) => `<title>כרמליה · חיפה</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;800&display=swap" rel="stylesheet">
<style>${STYLE}
</style>

<header>
  <div class="eyebrow">חיפה · שכונת כרמליה</div>
  <h1>דירות למכירה בכרמליה</h1>
  <p class="sub">כל המודעות הפעילות בשכונה, 5 חדרים ומעלה — נאסף ישירות מ־Yad2.</p>
  <p class="filters">${esc(described.join(' · '))}</p>
  <div class="stats">
    ${statsFor(listings)
      .map(([label, value]) => `<div class="stat"><span>${esc(label)}</span><b>${esc(value)}</b></div>`)
      .join('\n    ')}
  </div>
</header>

<div class="bar">
  <button data-filter="all" aria-pressed="true">הכל</button>
  ${GROUPS.map((g) => `<button data-filter="${g.id}" aria-pressed="false">${esc(g.label)}</button>`).join('\n  ')}
  <span class="spacer"></span>
  <button data-sort="price" aria-pressed="true">מחיר ↑</button>
  <button data-sort="per" aria-pressed="false">מחיר למ״ר ↑</button>
  <button data-sort="sqm" aria-pressed="false">שטח ↓</button>
</div>

<main class="grid">${listings.map(card).join('')}
</main>

<footer>${listings.length} מודעות · נוצר ${new Date().toLocaleString('he-IL')} · נתונים ומחירים כפי שפורסמו ב־Yad2 · הסטטיסטיקה מתעלמת ממודעות שבהן המחיר אינו ריאלי</footer>

<script>${SCRIPT}
</script>`;

const labels = await y2.labels.realestate(RealestateDeal.ForSale, AREA);
const described = Object.values(labels)
  .filter(isFilterLabels)
  .flatMap((entry) => entry.map((label) => label.title));

const collected = await Promise.all(
  GROUPS.map(async (group) => {
    const ads = await y2.realestate.forSale.all(group.params, { maxPages: 5 });
    return ads.map((ad) => normalize(ad, group.id));
  }),
);

const listings = collected.flat();
await writeFile(out, page(listings, described), 'utf8');
console.log(`wrote ${out} (${listings.length} listings)`);
