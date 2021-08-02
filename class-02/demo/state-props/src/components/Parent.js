import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(){
        super();
        this.state={
            stateMoney:0,
        }
    }
    raiseMoney=(money)=>{
        let raise=1+money;
        this.setState({
            stateMoney:raise
        })
        // alert(raise);
    }
    render() {
        return (
            <div>
                <Child childName="John" money= {this.state.stateMoney} message="Hello my dear child this is your parent"/>
                <button onClick={()=>{this.raiseMoney()}}>Click me</button>
            </div>
        )
    }
}

export default Parent
