import React from 'react';
import moreIcon from './assets/more.svg';
import './assets/Navigation.css';

const Navigation = () => (
  <nav className="main-nav">
    <ul className="main-nav-list">
      <li>
        <div className="menu-item">
          <a className="who-we-are" href="#about">Who we are</a>
          <div className="more-icon">
            <img src={moreIcon} alt="" />
          </div>
        </div>
      </li>
    </ul>
  </nav>
);

export default Navigation;
