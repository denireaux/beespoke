import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TieDetail.css';

function TieDetail() {
  const { id } = useParams();
  const [tie, setTie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTie = async () => {
      const response = await fetch(`http://localhost:8000/api/accessories/ties/${id}/`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTie(data);
      } else {
        console.error('Failed to fetch tie details');
      }
    };
    fetchTie();
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, [tie]);

  if (!tie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tie-detail">
        <br />
      <button onClick={() => navigate(-1)} className="back-button">Back</button>
      <h1>{tie.name}</h1>
      <img src={tie.picture_url || 'https://via.placeholder.com/150'} alt={`${tie.name} image`} />
      <p>{tie.description}</p>
      <p>Price: ${tie.retail_price}</p>
    </div>
  );
}

export default TieDetail;
