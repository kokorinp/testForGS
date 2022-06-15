import React, { ReactElement, SyntheticEvent } from 'react';
import './CarriersFilter.scss';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import State from '../../../../types/state';
import { flightsFilterCarrierAction } from '../../../../actions/flights';
import { FlightsActionFilterCarrierFunc } from '../../../../types/flights/action';
import { ResponsMockAPICarriers, ResponsMockAPICarrier } from '../../../../types/api/mock';

interface Props {
  carriers: ResponsMockAPICarriers;
  setFilterCarrier: FlightsActionFilterCarrierFunc;
}

function CarriersFilter({ carriers, setFilterCarrier }: Props): ReactElement {
  const handleCheckbox = (e: SyntheticEvent): void => {
    const { checked, name } = e.target as HTMLInputElement;
    setFilterCarrier(Boolean(checked), name);
  };

  return (
    <div className="carriers-filter">
      {carriers.map((e: ResponsMockAPICarrier, i: number) => (
        <div className="carriers-filter__item" key={e.uid}>
          <div className="carriers-filter__checkbox-block">
            <input
              id={`carrier-filter${i}`}
              type="checkbox"
              className="carriers-filter__checkbox"
              onChange={handleCheckbox}
              name={e.uid}
            />
            <label htmlFor={`carrier-filter${i}`}>{e.caption}</label>
          </div>
          <div className="carriers-filter__from-price">от {e.minPrice}</div>
        </div>
      ))}
    </div>
  );
}

export default connect(
  (state: State) => ({
    carriers: state.flights.carriers,
  }),
  (dispatch: Dispatch) => ({
    setFilterCarrier: bindActionCreators(flightsFilterCarrierAction, dispatch),
  }),
)(CarriersFilter);
