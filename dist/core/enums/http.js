export var HttpHeader;
(function (HttpHeader) {
    HttpHeader["UserAgent"] = "user-agent";
    HttpHeader["Accept"] = "accept";
    HttpHeader["ContentType"] = "content-type";
})(HttpHeader || (HttpHeader = {}));
export var MediaType;
(function (MediaType) {
    MediaType["Json"] = "application/json";
    MediaType["OctetStream"] = "application/octet-stream";
})(MediaType || (MediaType = {}));
export var HttpMethod;
(function (HttpMethod) {
    HttpMethod["Get"] = "GET";
    HttpMethod["Post"] = "POST";
})(HttpMethod || (HttpMethod = {}));
export var ProcessEvent;
(function (ProcessEvent) {
    ProcessEvent["Exit"] = "exit";
    ProcessEvent["Error"] = "error";
    ProcessEvent["Data"] = "data";
    ProcessEvent["Close"] = "close";
})(ProcessEvent || (ProcessEvent = {}));
export var StdioMode;
(function (StdioMode) {
    StdioMode["Ignore"] = "ignore";
    StdioMode["Pipe"] = "pipe";
})(StdioMode || (StdioMode = {}));
export var Signal;
(function (Signal) {
    Signal["Kill"] = "SIGKILL";
})(Signal || (Signal = {}));
/** Client members that are lifecycle helpers rather than part of the search surface. */
export var ClientLifecycle;
(function (ClientLifecycle) {
    ClientLifecycle["Dispose"] = "dispose";
})(ClientLifecycle || (ClientLifecycle = {}));
