import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './Content.scss';
import State from '../../../types/state';
import { flightsLoadAction } from '../../../actions/flights';
import { FlightsState } from '../../../types/flights/state';
import { ActionFunc } from '../../../types/action';
import { ResponsMockAPIFlightWrapper } from '../../../types/api/mock';
import Flight from './Flight/Flight';

interface Props {
  flights: FlightsState;
  loadFlights: ActionFunc;
}

function Content({ flights, loadFlights }: Props): ReactElement {
  // console.log(flights.flights);

  useEffect(() => {
    // console.log('Content did mount');
    loadFlights();
  }, []);

  return (
    <div className="content">
      <div className="content__flights flights">
        {flights.flights.map((e: ResponsMockAPIFlightWrapper) => (
          <Flight
            flight={e.flight}
            carrier={e.flight.carrier}
            price={e.flight.price.total}
            legs={e.flight.legs}
            classParent="flights__item"
            key={e.flightToken}
          />
        ))}
      </div>
    </div>
  );
}

export default connect(
  (state: State) => ({
    flights: state.flights,
  }),
  (dispatch: Dispatch) => ({
    loadFlights: bindActionCreators(flightsLoadAction, dispatch),
  }),
)(Content);
