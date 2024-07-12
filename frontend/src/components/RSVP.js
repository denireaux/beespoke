import React, { useState, useEffect } from 'react';

const RSVP = () => {

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);

  return (
    <section className="et-slide" id="tab-rsvp">
      <h1>RSVP</h1>
      <h3>Information about our RSVP services.</h3>
    </section>
  );
}

export default RSVP;
