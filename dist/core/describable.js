const PARAMS = Symbol.for('yad2.params');
export const withParams = (fn, schema) => Object.defineProperty(fn, PARAMS, { value: schema, enumerable: false });
export const paramsOf = (fn) => typeof fn === 'function' ? fn[PARAMS] : undefined;
