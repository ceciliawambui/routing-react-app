import React from 'react';

const UserList = () => {
  const users = [
    { id: 1, name: 'Cecilia', age: 28 },
    { id: 2, name: 'Alice', age: 24 },
    { id: 3, name: 'John', age: 30 }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} is {user.age} years old.
        </li>
      ))}
    </ul>
  );
};

export default UserList;
