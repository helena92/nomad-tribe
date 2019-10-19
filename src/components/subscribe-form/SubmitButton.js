
import React from 'react';
import ArrowImg from './assets/left-arrow.svg';

const SubmitButton = () => (
  <button type="submit">
    <img src={ArrowImg} className="left-arrow" alt="" />
  </button>
);

export default SubmitButton;
