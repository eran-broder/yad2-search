export interface TransportResponse {
  readonly status: number;
  readonly body: string;
}

export interface Transport {
  request(url: string): Promise<TransportResponse>;
}
