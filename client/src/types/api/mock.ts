export interface ResponsMockAPIFlight {
  carrier: {};
  legs: Array<{}>;
  price: {};
}

export interface ResponsMockAPIFlightWrapper {
  flightToken: string;
  hasExtendedFare: boolean;
  flight: ResponsMockAPIFlight;
}

export type ResponsMockAPIFlights = Array<ResponsMockAPIFlightWrapper>;

export interface ResponsMockAPIResult {
  bestPrices: any;
  flights: ResponsMockAPIFlights;
}

export interface ResponsMockAPI {
  result: ResponsMockAPIResult;
}
