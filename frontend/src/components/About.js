import React, { useState, useEffect } from 'react';

const About = () => {

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);


  return (
    <section className="et-slide" id="tab-about">
      <h1>About</h1>
      <h3>At Beespoke, we believe in crafting experiences as refined as they are timeless. From the rich, golden heritage of mead to the elegance of formal wear, we bring together the best of tradition and sophistication.</h3>
    </section>
  );
}

export default About;
