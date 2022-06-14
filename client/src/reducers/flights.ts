import produce from 'immer';

import { FlightsAction } from '../types/flights/action';
import { FlightsState } from '../types/flights/state';
import { FLIGHTS_LOAD, FLIGHTS_LOAD_SUCCESS } from '../const/flights/actions';

const initialState: FlightsState = {
  flights: [],
};

const flightsReducer = (state: FlightsState = initialState, action: FlightsAction) =>
  produce(state, (draft: FlightsState) => {
    switch (action.type) {
      case FLIGHTS_LOAD_SUCCESS: {
        return { ...draft, flights: action.flights };
      }
      case FLIGHTS_LOAD: {
        return state;
      }
      default:
        return state;
    }
  });

export default flightsReducer;
