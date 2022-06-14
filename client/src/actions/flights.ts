import { FLIGHTS_LOAD, FLIGHTS_LOAD_SUCCESS } from '../const/flights/actions';
import Action, { ActionFunc } from '../types/action';
import { FlightsAction, FlightsActionSuccessFunc } from '../types/flights/action';
import { ResponsMockAPI } from '../types/api/mock';

export const flightsLoadAction: ActionFunc = (): Action => ({
  type: FLIGHTS_LOAD,
});

export const flightsSuccessAction: FlightsActionSuccessFunc = (flights: ResponsMockAPI): FlightsAction => ({
  type: FLIGHTS_LOAD_SUCCESS,
  flights: flights.result.flights,
});
