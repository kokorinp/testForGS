export interface ResponsMockAPICityAirportService {
  uid: string;
  caption: string;
}

export interface ResponsMockAPISegment {
  aircraft: ResponsMockAPICityAirportService;
  airline: ResponsMockAPICarrier;
  arrivalAirport: ResponsMockAPICityAirportService;
  arrivalCity: ResponsMockAPICityAirportService;
  arrivalDate: string;
  classOfService: ResponsMockAPICityAirportService;
  classOfServiceCode: string;
  departureAirport: ResponsMockAPICityAirportService;
  departureCity: ResponsMockAPICityAirportService;
  departureDate: string;
  flightNumber: string;
  starting: boolean;
  stops: number;
  techStopInfos: Array<any>;
  travelDuration: number;
}

export type ResponsMockAPISegments = Array<ResponsMockAPISegment>;

export interface ResponsMockAPILeg {
  duration: number;
  segments: ResponsMockAPISegments;
}

export type ResponsMockAPILegs = Array<ResponsMockAPILeg>;

export interface ResponsMockAPIPriceTotal {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface ResponsMockAPIPrice {
  total: ResponsMockAPIPriceTotal;
}

export interface ResponsMockAPICarrier {
  airlineCode: string;
  caption: string;
  uid: string;
}

export interface ResponsMockAPIFlight {
  carrier: ResponsMockAPICarrier;
  legs: ResponsMockAPILegs;
  price: ResponsMockAPIPrice;
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
