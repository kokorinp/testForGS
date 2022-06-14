import Action from '../action';
import { ResponsMockAPI, ResponsMockAPIFlights } from '../api/mock';

export interface FlightsAction extends Action {
  flights: ResponsMockAPIFlights;
}

export interface FlightsActionSuccessFunc {
  (flights: ResponsMockAPI): FlightsAction;
}
