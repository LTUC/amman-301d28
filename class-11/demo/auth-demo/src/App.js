import React, { Component } from 'react'
import Login from './components/Login';
import Logout from './components/Logout';
import Special from './components/Special';
import Nav from './components/Nav';
import ContactUS from './components/ContactUS';
import AboutUs from './components/AboutUs';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {
          this.props.auth0.isAuthenticated ?
            <Logout /> :
            <Login />
        }
        <Router>
          <Switch>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/contact-us">
              <ContactUS />
            </Route>
            <Route path="/">
              <Special />
            </Route>
          </Switch>
        </Router>

      </div>
    )
  }
}

export default withAuth0(App);

