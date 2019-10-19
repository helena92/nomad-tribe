
import React from 'react';
import './assets/EmailInput.css';
import './assets/SubmitButton.css';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';

const EmailInput = ({ value, onChange }) => (
  <div className="email-wrapper">
    <div>
      <input
        size="35"
        maxLength="320"
        className="input"
        placeholder="email address"
        type="text"
        value={value}
        name="email"
        onChange={onChange}
        required
      />
      <span className="underline" />
    </div>
    <SubmitButton />
  </div>
);

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default EmailInput;
