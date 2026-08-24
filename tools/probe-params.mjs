import { createBrowserTransport } from '../dist/core/transports/browser-transport.js';

const supplied = process.env.PWHS_PORT ?? process.argv[2];
const transport = createBrowserTransport(
  supplied ? { port: Number(supplied), minIntervalMs: 600 } : { minIntervalMs: 600 },
);

const GATEWAY = 'https://gw.yad2.co.il';

export const raw = async (path, params = {}) => {
  const query = new URLSearchParams(
    Object.entries(params).map(([k, v]) => [k, String(v)]),
  ).toString();
  const { status, body } = await transport.request(`${GATEWAY}${path}${query ? '?' + query : ''}`);
  let json = null;
  try {
    json = JSON.parse(body);
  } catch {
    return { status, blocked: /Captcha|__uzdbm/.test(body), body: body.slice(0, 200) };
  }
  return { status, json };
};

const NOT_ALLOWED = /([A-Za-z_][A-Za-z0-9_]*) is not allowed/g;
const MUST_MATCH = /([A-Za-z_][A-Za-z0-9_]*) (with value .*?fails|must be|failed custom)/g;

export const probeParams = async (path, base, candidates, probeValue = '1') => {
  const params = { ...base };
  for (const c of candidates) if (!(c in params)) params[c] = probeValue;

  const { status, json } = await raw(path, params);
  const message = typeof json?.message === 'string' ? json.message : '';

  const rejected = new Set();
  for (const [, name] of message.matchAll(NOT_ALLOWED)) rejected.add(name);

  const malformed = new Set();
  for (const [, name] of message.matchAll(MUST_MATCH)) if (!rejected.has(name)) malformed.add(name);

  const accepted = candidates.filter((c) => !rejected.has(c));
  return {
    status,
    accepted,
    rejected: [...rejected],
    malformed: [...malformed],
    message: message.slice(0, 400),
  };
};

export const report = (title, result) => {
  console.log(`\n### ${title}  (HTTP ${result.status})`);
  console.log(`accepted  (${result.accepted.length}): ${result.accepted.join(', ') || '—'}`);
  console.log(`rejected  (${result.rejected.length}): ${result.rejected.join(', ') || '—'}`);
  if (result.malformed.length) console.log(`wrong-type: ${result.malformed.join(', ')}`);
};
