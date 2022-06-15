import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './Content.scss';
import State from '../../../types/state';
import { flightsAddShowFlightsAction, flightsLoadAction } from '../../../actions/flights';
import { FlightsState } from '../../../types/flights/state';
import { ActionFunc } from '../../../types/action';
import { ResponsMockAPIFlightWrapper } from '../../../types/api/mock';
import Flight from './Flight/Flight';
import { FlightsActionAddShowFlightsFunc } from '../../../types/flights/action';

interface Props {
  flights: FlightsState;
  loadFlights: ActionFunc;
  AddShowFlights: FlightsActionAddShowFlightsFunc;
}

function Content({ flights, loadFlights, AddShowFlights }: Props): ReactElement {
  // console.log(flights.flights);

  useEffect(() => {
    // console.log('Content did mount');
    loadFlights();
  }, []);

  const handlerAddShowFlights = (): void => {
    AddShowFlights(flights.showflights + 5);
  };

  let showflights: number = 0;

  return (
    <div className="content">
      <div className="content__flights flights">
        {flights.flights.map((e: ResponsMockAPIFlightWrapper) => {
          if (e.show && showflights < flights.showflights) {
            showflights++;
            return (
              <Flight
                // flight={e.flight}
                carrier={e.flight.carrier}
                price={e.flight.price.total}
                legs={e.flight.legs}
                classParent="flights__item"
                key={e.flightToken}
              />
            );
          }
          return null;
        })}

        <div className="flights__item add-show-flights">
          <button type="button" className="add-show-flights__btn" onClick={handlerAddShowFlights}>
            Показать ещё
          </button>
        </div>
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
    AddShowFlights: bindActionCreators(flightsAddShowFlightsAction, dispatch),
  }),
)(Content);
