import React, { useState } from 'react';
import './assets/Subscribe.css';
import Header from '../common/Header';
import EmailInput from './EmailInput';

const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    return (
        <form className="subscribe-container">
            <Header textValue={["Subscribe now for our ", <span style={{ color: '#0452fa' }}>FREE</span>, " beta version"]} />
            <EmailInput value={email} onChange={e => setEmail(e.target.value)} />
        </form>
    )
}

export default SubscribeForm;
