import React from 'react';
import './assets/Header.css';

const Header = ({textValue}) => (
      <div className="steps-header">
          <p className="steps-desc">{textValue}</p>
      </div>
);

export default Header;
