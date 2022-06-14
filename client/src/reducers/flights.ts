import produce from 'immer';

import { FlightsAction } from '../types/flights/action';
import { FlightsState } from '../types/flights/state';
import { FLIGHTS_LOAD, FLIGHTS_LOAD_SUCCESS, FLIGHTS_SORT } from '../const/flights/actions';
import FlightsSort from '../utils/FlightsSortUtils';

const initialState: FlightsState = {
  flights: [],
  sort: 1,
};

const flightsReducer = (state: FlightsState = initialState, action: FlightsAction) =>
  produce(state, (draft: FlightsState) => {
    switch (action.type) {
      case FLIGHTS_LOAD_SUCCESS: {
        return { ...draft, flights: action.flights || [] };
      }
      case FLIGHTS_SORT: {
        // return { ...draft, flights: FlightsSort([...draft.flights], action.sort || 1), sort: action.sort || 1 };
        return { flights: FlightsSort([...draft.flights], action.sort || 1), sort: action.sort || 1 };
      }
      case FLIGHTS_LOAD: {
        return state;
      }
      default:
        return state;
    }
  });

export default flightsReducer;
