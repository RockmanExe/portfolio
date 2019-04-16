import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return (
        <div className= "nav-container">
                <div className="nav-bar">
                    <nav>
                        <Link to="/" className="link">Adalberto May</Link>
                    </nav>
                    <nav>
                        <Link to="/projects" className="link">Projects</Link>
                        <Link to="/stats" className="link"> Stats</Link>
                        <Link to="/aboutme" className="link">About/Contact</Link>
                    </nav>
                </div>
        </div>
            )
};

export default Nav;