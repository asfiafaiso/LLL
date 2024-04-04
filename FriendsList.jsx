
// FriendsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import Pagination from './Pagination';

const FriendsList = ({ user }) => {
  const [friends, setFriends] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?seed=lll&page=${currentPage}&results=25`);
        setFriends(response.data.results);
        setTotalPages(20); // Assuming there are 20 pages with 25 friends each (500 friends total)
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchFriends();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="friends-list-container">
      <h1>Welcome, {user.name.first} {user.name.last}</h1>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <div className="friends-cards">
        {friends.map((friend, index) => (
          <FriendCard key={index} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
