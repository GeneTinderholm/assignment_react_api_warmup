import React, { Component } from 'react';
import UserCard from './UserCard';

const UserList = ({ users, isFetching, onDelete }) => {
  const userList = users.map(user => <UserCard user={user} onDelete={onDelete} key={user.id} />);

  return (
    <div className="container">
      <h1>User List</h1>
      <div className="card-group">
        {isFetching ? <p>Loading...</p> : userList}
      </div>
    </div>
  );
};

export default UserList;
