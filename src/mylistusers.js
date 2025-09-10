import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      // Lambda関数を呼び出す（Amplify API Gatewayを使用）
      const response = await API.get('myApi', '/users');
      setUsers(response.users);
    } catch (err) {
      console.log('error fetching users: ', err);
    }
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.Username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
