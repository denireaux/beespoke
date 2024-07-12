import React, { useState, useEffect } from 'react';

const About = () => {

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);


  return (
    <section className="et-slide" id="tab-about">
      <h1>About</h1>
      <h3>Information about Beespoke Limited.</h3>
    </section>
  );
}

export default About;
