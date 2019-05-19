import React from 'react';
// import selfie from '../selfie.jpg';
import github from '../github-logo.png';
import linkedin from '../linkedin-icon.png';
import './landing.css';

const Landing  = () => {

    return (
        <div className= 'landing-container'>
            {/* <div className="selfie-div"><img className="avatar" src= {"https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg"} alt="react-logo"/></div> */}
            <div className= "landing-content">
                <h3 className = "title">
                    <p style={{fontSize:'40px'}}>Adalberto May</p>Full Stack Software Developer
                </h3>
                <div className= 'skills-div'>
                   I go by Alex for short. I should say stuff here
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

