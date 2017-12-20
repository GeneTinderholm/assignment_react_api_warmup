import React, { Component } from 'react';
import logo from '../logo.svg';
// import JumbotronFluid from './elements/JumbotronFluid';
import UserList from './UserList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      isFetching: false
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch('https://reqres.in/api/users?delay3')
      .then(response => response.json())
      .then(json => this.setState({ users: json.data, isFetching: false }));
  }

  render() {
    const { users, isFetching } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <JumbotronFluid
          heading="User CRUD"
          lead="Using an API for User CRUD operations"
        /> */}
        <UserList users={users} isFetching={isFetching} />
      </div>
    );
  }
}

export default App;
