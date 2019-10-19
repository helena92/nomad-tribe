import React from 'react';
// import PropTypes from 'prop-types';
import './assets/Header.css';
import Navigation from '../navigation'

const Header = () => (
  <header class="main-header">
	  <div class="container">
      <h1 class="logo">
        {/* <img src={logo} alt=""/> */}
        <a class="logo">Nomad Tribe</a>
		  </h1>
      <Navigation/>
    </div>
  </header>
);

// Header.PropTypes = {};

export default Header;
