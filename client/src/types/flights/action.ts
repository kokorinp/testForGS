import Action from '../action';
import { ResponsMockAPI, ResponsMockAPIFlights } from '../api/mock';

export interface FlightsAction extends Action {
  flights?: ResponsMockAPIFlights;
  sort?: number;
}

export interface FlightsActionSuccessFunc {
  (flights: ResponsMockAPI): FlightsAction;
}

export interface FlightsActionSortFunc {
  (sort: number): FlightsAction;
}
