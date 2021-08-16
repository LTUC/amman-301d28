import React, { Component } from 'react';
import Profile from './components/Profile';
import Login from "./components/Login";
import Logout from "./components/Logout";
import { withAuth0 } from "@auth0/auth0-react";
class App extends Component {

  render() {
    return (
      <div>
        {
          this.props.auth0.isAuthenticated ?
            <>
              <Profile />
              <Logout />
            </>
            :
            <Login />
        }

      </div>
    )
  }
}

export default withAuth0(App)

