import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="et-hero-tabs">
      <div className="et-hero-top">
        <NavLink className="et-hero-top-tab" to="/register#tab-register">Sign Up</NavLink>
        <NavLink className="et-hero-top-tab" to="/login#tab-login">Login</NavLink>
      </div>
      <h1>BEESPOKE LIMITED.</h1>
      <h3>Mead x Suits</h3>
      <div className="et-hero-tabs-container">
        <NavLink className="et-hero-tab" to="/about#tab-about">About</NavLink>
        <NavLink className="et-hero-tab" to="/accessories#tab-accessories">Accessories</NavLink>
        <NavLink className="et-hero-tab" to="/rsvp#tab-rsvp">Need an RSVP Website?</NavLink>
        <NavLink className="et-hero-tab" to="/mead#tab-mead">Mead</NavLink>
        <span className="et-hero-tab-slider"></span>
      </div>
    </section>
  );
}

export default HeroSection;
