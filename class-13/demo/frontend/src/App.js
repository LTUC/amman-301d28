import React, { Component } from 'react'
import UsersList from './components/UsersList';
import Login from './components/Login';
import Logout from './components/Logout';
import { withAuth0 } from '@auth0/auth0-react';
export class App extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {
          this.props.auth0.isAuthenticated ?
            <>
              <Logout />
              <UsersList />
            </> :
            <Login />
        }
        
      </div>
    )
  }
}

export default withAuth0(App);

