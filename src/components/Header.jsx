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
      <nav className="topMenu">
        <span>
          <a href="#">Item 1</a>
        </span>
        <span>
          <a href="#">Item 2</a>
        </span>
        <span>
          <a href="#">Item 3</a>
        </span>
        <span>
          <a href="#">Item 4</a>
        </span>
      </nav>
    </div>
  </header>
);

export default Header;
