import React, { useState, useEffect } from 'react';

const About = () => {

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);


  return (
    <section className="et-slide" id="tab-about">
      <h1>About</h1>
      <h3>At Beespoke, we believe in crafting experiences as refined as they are timeless. From the rich, golden heritage of mead to the elegance of formal wear, we bring together the best of tradition and sophistication.</h3>
      <h3>Savor the taste of history with our handcrafted meads, made with the finest honey and time-honored brewing techniques. Whether you're a seasoned connoisseur or new to the world of mead, our selection offers a perfect balance of bold flavors and smooth finishes.</h3>
      <h3>For the adventurers and creators, our mead-making kits empower you to craft your own honeyed masterpiece. Designed for both beginners and experienced brewers, our kits include everything you need to start fermenting your own batch of liquid gold.</h3>
      <h3>Elevate your presence with our handpicked collection of formal wear. From tailored suits to unique accessories, our pieces are designed to complement your refined taste and leave a lasting impression. Whether you're attending a wedding, gala, or an intimate evening affair, Beespoke helps you dress the part.</h3>
    </section>
  );
}

export default About;
