import React from 'react';
import github from '../github-logo.png';
import linkedin from '../linkedin-icon.png';
import './landing.css';

const Landing  = () => {

    return (
        <div className= 'landing-container'>
            <img className="avatar" src="https://massdrop-s3.imgix.net/product-images/massdrop-ctrl-mechanical-keyboard/FP/wl3xNbrbQkOgSzRByOtY_AI7B1490-copy-pc.jpg?auto=format&fm=jpg&fit=crop&w=955&bg=f0f0f0&dpr=1" alt="react-logo"/> 
            <div className= "landing-content">
                <h3 className = "title">
                    Full Stack Software Developer
                </h3>
                <div className= 'skills-div'>
                    <span className="skill">React |</span>
                    <span className="skill">Javascript |</span>
                    <span className="skill">React-Redux |</span>
                    <span className="skill">Html/CSS |</span>
                    <span className="skill">Node.js |</span>
                    <span className="skill">Sqlite3 |</span>
                    <span className="skill">Python |</span>
                    <span className="skill">Django |</span>
                    <span className="skill">Spanish |</span>
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

