import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/contact-us">Contact us</a></li>
                </ul>
            </div>
        )
    }
}

export default Nav
