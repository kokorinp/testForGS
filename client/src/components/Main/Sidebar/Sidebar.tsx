import React, { ReactElement } from 'react';
import './Sidebar.scss';

function Sidebar(): ReactElement {
  return (
    <aside className="sidebar">
      <div className="sidebar__filter">
        <div className="filter">filter lol</div>
      </div>
    </aside>
  );
}

export default Sidebar;
