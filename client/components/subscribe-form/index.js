import React, { useState } from 'react';
import './assets/Subscribe.css';
import Header from '../common/Header';
import EmailInput from './EmailInput';
import SubscriptionConfirmModal from './SubscriptionConfirmModal';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [popupOpened, setPopup] = useState(false);
  
  function isSubscribed() {
    setPopup(!popupOpened);
  }  

  return (
    <>
    {popupOpened ? <SubscriptionConfirmModal/> : ''}
    <form className="subscribe-container">
      <Header textValue={['Subscribe now for our ', <span style={{ color: '#0452fa' }}>FREE</span>, ' beta version']} />
      <EmailInput
        value={email}
        isSubscribed={isSubscribed}
        onChange={async (e) => {
          setEmail(e.target.value);
        }}
      />
    </form>
    </>
  );
};

export default SubscribeForm;
