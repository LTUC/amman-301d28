import React, { Component } from 'react';
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';
import User from "./User"
export class UsersList extends Component {
    constructor(props){
        super(props);
        this.state={
            usersList:[],
            age:'',
            username:'',
            department:''
        }
    }
    componentDidMount= ()=>{
        if (this.props.auth0.isAuthenticated){
            this.props.auth0.getIdTokenClaims().then(result=>{
                let jwt=result.__raw;
                let config={
                    headers: {"Authorization" : `Bearer ${jwt}`},
                    method: 'get',
                    baseURL: "http://localhost:8000",
                    url: '/get-users'                    
                }
                axios(config).then(response=>{
                    console.log(response.data);
                    this.setState({
                        usersList:response.data
                    })
                    
                })
            })
        }
    }
    usernameHandler=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    departmentHandler=(e)=>{
        this.setState({
            department:e.target.value
        })        
    }
    ageHandler=(e)=>{
        this.setState({
            age:e.target.value
        })           
    }
    submitFormHandler=(e)=>{
        e.preventDefault()
        let data={
            username:this.state.username,
            department:this.state.department,
            age:this.state.age
        }
        let config={
            method: 'post',
            baseURL: "http://localhost:8000",
            url: '/create-user',
            data:data                    
        }
        axios(config).then(result=>{
            console.log(result.data)
            let usersList=this.state.usersList
            usersList.push(result.data.user)
            this.setState({
                usersList:usersList
            })
        });
    }
    deleteUser=(userId)=>{
        let config={
            method: 'delete',
            baseURL: "http://localhost:8000",
            url: `/delete-user/${userId}`,         
        }
        axios(config).then(result=>console.log())
    }
    render() {
        return (
            <div>
                <h1>Users List</h1>
                <form onSubmit={e=>this.submitFormHandler(e)}>
                    <input onChange={e=>{this.usernameHandler(e)}} type="text" placeholder="username"/>
                    <input onChange={e=>{this.ageHandler(e)}} type="text" placeholder="age"/>
                    <input onChange={e=>{this.departmentHandler(e)}} type="text" placeholder="department"/>
                    <input type="submit" value="Create user"/>
                </form>
                {
                    this.state.usersList.map(user=>{
                        return <User deleteUser={this.deleteUser}
                                    username={user.username} 
                                    age={user.age} 
                                    department={user.department}
                                    userId={user._id}
                                />
                    })
                }
            </div>
        )
    }
}

export default withAuth0(UsersList)
