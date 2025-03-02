import React, { useState, useEffect } from 'react';

const RSVP = () => {

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);

  return (
    <section className="et-slide" id="tab-rsvp">
      <h1>RSVP (Coming soon)</h1>
      <h3>We will ultimately offer our clients the service of building out their event's RSVP website.</h3>
    </section>
  );
}

export default RSVP;
