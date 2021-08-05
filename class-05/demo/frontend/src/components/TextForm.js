import React, { Component } from 'react'

export class TextForm extends Component {
    render() {
        return (

            <form onSubmit={this.props.submitHandler}>
                <input type="text" placeholder="write text here" onChange={this.props.updateText} />
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default TextForm
