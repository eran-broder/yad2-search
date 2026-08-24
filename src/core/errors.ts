import type { ParamContext } from './params.js';

export class Yad2Error extends Error {}

export class Yad2RequestError extends Yad2Error {
  constructor(
    readonly status: number,
    readonly path: string,
    readonly detail: string,
  ) {
    super(`Yad2 ${status} on ${path}: ${detail}`);
  }
}

export class Yad2BlockedError extends Yad2Error {
  constructor(readonly path: string) {
    super(
      `Yad2 bot protection challenged the request to ${path}. ` +
        `The cooldown is sticky and applies to the browser transport too, so retrying ` +
        `immediately will not help — wait a few minutes, then slow the request rate ` +
        `(createResilientClient({ browser: { minIntervalMs: 2000 } })).`,
    );
  }
}

export class Yad2SchemaError extends Yad2Error {
  constructor(
    readonly path: string,
    readonly issues: string,
  ) {
    super(`Yad2 response from ${path} did not match schema: ${issues}`);
  }
}

export class Yad2ParamsError extends Yad2Error {
  constructor(
    readonly context: ParamContext,
    readonly issues: string,
  ) {
    super(`Invalid ${context} params: ${issues}`);
  }
}

export class Yad2NotFoundError extends Yad2Error {
  constructor(readonly what: string) {
    super(`No Yad2 match for ${what}`);
  }
}
