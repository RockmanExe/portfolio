import React from 'react';
import github from '../github-logo.png';
import linkedin from '../linkedin-icon.png';
import './landing.css';

const Landing  = () => {

    return (
        <div className= 'landing-container'>
            <img className="avatar" src="https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png" alt="react-logo"/> 
            <div className= "landing-content">
                <h2 className = "title">
                    Full Stack Software Developer
                </h2>
                
                <div className= 'skills'>
                    Html/CSS | React | Javascript | React-Redux | Node.js | Express | Sqlite3 | Python | Django | Spanish 
                </div>
                <div className='links'>
                    <a href= "https://github.com/RockmanExe" target="_blank" rel="noopener noreferrer">
                        <img className= 'github-logo' src= {github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/adalberto-may-387103113/" target="_blank" rel="noopener noreferrer" >
                        <img className= 'linkedin-icon' src= {linkedin} alt="linkedin" />
                    </a>
                </div>
            </div>
        </div>
    )
    
};

export default Landing;

