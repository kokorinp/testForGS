import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import './Content.scss';
import State from '../../../types/state';
import { flightsLoadAction } from '../../../actions/flights';
import { FlightsState } from '../../../types/flights/state';
import { ActionFunc } from '../../../types/action';

interface Props {
  flights: FlightsState;
  loadFlights: ActionFunc;
}

function Content({ flights, loadFlights }: Props): ReactElement {
  console.log(flights.flights);

  useEffect(() => {
    // console.log('Content did mount');
    loadFlights();
  }, []);

  return (
    <div className="content">
      <div className="content_c">
        <p>
          content content content content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          doloribus explicabo fugiat incidunt ipsa laborum nemo nihil rem tenetur velit. Asperiores eos, fuga itaque
          odio quidem repellendus sapiente vel veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Animi asperiores assumenda atque beatae cupiditate, dolor ducimus eius ipsum itaque mollitia odio odit omnis
          quam quidem quod, rerum soluta velit voluptates!
        </p>
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
