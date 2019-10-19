import React from 'react';
// import PropTypes from 'prop-types';
import './assets/Header.css';
import Navigation from '../navigation';

const Header = () => (
  <header className="main-header">
    <div className="container">
      <h1 className="logo">
        {/* <img src={logo} alt=""/> */}
        Nomad Tribe
      </h1>
      <Navigation />
    </div>
  </header>
);

export default Header;
