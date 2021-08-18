import React, { Component } from 'react'
import axios from 'axios';

export class UpdateForm extends Component {

    constructor(props){
        super(props);
        this.state={
            username:this.props.userName,
            age:this.props.age,
            department:this.props.department,
            userId:this.props.userId
        }
    }
    getUserName=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    getAge=(e)=>{
        this.setState({
            age:e.target.value
        })
    }
    getDepartment=(e)=>{
        this.setState({
            department:e.target.value
        })
    }
    updateUser=(e)=>{
        let userId=this.props.userId;
        let config={
            method: 'put',
            baseURL: "http://localhost:8001",
            url: `/update-user/${userId}`,    
            data:{
                username:this.state.username,
                department:this.state.department,
                age:this.state.age
            }
        }
        axios(config).then(result=>{
            console.log(result.data);  
        })
    }
    render() {
        return (
            <form onSubmit={this.updateUser}>
                <input onChange={e=>this.getUserName(e)} type="text" value={this.state.username}/>
                <input onChange={e=>this.getDepartment(e)} type="text" value={this.state.department}/>
                <input onChange={e=>this.getAge(e)} type="text" value={this.state.age}/>
                <input type="submit" value="Update user" />
            </form>
        )
    }
}

export default UpdateForm
