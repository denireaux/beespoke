import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TieList.css';

function TiesList() {
    const [ties, setTies] = useState([]);
    const navigate = useNavigate();

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

    useEffect(() => {
        if (ties.length > 0) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }, [ties]);

    const handleCardClick = (tie) => {
        navigate(`/ties/${tie.id}`);
    };

    return (
        <div className="grid-container">
            {ties.map((tie) => (
                <div className="grid-item" key={tie.id} onClick={() => handleCardClick(tie)}>
                    <div className="card">
                        <div className="image">
                            <img src={tie.picture_url || 'https://via.placeholder.com/150'} alt={`${tie.name} image`} />
                        </div>
                        <span className="title">{tie.name}</span>
                        <span className="price">${tie.retail_price}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TiesList;
