import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export class Profile extends Component {
    componentDidMount =  () => {  
        if(this.props.auth0.isAuthenticated) {
           
          this.props.auth0.getIdTokenClaims()
          .then(result => {
            const jwt = result.__raw;
            const config = {
              headers: {"Authorization" : `Bearer ${jwt}`},
              method: 'get',
              baseURL: process.env.REACT_APP_SERVER_URL,
              url: '/auth'
            }
            axios(config)
              .then(axiosResults => console.log(axiosResults.data))
              .catch(err => console.error(err));
          })
          .catch(err => console.error(err));
        }
      }    
    render() {
        return (
            <div>
                <h1>Hello</h1>
                {
                    this.props.auth0.isAuthenticated &&
                    <>
                        <h1>{this.props.auth0.user.name}</h1>
                        <h1>{this.props.auth0.user.email}</h1>
                    </>
                }

            </div>
        )
    }
}

export default withAuth0(Profile)
