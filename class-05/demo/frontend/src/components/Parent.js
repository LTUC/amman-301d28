import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import TextForm from './TextForm';

export class Parent extends Component {
    constructor(){
        super();
        this.state={
            displayText:"",
            showText:false
        }
    }
    updateText=(e)=>{
        this.setState({
            displayText:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        this.setState({
            showText:true
        })
    }
    render() {
        
        return (
            <div>
                <TextForm updateText={this.updateText} submitHandler={this.submitHandler}/>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                          {
                          this.state.showText&&
                          this.state.displayText}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Parent
