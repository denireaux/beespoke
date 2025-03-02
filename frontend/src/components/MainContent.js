import React from 'react';
import './MainContent.css';
import TiesList from './TieList';

const MainContent = () => {
  return (
    <main className="et-main">
      <section className="et-slide" id="tab-about">
        <h1>About</h1>
        <h3>something about about</h3>
      </section>
      <TiesList />
      <section className="et-slide" id="tab-react">
        <h1>Need an RSVP Website?</h1>
        <h3>something about websites</h3>
      </section>
      <section className="et-slide" id="tab-angular">
        <h1>Mead Kits</h1>
        <h3>something about mead</h3>
      </section>
    </main>
  );
}

export default MainContent;
