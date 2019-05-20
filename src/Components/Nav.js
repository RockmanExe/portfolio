import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return (
        <div className= "nav-container">
            <div className="nav-bar">        
                <nav>
                    <NavLink to="#landing-container" className="link">Top</NavLink>
                    <Link to="#skills-container" className="link">Skills</Link>
                    <Link to=".projects-container" className="link"> Projects</Link>
                    <Link to="/aboutme" className="link">About/Contact</Link>
                </nav>
            </div>
        </div>
    )
};

export default Nav;