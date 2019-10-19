

import React from 'react';
import ArrowImg from './assets/left-arrow.svg';

const SubmitButton = () => (
    <button type="submit">
        <img src={ArrowImg} class="left-arrow"></img>
    </button>
);

export default SubmitButton;
