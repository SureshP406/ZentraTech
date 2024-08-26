import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InterestList = () => {
    const [interests, setInterests] = useState([]);

    useEffect(() => {
        const fetchInterests = async () => {
            const response = await axios.get('http://localhost:8000/api/chat/interests/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setInterests(response.data);
        };

        fetchInterests();
    }, []);

    const handleAccept = async (interestId) => {
        await axios.patch(`http://localhost:8000/api/chat/interests/${interestId}/`, {
            status: 'accepted',
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        alert("Interest accepted!");
    };

    const handleReject = async (interestId) => {
        await axios.patch(`http://localhost:8000/api/chat/interests/${interestId}/`, {
            status: 'rejected',
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        alert("Interest rejected!");
    };

    return (
        <div>
            <h2>Interest List</h2>
            <ul>
                {interests.map(interest => (
                    <li key={interest.id}>
                        {interest.sender.username} wants to connect. 
                        <button onClick={() => handleAccept(interest.id)}>Accept</button>
                        <button onClick={() => handleReject(interest.id)}>Reject</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InterestList;
