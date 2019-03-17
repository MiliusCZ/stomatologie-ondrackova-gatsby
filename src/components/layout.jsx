import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';

import './layout.scss';

const Layout = ({ children }) => (
  <div className="main">
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
