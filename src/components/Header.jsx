import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

export const Header = ({ navigation }) => (
  <header>
    <div className="header">
      <div>
        <Link to="/">
          <img src="/img/logo.png" />
        </Link>
      </div>
      <nav className="topMenu">
        {navigation.map(item => (
          <span key={item.key}>
            <Link  activeClassName="active" to={item.path}>
              {item.title}
            </Link>
          </span>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;

Header.displayName = 'Header';

Header.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  navigation: PropTypes.array,
};
