import React from 'react';
import './assets/About.css';
import { NavLink } from 'react-router-dom';
import photo from './assets/photo1.jpg';

const About = () => (
  <div >
    <NavLink to="/" className="back-nav-button"> back</NavLink>
    <div className="about-us">
      <div className="photo-container">
        <img className="photo" src={photo} alt="" />
      </div>
      We are a fast growing <span className="color-highlight">community</span> of <span className="color-highlight">digital nomads</span>,
      entrepreneurs, engineers and creative people
      who work remotely and travel together.
      <br />
      <br />
      <span className="color-highlight">We are not a travel agency. </span>
      In fact, you don&apos;t need one to explore the world.
      <br />
      <br />
      Just enjoy using our simple tools to plan your journey.
      And see you in the next city, fellow!
    </div>
  </div>
);

export default About;
