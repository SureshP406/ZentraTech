import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Interests = () => {
    const [interests, setInterests] = useState([]);
    const [newInterest, setNewInterest] = useState('');

    useEffect(() => {
        const fetchInterests = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/interests/');
                setInterests(response.data);
            } catch (error) {
                console.error('Error fetching interests:', error);
            }
        };

        fetchInterests();
    }, []);

    const handleSendInterest = async () => {
        try {
            await axios.post('http://localhost:8000/api/interests/', {
                interest: newInterest,
            });
            setNewInterest('');
            // Optionally fetch interests again
        } catch (error) {
            console.error('Error sending interest:', error);
        }
    };

    return (
        <div>
            <h2>Interests</h2>
            <ul>
                {interests.map(interest => (
                    <li key={interest.id}>{interest.interest}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
            />
            <button onClick={handleSendInterest}>Send Interest</button>
        </div>
    );
};

export default Interests;
