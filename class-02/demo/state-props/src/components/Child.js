import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
                <h2>I'm the {this.props.childName} component</h2>
                <h3>Money amount: {this.props.money}</h3>
            </div>
        )
    }
}

export default Child
