import React from 'react';
import './css/App.css';
import Header from './components/header';
import Banner from './components/banner';
import Steps from './components/steps';
import SubscribeForm from './components/subscribe-form';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Steps />
      <SubscribeForm />
    </div>
  );
}

export default App;
