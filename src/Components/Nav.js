import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return (
        <div className= "nav-container">
            <div className="nav-bar">        
                <nav>
                    <Link to="#landing-container" className="link">Top</Link>
                    <Link to="/projects" className="link">Skills</Link>
                    <Link to="/stats" className="link"> Projects</Link>
                    <Link to="/aboutme" className="link">About/Contact</Link>
                </nav>
            </div>
        </div>
    )
};

export default Nav;