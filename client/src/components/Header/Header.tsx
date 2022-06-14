import React, { ReactElement } from 'react';
import './Header.scss';

function Header(): ReactElement {
  return (
    <header className="header">
      <div className="header__logo-block">
        <img className="header__logo-img" src="logo.png" title="Logo" alt="Logo" />
      </div>
      <div className="header__text-block">
        <p className="header__text">Test for GS</p>
      </div>
    </header>
  );
}

export default Header;
