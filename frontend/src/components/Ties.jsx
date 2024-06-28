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
      <h1 className='heading'>Our Ties</h1>
      <div id="container">
        {ties.map((tie) => (
          <div className="card" key={tie.sku}>
            <div className="card-image">
              <img src={tie.picture_url || 'https://via.placeholder.com/150'} alt={`${tie.name} image`} />
            </div>
            <div className="card-text">
              <h2>{tie.name}</h2>
              <p>{tie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
}

export default TiesList;