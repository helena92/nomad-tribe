
import React from 'react';
import ArrowImg from './assets/left-arrow.svg';

const SubmitButton = ({onSubmit}) => (
  <button type="button" onClick={onSubmit} >
    <img src={ArrowImg} className="left-arrow" alt="" />
  </button>
);

export default SubmitButton;
