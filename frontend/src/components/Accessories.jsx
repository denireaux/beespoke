import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function AccessoriesList() {
    const [accessories, setAccessories] = useState([]);
    const [ties, setTies] = useState([]);
    const [bowties, setBowties] = useState([]);
    const [pocketSquares, setPocketSquares] = useState([]);

    const fetchAccessories = async () => {
        const url = 'http://localhost:8000/api/accessories/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data[0])
            setAccessories(data || []);
            setTies(data.ties || []);
            setBowties(data.bowties || []);
            setPocketSquares(data.pocketSquares || []);
        } else {
            console.error('Failed to fetch accessories');
        }
    };

    useEffect(() => {
        fetchAccessories();
    }, []);

    return (
        <div>
            <h1>Accessories List</h1>
            <ul>
                {ties.length > 0 ? (
                    ties.map((tie) => (
                        <li key={ties.id}>
                            <p>{tie.name}</p>
                        </li>
                    ))
                ) : (
                    <li>No ties available</li>
                )}
            </ul>
        </div>
    );
}

export default AccessoriesList;
