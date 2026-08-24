import { createBrowserClient, createCurlClient, createHttpClient, createNodeClient, createResilientClient, } from '../client.js';
import { Yad2Error } from '../core/errors.js';
export var TransportKind;
(function (TransportKind) {
    TransportKind["Node"] = "node";
    TransportKind["Http"] = "http";
    TransportKind["Curl"] = "curl";
    TransportKind["Browser"] = "browser";
    TransportKind["Resilient"] = "resilient";
})(TransportKind || (TransportKind = {}));
const toNumber = (value) => typeof value === 'string' ? Number(value) : undefined;
const isTransportKind = (value) => Object.values(TransportKind).includes(value);
const kindFor = (flags) => {
    if (!flags.transport)
        return flags.port ? TransportKind.Resilient : TransportKind.Node;
    if (!isTransportKind(flags.transport)) {
        throw new Yad2Error(`Unknown --transport "${flags.transport}". Use ${Object.values(TransportKind).join(', ')}.`);
    }
    return flags.transport;
};
export const clientFrom = (flags) => {
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
