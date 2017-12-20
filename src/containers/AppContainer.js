import React, { Component } from 'react';
import App from '../components/App';
import serialize from 'form-serialize';

class AppContainer extends Component {
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

  onAddUser = e => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    const body = serialize(form, { hash: true });
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = {
      headers,
      method: 'POST',
      body: JSON.stringify(body)
    };
    this.setState({ isFetching: true });

    fetch('https://reqres.in/api/users', options)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        // Otherwise, extract the response into json
        return response.json();
      })
      .then(json => {
        // Update the user list and isFetching.
        // Reset the form in a callback after state is set.
        console.log(json);
        this.setState(
          {
            isFetching: false,
            users: [...this.state.users, json]
          },
          () => {
            form.reset();
          }
        );
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };

  onDeleteUser = e => {
    e.persist();
    e.preventDefault();
    console.log(e.target.id.value);
    const userId = e.target.id.value;
    const form = e.target;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = {
      headers,
      method: 'DELETE'
    };
    this.setState({ isFetching: true });
    fetch(`https://reqres.in/api/users${userId}`, options)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        // Otherwise, extract the response into json
      })
      .then(json => {
        // Update the user list and isFetching.
        // Reset the form in a callback after state is set.
        this.state.users.splice(userId-1,1);
        this.setState(
          {
            isFetching: false,
            users: [...this.state.users]
          },
          () => {
            form.reset();
          }
        );
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };

  // Send our state and functions as props
  render() {
    const { users, isFetching, error } = this.state;
    return <App onAddUser={this.onAddUser} onDeleteUser={this.onDeleteUser} {...this.state} />;
  }
}

export default AppContainer;
