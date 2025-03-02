import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Accessories = () => {

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);

  return (
    <section className="et-slide" id="tab-accessories">
      <h1>Accessories. (Coming soon)</h1>
      <h3>Here you'll find all of the specially curated accents for your look.</h3>
      <NavLink to="/accessories/ties">Our Ties</NavLink>
    </section>
  );
}

export default Accessories;
