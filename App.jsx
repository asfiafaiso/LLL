// App.js
import React, { useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import './App.css';
import Login from './Login';
import FriendsList from './FriendsList';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      // Fetch user data from the API
      const response = await axios.get('https://randomuser.me/api/?seed=lll');
      const userData = response.data.results[0];
      
      // Extract username and hashed password from fetched user data
      const apiUsername = userData.login.username;
      const apiHashedPassword = CryptoJS.SHA256(userData.login.password).toString();
  
      // Hash the password provided by the user
      const hashedPassword = CryptoJS.SHA256(password).toString();
  
      // Compare the provided username and hashed password with the fetched data
      if (username === apiUsername && hashedPassword === apiHashedPassword) {
        setIsLoggedIn(true);
        setUser(userData);
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <FriendsList user={user} />
      )}
    </div>
  );
};

export default App;
