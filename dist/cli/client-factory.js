import { createBrowserClient, createCurlClient, createHttpClient, createNodeClient, createResilientClient, } from '../client.js';
export var TransportKind;
(function (TransportKind) {
    TransportKind["Node"] = "node";
    TransportKind["Http"] = "http";
    TransportKind["Curl"] = "curl";
    TransportKind["Browser"] = "browser";
    TransportKind["Resilient"] = "resilient";
})(TransportKind || (TransportKind = {}));
const toNumber = (value) => typeof value === 'string' ? Number(value) : undefined;
const kindFor = (flags) => {
    if (flags.transport)
        return flags.transport;
    return flags.port ? TransportKind.Resilient : TransportKind.Node;
};
export const clientFrom = (flags) => {
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
