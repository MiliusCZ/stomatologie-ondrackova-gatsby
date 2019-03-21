import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

const Footer = ({ siteInfo }) => (
  <footer>
    <div className="footer">
      <div>
        <h4>Ordinační hodiny</h4>
        <div dangerouslySetInnerHTML={{ __html: siteInfo.openingHours}} />
      </div>
      <div className="phoneContainer">
        <h4>Telefon</h4>
        <span className="phone">{siteInfo.phone}</span>
      </div>
      <div>
        <h4>Adresa</h4>
        {siteInfo.address.name}<br />
        {siteInfo.address.street}<br />
        {siteInfo.address.city}<br />
        {siteInfo.address.zip}
      </div>
    </div>
  </footer>
);

export default Footer;

Footer.displayName = 'Footer';

Footer.propTypes = {
  siteInfo: PropTypes.object
};
