import produce from 'immer';

import { FlightsAction } from '../types/flights/action';
import { FlightsState } from '../types/flights/state';
import { FLIGHTS_LOAD, FLIGHTS_LOAD_SUCCESS } from '../const/flights/actions';

const initialState: FlightsState = {
  flights: [1, 2, 3],
};

const flightsReducer = (state: FlightsState = initialState, action: FlightsAction) =>
  produce(state, (draft: FlightsState) => {
    console.log('flightsReducer');
    switch (action.type) {
      case FLIGHTS_LOAD_SUCCESS: {
        return { ...draft, flights: action.flights };
      }
      case FLIGHTS_LOAD: {
        console.log('FLIGHTS_LOAD');
        return state;
        // return { flights: [78, 11, 123] };
      }
      default:
        return state;
    }
  });

export default flightsReducer;
