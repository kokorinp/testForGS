import React, { ReactElement } from 'react';
import './Sidebar.scss';
import Sort from './Sort/Sort';
import TransferFilter from './TransferFilter/TransferFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import CarriersFilter from './CarriersFilter/CarriersFilter';

function Sidebar(): ReactElement {
  return (
    <aside className="sidebar">
      <div className="sidebar__filter">
        <div className="filter">
          <h5 className="filter__title">Сортировать</h5>
          <Sort />
          <h5 className="filter__title">Фильтровать</h5>
          <TransferFilter />
          <h5 className="filter__title">Цена</h5>
          <PriceFilter />
          <h5 className="filter__title">Авиакомпании</h5>
          <CarriersFilter />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
