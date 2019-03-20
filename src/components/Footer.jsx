import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

const Footer = ({ disclaimer }) => (
  <footer>
    <div className="footer">{disclaimer}</div>
  </footer>
);

export default Footer;

Footer.displayName = 'Footer';

Footer.propTypes = {
  disclaimer: PropTypes.string
};
