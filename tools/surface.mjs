import * as sdk from '../dist/index.js';
import { discover } from '../dist/cli/reflect.js';

const client = sdk.createYad2Client({ transport: { request: async () => ({ status: 200, body: '{}' }) } });

const methods = discover(client);
const grouped = methods.reduce((acc, { path }) => {
  const [resource] = path.split('.');
  (acc[resource] ??= []).push(path.slice(resource.length + 1));
  return acc;
}, {});

console.log('# Resources\n');
for (const [resource, paths] of Object.entries(grouped)) {
  console.log(`${resource.padEnd(14)} ${paths.join(', ')}`);
}

const enums = Object.entries(sdk).filter(
  ([name, value]) =>
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    /^[A-Z]/.test(name) &&
    Object.values(value).every((v) => ['string', 'number'].includes(typeof v)) &&
    Object.keys(value).length > 1 &&
    !name.endsWith('Schema'),
);

console.log('\n# Enums\n');
for (const [name, value] of enums) {
  const members = Object.keys(value).filter((k) => Number.isNaN(Number(k)));
  console.log(`${name.padEnd(22)} ${members.length} · ${members.slice(0, 6).join(', ')}${members.length > 6 ? ' …' : ''}`);
}

const schemas = Object.keys(sdk).filter((k) => k.endsWith('Schema'));
const errors = Object.keys(sdk).filter((k) => k.startsWith('Yad2') && k.endsWith('Error'));

console.log('\n# Totals\n');
console.log(`resources   ${Object.keys(grouped).length}`);
console.log(`methods     ${methods.length}`);
console.log(`enums       ${enums.length}`);
console.log(`schemas     ${schemas.length}`);
console.log(`errors      ${errors.join(', ')}`);
console.log(`exports     ${Object.keys(sdk).length}`);
