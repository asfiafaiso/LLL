
// ParentComponent.js
import React, { useState } from 'react';
import Modal from './Modal';

const ParentComponent = () => {
  const [showModal, setShowModal] = useState(false);

  // Example friend data
  const friend = {
    name: { first: 'John', last: 'Doe' },
    email: 'john.doe@example.com',
    dob: { date: '1990-01-01' },
    location: {
      street: { number: 123, name: 'Main St' },
      city: 'Anytown',
      state: 'CA',
      country: 'USA'
    },
    phone: '123-456-7890',
    picture: { large: 'https://via.placeholder.com/150' }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {showModal && <Modal friend={friend} onClose={closeModal} />}
    </div>
  );
};

export default ParentComponent;
