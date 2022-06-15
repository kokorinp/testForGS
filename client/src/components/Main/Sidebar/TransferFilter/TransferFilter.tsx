import React, { ReactElement, SyntheticEvent } from 'react';
import './TransferFilter.scss';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import State from '../../../../types/state';
import { flightsFilterNoTransferAction, flightsFilterOneTransferAction } from '../../../../actions/flights';
import { FlightsActionFilterFunc } from '../../../../types/flights/action';
import { FiltersState } from '../../../../types/flights/state';

interface Props {
  filters: FiltersState;
  setFilterNoTransfer: FlightsActionFilterFunc;
  setFilterOneTransfer: FlightsActionFilterFunc;
}

function TransferFilter({ filters, setFilterNoTransfer, setFilterOneTransfer }: Props): ReactElement {
  // console.log(filters);
  const oneTransfer: string = 'OneTransfer';
  const noTransfer: string = 'NoTransfer';

  const handleCheckbox = (e: SyntheticEvent): void => {
    const { checked, name } = e.target as HTMLInputElement;
    switch (name) {
      case oneTransfer:
        setFilterOneTransfer(checked);
        break;
      case noTransfer:
        setFilterNoTransfer(checked);
        break;
      default:
        break;
    }
    // console.log(checked, name);
  };

  return (
    <div className="transfer-filter">
      <div className="transfer-filter__item">
        <input
          id="transfer-filter1"
          type="checkbox"
          className="transfer-filter__checkbox"
          onChange={handleCheckbox}
          name={oneTransfer}
          checked={filters.OneTransfer}
        />
        <label htmlFor="transfer-filter1"> - 1 пересадка</label>
      </div>
      <div className="transfer-filter__item">
        <input
          id="transfer-filter2"
          type="checkbox"
          className="transfer-filter__checkbox"
          onChange={handleCheckbox}
          name={noTransfer}
          checked={filters.NoTransfer}
        />
        <label htmlFor="transfer-filter2"> - без пересадок</label>
      </div>
    </div>
  );
}

export default connect(
  (state: State) => ({
    filters: state.flights.filters,
  }),
  (dispatch: Dispatch) => ({
    setFilterNoTransfer: bindActionCreators(flightsFilterNoTransferAction, dispatch),
    setFilterOneTransfer: bindActionCreators(flightsFilterOneTransferAction, dispatch),
  }),
)(TransferFilter);
