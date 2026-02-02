import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import './App.css';
import Login from './Login';
import FriendsList from './FriendsList';

const App = () => {
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState({ message: '', type: '', visible: false });
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const showToast = (message, type) => {
    setToast({ message, type, visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2500);
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.get('https://randomuser.me/api/?seed=lll');
      const userData = response.data.results[0];

      const apiUsername = userData.login.username;
      const apiHashedPassword = CryptoJS.SHA256(userData.login.password).toString();
      const hashedPassword = CryptoJS.SHA256(password).toString();

      if (username === apiUsername && hashedPassword === apiHashedPassword) {
        setUser(userData);
        showToast('Login Successful!', 'success');

        // ✅ CHANGE URL
        navigate('/friends');
      } else {
        setShake(true);
        showToast('Invalid Username or Password', 'error');
        setTimeout(() => setShake(false), 500);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login
            onLogin={handleLogin}
            toast={toast}
            shake={shake}
          />
        }
      />

      <Route
        path="/friends"
        element={
          user ? <FriendsList user={user} /> : <Navigate to="/login" />
        }
      />

      {/* Default route */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
