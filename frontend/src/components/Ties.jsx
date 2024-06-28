import React, {useState, useEffect} from 'react';
import './TieComponent.css';

function TiesList() {
  const [ties, setTies] = useState([]);

  const fetchTies = async () => {
    const url = 'http://localhost:8000/api/accessories/ties/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setTies(data || []);
    } else {
      console.error('Failed to fetch ties');
    }
  };

  useEffect(() => {
    fetchTies();
  }, []);

  return (
    <div>
      <h1>Our Ties</h1>
      <div className="row">
        {ties.map((tie) => (
          <figure className="snip1107 blue" key={tie.sku}>
            <img src={tie.picture_url || 'https://via.placeholder.com/150'} alt={`${tie.name} image`} />
            <figcaption>
              <div><span>Buy Now</span></div>
              <div>
                <h3>{tie.name}</h3>
                <p className="card-text">{tie.description}</p>
                <p>Color: {tie.color_name}</p>
                <p>Price: ${tie.retail_price}</p>
                <p>Inventory: {tie.current_inventory}</p>
              </div>
              <a href="#"></a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default TiesList;