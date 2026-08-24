export enum HttpHeader {
  UserAgent = 'user-agent',
  Accept = 'accept',
  ContentType = 'content-type',
}

export enum MediaType {
  Json = 'application/json',
  OctetStream = 'application/octet-stream',
}

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
}

export enum ProcessEvent {
  Exit = 'exit',
  Error = 'error',
  Data = 'data',
  Close = 'close',
}

export enum StdioMode {
  Ignore = 'ignore',
  Pipe = 'pipe',
}

export enum Signal {
  Kill = 'SIGKILL',
}

/** Client members that are lifecycle helpers rather than part of the search surface. */
export enum ClientLifecycle {
  Dispose = 'dispose',
}
