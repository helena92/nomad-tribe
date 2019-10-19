import React from 'react';
import './assets/Header.css';
import PropTypes from 'prop-types';

const Header = ({ textValue }) => (
  <div className="steps-header">
    <p className="steps-desc">{textValue}</p>
  </div>
);

Header.propTypes = {
  textValue: PropTypes.string.isRequired,
};

export default Header;
