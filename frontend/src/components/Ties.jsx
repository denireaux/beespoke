import React, {useState, useEffect} from 'react';

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

  console.log(ties);

  return (
    <div>
      <h1>Our Ties</h1>
      <div className="row">
        {ties.map((tie) => (
          <div className="col-md-4" key={tie.sku}>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src={tie.picture_url || 'https://via.placeholder.com/150'}  alt={`${tie.name} image`} />
              <div className="card-body">
                <h5 className="card-title">{tie.name}</h5>
                <p className="card-text">{tie.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Color: {tie.color_id}</li>
                <li className="list-group-item">Price: ${tie.retail_price}</li>
                <li className="list-group-item">Inventory: {tie.current_inventory}</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default TiesList;