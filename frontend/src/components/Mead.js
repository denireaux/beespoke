import React, { useState, useEffect } from 'react';

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

    console.log(meadItems)
  
    return (
        <section className="et-slide" id="tab-mead">
        <h1>Mead</h1>
        <h3>Information about our mead products.</h3>
        
        {meadItems.map(item => (
            <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
        ))}
        </section>
    );
}

export default Mead;
