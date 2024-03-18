import React, { useState } from 'react';
import './UserForm.css';

function UserForm({ onAddUser }) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser({ username, age });
    setUsername('');
    setAge('');
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserForm;
