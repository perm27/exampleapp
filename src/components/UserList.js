// src/components/UserList.js

import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await API.get('userListApi', '/users');
        setUsers(userList);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>ユーザー一覧</h2>
      <ul>
        {users.map(user => (
          <li key={user.username}>
            <strong>ユーザー名:</strong> {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;


