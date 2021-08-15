import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

export class Special extends Component {
    render() {
        return (
            <div>
                <h1>Hello authenticated user</h1>
                {/* {
                    this.props.auth0.isAuthenticated&&
                    <>
                <h1>Username:{this.props.auth0.user.name}</h1>
                <h2 style={{color:"red"}}>email:{this.props.auth0.user.email}</h2>
                <img src={this.props.auth0.user.picture} alt="hello" />
                    </>
                } */}
            </div>
        )
    }
}

export default withAuth0(Special)
