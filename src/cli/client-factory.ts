import {
  createBrowserClient,
  createCurlClient,
  createHttpClient,
  createNodeClient,
  createResilientClient,
  type Yad2Client,
} from '../client.js';
import { Yad2Error } from '../core/errors.js';

export enum TransportKind {
  Node = 'node',
  Http = 'http',
  Curl = 'curl',
  Browser = 'browser',
  Resilient = 'resilient',
}

export interface ClientFlags {
  readonly transport?: string;
  readonly port?: string | boolean;
  readonly interval?: string | boolean;
}

const toNumber = (value: string | boolean | undefined): number | undefined =>
  typeof value === 'string' ? Number(value) : undefined;

const isTransportKind = (value: string): value is TransportKind =>
  (Object.values(TransportKind) as string[]).includes(value);

const kindFor = (flags: ClientFlags): TransportKind => {
  if (!flags.transport) return flags.port ? TransportKind.Resilient : TransportKind.Node;
  if (!isTransportKind(flags.transport)) {
    throw new Yad2Error(
      `Unknown --transport "${flags.transport}". Use ${Object.values(TransportKind).join(', ')}.`,
    );
  }
  return flags.transport;
};

export const clientFrom = (flags: ClientFlags): Yad2Client => {
  const port = toNumber(flags.port);
  const minIntervalMs = toNumber(flags.interval);
  const intervals = minIntervalMs === undefined ? {} : { minIntervalMs };
  // --interval is the throttle that keeps a long run inside the bot-protection budget,
  // so it has to reach the browser leg too — that is the one doing sustained work.
  const browser = { ...intervals, ...(port === undefined ? {} : { port }) };

  switch (kindFor(flags)) {
    case TransportKind.Http:
      return createHttpClient(intervals);
    case TransportKind.Curl:
      return createCurlClient(intervals);
    case TransportKind.Browser:
      return createBrowserClient(browser);
    case TransportKind.Resilient:
      return createResilientClient({ browser, http: intervals, curl: intervals });
    default:
      return createNodeClient({ fetch: intervals, curl: intervals });
  }
};
