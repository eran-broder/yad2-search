import { raw } from './probe-params.mjs';

const totalOf = async (path, params) => {
  const { json } = await raw(path, params);
  const data = json?.data;
  return data?.pagination?.total ?? data?.total ?? (json?.message ? `ERR:${String(json.message).slice(0, 60)}` : null);
};

export const measureEffects = async (path, base, cases) => {
  const baseline = await totalOf(path, base);
  console.log(`baseline: ${baseline}\n`);
  const rows = [];
  for (const [label, extra] of cases) {
    const total = await totalOf(path, { ...base, ...extra });
    const effect =
      typeof total !== 'number' ? 'ERROR' : total === baseline ? 'no effect' : 'FILTERS';
    rows.push({ label, total, effect });
    console.log(`${effect.padEnd(10)} ${String(total).padStart(8)}  ${label}`);
  }
  return { baseline, rows };
};
