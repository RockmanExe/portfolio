import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    constructor() {
        super();
        this.state= {

        };
    }
    render() {
        return (
            <div className= "header-container">
                <span> Projects</span>
                <span> Resume</span>
            </div>
        )
    }
};

export default Header;