import {
  createBrowserClient,
  createCurlClient,
  createHttpClient,
  createNodeClient,
  createResilientClient,
  type Yad2Client,
} from '../client.js';

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

const kindFor = (flags: ClientFlags): TransportKind => {
  if (flags.transport) return flags.transport as TransportKind;
  return flags.port ? TransportKind.Resilient : TransportKind.Node;
};

export const clientFrom = (flags: ClientFlags): Yad2Client => {
  const port = toNumber(flags.port);
  const minIntervalMs = toNumber(flags.interval);
  const intervals = minIntervalMs === undefined ? {} : { minIntervalMs };

  switch (kindFor(flags)) {
    case TransportKind.Http:
      return createHttpClient(intervals);
    case TransportKind.Curl:
      return createCurlClient(intervals);
    case TransportKind.Browser:
      return createBrowserClient(port === undefined ? {} : { port });
    case TransportKind.Resilient:
      return createResilientClient({ browser: port === undefined ? {} : { port } });
    default:
      return createNodeClient({ curl: intervals });
  }
};
