import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class DisplayCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                        {this.props.title}
                        </Card.Text>
                        <Button variant="primary">{this.props.age}</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default DisplayCard
