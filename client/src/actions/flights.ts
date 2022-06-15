import {
  FLIGHTS_ADD_SHOW_FLIGHTS,
  FLIGHTS_FILTER_CARRIERS,
  FLIGHTS_FILTER_NO_TRANSFER,
  FLIGHTS_FILTER_ONE_TRANSFER,
  FLIGHTS_FILTER_PRICE_FROM_TO,
  FLIGHTS_LOAD,
  FLIGHTS_LOAD_SUCCESS,
  FLIGHTS_SORT,
} from '../const/flights/actions';
import Action, { ActionFunc } from '../types/action';
import {
  FlightsAction,
  FlightsActionAddShowFlightsFunc,
  FlightsActionFilterCarrierFunc,
  FlightsActionFilterFunc,
  FlightsActionFilterPriceFunc,
  FlightsActionSortFunc,
  FlightsActionSuccessFunc,
} from '../types/flights/action';
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

export const flightsFilterNoTransferAction: FlightsActionFilterFunc = (filter: boolean): FlightsAction => ({
  type: FLIGHTS_FILTER_NO_TRANSFER,
  filter,
});

export const flightsFilterOneTransferAction: FlightsActionFilterFunc = (filter: boolean): FlightsAction => ({
  type: FLIGHTS_FILTER_ONE_TRANSFER,
  filter,
});

export const flightsFilterPriceFromToAction: FlightsActionFilterPriceFunc = (
  filterPriceFrom: number,
  filterPriceTo: number,
): FlightsAction => ({
  type: FLIGHTS_FILTER_PRICE_FROM_TO,
  filterPriceFrom,
  filterPriceTo,
});

export const flightsFilterCarrierAction: FlightsActionFilterCarrierFunc = (
  filter: boolean,
  filterCarrier: string,
): FlightsAction => ({
  type: FLIGHTS_FILTER_CARRIERS,
  filter,
  filterCarrier,
});

export const flightsAddShowFlightsAction: FlightsActionAddShowFlightsFunc = (showflights: number): FlightsAction => ({
  type: FLIGHTS_ADD_SHOW_FLIGHTS,
  showflights,
});
