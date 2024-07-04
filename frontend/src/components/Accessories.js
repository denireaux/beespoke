import React from 'react';
import { NavLink } from 'react-router-dom';

const Accessories = () => {
  return (
    <section className="et-slide" id="tab-accessories">
      <h1>Accessories.</h1>
      <h3>Here you'll find all of the specially curated accents for your look.</h3>
      <NavLink to="/ties">Our Ties</NavLink>
    </section>
  );
}

export default Accessories;
