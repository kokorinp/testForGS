import React, { ReactElement, SyntheticEvent } from 'react';
import './Sort.scss';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import State from '../../../../types/state';
import { flightsSortAction } from '../../../../actions/flights';
import { FlightsActionSortFunc } from '../../../../types/flights/action';

interface Props {
  sort: number;
  setSort: FlightsActionSortFunc;
}

function Sort({ sort, setSort }: Props): ReactElement {
  const handleRadio = (e: SyntheticEvent): void => {
    const checkedRadio: number = Number((e.target as HTMLSelectElement).value);
    if (sort !== checkedRadio) {
      setSort(checkedRadio);
    }
  };

  return (
    <div className="sort">
      <div className="sort__item">
        <input
          id="sort1"
          type="radio"
          className="sort__radio"
          name="sort-radio"
          value="1"
          defaultChecked
          onClick={handleRadio}
        />
        <label htmlFor="sort1"> - по возрастанию цены</label>
      </div>
      <div className="sort__item">
        <input id="sort2" type="radio" className="sort__radio" name="sort-radio" value="2" onClick={handleRadio} />
        <label htmlFor="sort2"> - по убыванию цены</label>
      </div>
      <div className="sort__item">
        <input id="sort3" type="radio" className="sort__radio" name="sort-radio" value="3" onClick={handleRadio} />
        <label htmlFor="sort3"> - по времени в пути</label>
      </div>
    </div>
  );
}

export default connect(
  (state: State) => ({
    sort: state.flights.sort,
  }),
  (dispatch: Dispatch) => ({
    setSort: bindActionCreators(flightsSortAction, dispatch),
  }),
)(Sort);
