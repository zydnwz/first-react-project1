import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Modal from './components/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const handleAddUser = (user) => {
    if (!user.username.trim() || !user.age.trim()) {
      setModalMessage('Please enter a valid name and age (non-empty values)');
      setShowModal(true);
      return;
    }
    if (isNaN(user.age) || parseInt(user.age) <= 0) {
      setModalMessage('Please enter an age greater than 0');
      setShowModal(true);
      return;
    }
    addUser(user);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="form-container">
          <UserForm onAddUser={handleAddUser} />
        </div>
        <div className="user-container">
          <UserList users={users} />
        </div>
      </div>
      {showModal && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
}

export default App;
