import React, { useState, useEffect } from 'react';
import './Mead.css'

const Mead = () => {


    const [meadItems, setMeadItems] = useState([]);

    const fetchMeadItems = async () => {
        const url = 'http://localhost:8000/api/mead/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setMeadItems(data);
        } else {
            console.error('Failed to fetch mead items');
        }
    };

    useEffect(() => {
        fetchMeadItems();
    }, []);

    useEffect(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, [meadItems]);
  
    return (
        <section className="wrapper">
          <main className="row title">
            <ul>
              <li>Name</li>
              <li>Price</li>
              <li>Description</li>
            </ul>
          </main>
          {meadItems.map(item => (
            <section className="row-fadeIn-wrapper" key={item.id}>
              <article className="row fadeIn mead">
                <ul>
                  <li>{item.name}</li>
                  <li>${item.retail_price}</li>
                  <li>{item.description}</li>
                </ul>
              </article>
            </section>
          ))}
        </section>
      );
      
}

export default Mead;
