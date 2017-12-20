import React, { Component } from 'react';
import logo from '../logo.svg';
import JumbotronFluid from './elements/JumbotronFluid';
import UserList from './UserList';
import UserForm from './UserForm';
import serialize from 'form-serialize';

const App = ({ users, isFetching, error, onAddUser }) => {
  return (
    <div className="App">
      <JumbotronFluid
        heading="User CRUD"
        lead="Using an API for User CRUD operations"
      />
      <UserList users={users} isFetching={isFetching} />
      <br />
      <UserForm onSubmit={onAddUser} error={error} />
    </div>
  );
};

export default App;
