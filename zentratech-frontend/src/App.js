import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserList from './components/UserList';
import InterestList from './components/InterestList';
import Chat from './components/Chat';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/interests" element={<InterestList />} />
                <Route path="/chat/:roomId" element={<Chat />} />
            </Routes>
        </Router>
    );
};

export default App;
