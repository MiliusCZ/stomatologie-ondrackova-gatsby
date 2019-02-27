import { Link } from 'gatsby';
import React from 'react';

import './Header.scss';

const Header = () => (
  <header>
    <div className="header">
      <div>
        <Link to="/">
          <img src="/img/logo.png" />
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
