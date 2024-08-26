import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const Chat = () => {
    const { roomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    const client = new W3CWebSocket(`ws://localhost:8000/ws/chat/${roomId}/`);

    useEffect(() => {
        client.onmessage = (message) => {
            const data = JSON.parse(message.data);
            setMessages((prevMessages) => [...prevMessages, data.message]);
        };
    }, [client]);

    const sendMessage = () => {
        client.send(JSON.stringify({ message }));
        setMessage('');
    };

    return (
        <div>
            <h2>Chat Room</h2>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <input 
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
