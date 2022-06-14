import React, { ReactElement } from 'react';
import './Sidebar.scss';
import Sort from './Sort/Sort';

function Sidebar(): ReactElement {
  return (
    <aside className="sidebar">
      <div className="sidebar__filter">
        <div className="filter">
          <h5 className="filter__title">Сортировать</h5>

          <Sort />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
