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
            setAccessories(data || []);
            setTies(data.ties || []);
        } else {
            console.error('Failed to fetch accessories');
        }
    };

    const fetchTies = async () => {
        const url = 'http://localhost:8000/api/accessories/ties';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setTies(data.ties || []);
        } else {
            console.error('Failed to fetch ties');
        }
    };

    useEffect(() => {
        fetchAccessories();
        fetchTies();
    }, []);

    return (
        <div>
            <h1>Accessories List</h1>

            <ul>
                {ties.length > -1 ? (
                    ties.map((tie) => (
                        <li key={tie.id}>
                            <p>{tie.name}</p>
                        </li>
                    ))
                ) : (
                    <li>No ties available</li>
                )}
            </ul>

            <h1>Accessories List</h1>   
        </div>
    );
}

export default AccessoriesList;
