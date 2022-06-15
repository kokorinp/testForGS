import produce from 'immer';

import { FlightsAction } from '../types/flights/action';
import { FlightsState } from '../types/flights/state';
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
import FlightsSort from '../utils/FlightsSortUtils';
import { FlightsFilterDefault, FlightsFilter } from '../utils/FlightsFilterUtils';
import { LoadingCarriers } from '../utils/LoadingCarriers';

const initialState: FlightsState = {
  flights: [],
  sort: 1,
  filters: {
    NoTransfer: false,
    OneTransfer: false,
    PriceFrom: 0,
    PriceTo: 100000,
    Carriers: [],
  },
  carriers: [],
  showflights: 5,
};

const flightsReducer = (state: FlightsState = initialState, action: FlightsAction) =>
  produce(state, (draft: FlightsState) => {
    switch (action.type) {
      case FLIGHTS_LOAD_SUCCESS: {
        return {
          ...draft,
          flights: FlightsFilterDefault(action.flights || []),
          carriers: LoadingCarriers(action.flights || []),
        };
      }

      case FLIGHTS_SORT: {
        // return { ...draft, flights: FlightsSort([...draft.flights], action.sort || 1), sort: action.sort || 1 };
        return { ...draft, flights: FlightsSort([...draft.flights], action.sort || 1), sort: action.sort || 1 };
      }

      case FLIGHTS_FILTER_NO_TRANSFER: {
        return {
          ...draft,
          flights: FlightsFilter([...draft.flights], {
            ...draft.filters,
            NoTransfer: Boolean(action.filter) || false,
          }),
          filters: { ...draft.filters, NoTransfer: action.filter || false },
        };
      }

      case FLIGHTS_FILTER_ONE_TRANSFER: {
        return {
          ...draft,
          flights: FlightsFilter([...draft.flights], {
            ...draft.filters,
            OneTransfer: Boolean(action.filter) || false,
          }),
          filters: { ...draft.filters, OneTransfer: action.filter || false },
        };
      }

      case FLIGHTS_FILTER_PRICE_FROM_TO: {
        return {
          ...draft,
          flights: FlightsFilter([...draft.flights], {
            ...draft.filters,
            PriceFrom: action.filterPriceFrom || 0,
            PriceTo: action.filterPriceTo || 100000,
          }),
          filters: {
            ...draft.filters,
            PriceFrom: action.filterPriceFrom || 0,
            PriceTo: action.filterPriceTo || 100000,
          },
        };
      }

      case FLIGHTS_FILTER_CARRIERS: {
        const CarriersArray = action.filter
          ? action.filterCarrier
            ? [...draft.filters.Carriers, action.filterCarrier]
            : [...draft.filters.Carriers]
          : [...draft.filters.Carriers.filter((e: string) => e !== action.filterCarrier)];

        return {
          ...draft,
          filters: { ...draft.filters, Carriers: CarriersArray },
          flights: FlightsFilter([...draft.flights], {
            ...draft.filters,
            Carriers: CarriersArray,
          }),
        };
      }

      case FLIGHTS_ADD_SHOW_FLIGHTS: {
        return {
          ...draft,
          showflights: action.showflights || 5,
        };
      }

      case FLIGHTS_LOAD: {
        return state;
      }

      default:
        return state;
    }
  });

export default flightsReducer;
