import React from 'react';
import github from '../github-logo.png';
import linkedin from '../linkedin-icon.png';
import './landing.css';

const Landing  = () => {

    return (
        <div className= 'landing-container'>
            <div className= "landing-content">
                <h2 className = "title">
                    Full Stack Developer
                </h2>
                <div className= 'skills'>
                    Html/CSS | React | Javascript | React-Redux | Node.js | Express | Sqlite3 | Python | Django | Spanish 
                </div>
                <div className='links'>
                    <a href= "https://github.com/RockmanExe">
                        <img className= 'github-logo' src= {github}/>
                    </a>
                    <a href="https://www.linkedin.com/in/adalberto-may-387103113/">
                        <img className= 'linkedin-icon' src= {linkedin}/>
                    </a>
                </div>
            </div>
        </div>
    )
    
};

export default Landing;

