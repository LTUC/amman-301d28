import React, { Component } from 'react'

export class User extends Component {
    render() {
        return (
            <div>
                <h1>name: {this.props.username}</h1>
                <h1>department: {this.props.department}</h1>
                <h1>age: {this.props.age}</h1>
                <button onClick={()=>this.props.deleteUser(this.props.userId)}>Delete</button>
                <button 
                onClick={()=>{this.props.showUpdateForm(this.props.username,this.props.department,this.props.age,this.props.userId)}}>
                    Update
                </button>

            </div>
        )
    }
}

export default User
