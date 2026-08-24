const PARAMS = Symbol.for('yad2.params');
export const withParams = (fn, schema) => Object.defineProperty(fn, PARAMS, { value: schema, enumerable: false });
export const paramsOf = (fn) => typeof fn === 'function' ? fn[PARAMS] : undefined;
const ROWS = Symbol.for('yad2.rows');
/**
 * Teach a method how to reduce its own result to a list of records. `search` returns a
 * raw bucketed feed; column output (`--fields`) wants the listings inside it, and each
 * vertical already knows which buckets those are.
 */
export const withRows = (fn, rows) => Object.defineProperty(fn, ROWS, { value: rows, enumerable: false });
export const rowsOf = (fn) => typeof fn === 'function' ? fn[ROWS] : undefined;
