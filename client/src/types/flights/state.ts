import { ResponsMockAPICarriers, ResponsMockAPIFlights } from '../api/mock';

export type CarriersFiltersState = Array<string>;

export interface FiltersState {
  NoTransfer: boolean;
  OneTransfer: boolean;
  PriceFrom: number;
  PriceTo: number;
  Carriers: CarriersFiltersState;
}

export interface FlightsState {
  flights: ResponsMockAPIFlights;
  carriers: ResponsMockAPICarriers;
  sort: number;
  filters: FiltersState;
  showflights: number;
}
