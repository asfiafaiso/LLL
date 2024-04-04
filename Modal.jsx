// Modal.js
import React from 'react';

const Modal = ({ friend, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={friend.picture.large} alt="Friend" />
        <h2>{friend.name.first} {friend.name.last}</h2>
        <p>Email: {friend.email}</p>
        <p>Date of Birth: {new Date(friend.dob.date).toLocaleDateString()}</p>
        <p>Address: {friend.location.street.number} {friend.location.street.name}, {friend.location.city}, {friend.location.state}, {friend.location.country}</p>
        <p>Phone: {friend.phone}</p>
      </div>
    </div>
  );
};

export default Modal;
