import React, { ReactElement, SyntheticEvent, useState } from 'react';
import './PriceFilter.scss';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import State from '../../../../types/state';
import { flightsFilterPriceFromToAction } from '../../../../actions/flights';
import { FlightsActionFilterPriceFunc } from '../../../../types/flights/action';
import { FiltersState } from '../../../../types/flights/state';

interface Props {
  filters: FiltersState;
  setFilterPriceFromTo: FlightsActionFilterPriceFunc;
}

function PriceFilter({ filters, setFilterPriceFromTo }: Props): ReactElement {
  const [fromValue, setFromValue] = useState(filters.PriceFrom);
  const [toValue, setToValue] = useState(filters.PriceTo);

  const handleInputFromOnChange = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setFromValue(Number.isNaN(value) ? 0 : Number(value));
  };

  const handleInputToOnChange = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setToValue(Number.isNaN(value) ? 0 : Number(value));
  };

  const handleInputBlur = (): void => {
    setFilterPriceFromTo(fromValue, toValue);
  };

  return (
    <div className="price-filter">
      <div className="price-filter__item">
        <div className="price-filter__label">от</div>
        <div className="price-filter__input-block">
          <input
            type="number"
            className="price-filter__input"
            onChange={handleInputFromOnChange}
            onBlur={handleInputBlur}
            value={fromValue}
            name="from"
          />
        </div>
      </div>

      <div className="price-filter__item">
        <div className="price-filter__label">до</div>
        <div className="price-filter__input-block">
          <input
            type="number"
            className="price-filter__input"
            onChange={handleInputToOnChange}
            onBlur={handleInputBlur}
            value={toValue}
            name="to"
          />
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state: State) => ({
    filters: state.flights.filters,
  }),
  (dispatch: Dispatch) => ({
    setFilterPriceFromTo: bindActionCreators(flightsFilterPriceFromToAction, dispatch),
  }),
)(PriceFilter);
