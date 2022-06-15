import Action from '../action';
import { ResponsMockAPI, ResponsMockAPIFlights } from '../api/mock';

export interface FlightsAction extends Action {
  flights?: ResponsMockAPIFlights;
  sort?: number;
  filter?: boolean;
  filterPriceFrom?: number;
  filterPriceTo?: number;
  filterCarrier?: string;
  showflights?: number;
}

export interface FlightsActionSuccessFunc {
  (flights: ResponsMockAPI): FlightsAction;
}

export interface FlightsActionSortFunc {
  (sort: number): FlightsAction;
}

export interface FlightsActionFilterFunc {
  (filter: boolean): FlightsAction;
}

export interface FlightsActionFilterPriceFunc {
  (filterPriceFrom: number, filterPriceTo: number): FlightsAction;
}

export interface FlightsActionFilterCarrierFunc {
  (filter: boolean, filterCarrier: string): FlightsAction;
}
export interface FlightsActionAddShowFlightsFunc {
  (showflights: number): FlightsAction;
}
