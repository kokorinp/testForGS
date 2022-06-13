import React, { ReactElement } from 'react';
import './Footer.scss';

function Footer(): ReactElement {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; 2022{' '}
        <a className="footer__email" href="mailto:kokorinp@gmail.com">
          kokorinp@gmail.com
        </a>
      </p>
    </footer>
  );
}

export default Footer;
