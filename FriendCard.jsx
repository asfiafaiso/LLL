
// FriendCard.js
import React, { useState } from 'react';
import Modal from './Modal';

const FriendCard = ({ friend }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="friend-card" onClick={handleClick}>
      <img src={friend.picture.large} alt="Friend" />
      <h3>{friend.name.first} {friend.name.last}</h3>
      <p>Email: {friend.email}</p>
      <p>Phone: {friend.phone}</p>
      {showModal && <Modal friend={friend} onClose={handleCloseModal} />}
    </div>
  );
};

export default FriendCard;
