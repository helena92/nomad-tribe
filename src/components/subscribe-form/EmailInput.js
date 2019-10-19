

import React from 'react';
import './assets/EmailInput.css';
import './assets/SubmitButton.css';

import SubmitButton from './SubmitButton';

const EmailInput = ({ value, onChange }) => (
    <div className="email-wrapper">
        <div>
            <input
                size="35"
                maxlength="320"
                className="input"
                placeholder="email address"
                type="text"
                value={value}
                type="text"
                name="email"
                onChange={onChange}
                required />
            <span className="underline"></span>
        </div>
        <SubmitButton />
    </div>
);

export default EmailInput;
