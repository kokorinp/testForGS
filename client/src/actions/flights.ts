import { FLIGHTS_LOAD, FLIGHTS_LOAD_SUCCESS, FLIGHTS_SORT } from '../const/flights/actions';
import Action, { ActionFunc } from '../types/action';
import { FlightsAction, FlightsActionSortFunc, FlightsActionSuccessFunc } from '../types/flights/action';
import { ResponsMockAPI } from '../types/api/mock';

export const flightsLoadAction: ActionFunc = (): Action => ({
  type: FLIGHTS_LOAD,
});

export const flightsSuccessAction: FlightsActionSuccessFunc = (flights: ResponsMockAPI): FlightsAction => ({
  type: FLIGHTS_LOAD_SUCCESS,
  flights: flights.result.flights,
});

export const flightsSortAction: FlightsActionSortFunc = (sort: number): FlightsAction => ({
  type: FLIGHTS_SORT,
  sort,
});
