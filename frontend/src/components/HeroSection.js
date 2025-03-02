import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js';
import './HeroSection.css';

const HeroSection = () => {
  const { isLoggedIn, logout } = useAuth(); 

  return (
    <section className="et-hero-tabs">
      <div className="et-hero-top">
        {!isLoggedIn ? (
          <>
            <NavLink className="et-hero-top-tab" to="/">Sign Up</NavLink>
            <NavLink className="et-hero-top-tab" to="/">Login</NavLink>
          </>
        ) : (
          <NavLink className="et-hero-top-tab" to="/" onClick={logout}>Logout</NavLink>
        )}
      </div>
      <h1>BEESPOKE LIMITED.</h1>
      <h3>Mead x Suits</h3>
      <div className="et-hero-tabs-container">
        <NavLink className="et-hero-tab" to="/about">About</NavLink>
        <NavLink className="et-hero-tab" to="/accessories">Accessories</NavLink>
        <NavLink className="et-hero-tab" to="/rsvp">Need an RSVP Website?</NavLink>
        <NavLink className="et-hero-tab" to="/mead">Mead</NavLink>
        <span className="et-hero-tab-slider"></span>
      </div>
    </section>
  );
}

export default HeroSection;
