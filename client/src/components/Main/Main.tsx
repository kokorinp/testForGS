import React, { ReactElement } from 'react';
import './Main.scss';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

function Main(): ReactElement {
  return (
    <main className="main">
      <Sidebar />
      <Content />
    </main>
  );
}

export default Main;
