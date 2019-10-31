import React from 'react';
import './assets/EmailInput.css';
import './assets/SubmitButton.css';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import userService from '../../services/network/user';

const EmailInput = ({ value, onChange, isSubscribed }) => (
  <div className="email-wrapper">
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
      {/* <span className="underline" /> */}
      <SubmitButton
        onSubmit={() => {
          userService.set(value);
          isSubscribed();
        }}
      />
  </div>

);

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isSubscribed: PropTypes.func.isRequired,
};

export default EmailInput;
