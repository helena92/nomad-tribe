import React from 'react';
// import PropTypes from 'prop-types';
import './assets/Header.css';
import Navigation from '../navigation';
import logo from './assets/logo.png';

const Header = () => (
  <header className="main-header">
    <h1 className="app-info">
      <img className="logo" src={logo} alt="" />
      <span> Nomad Tribe</span>
    </h1>
    <Navigation />
  </header>
);

export default Header;
