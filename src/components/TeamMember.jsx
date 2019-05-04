import React from 'react';
import PropTypes from 'prop-types';

import './TeamMember.scss';

export const TeamMember = ({ data }) => (
  <div className="teamMember">
    <div className="description">
      <h3>{data.name}</h3>
      <span>{data.specialization}</span>
    </div>
    <img src={data.photo} alt={data.name} />
  </div>
);

TeamMember.displayName = 'TeamMember';

TeamMember.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number
};
