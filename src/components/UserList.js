import React from 'react';
import './UserList.css';

function UserList({ users }) {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.username} - {user.age} years</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
