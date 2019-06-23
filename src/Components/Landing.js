import React from 'react';
// import selfie from '../selfie.jpg';
// import github from '../github-logo.png';
// import linkedin from '../linkedin-icon.png';
import './landing.css';

const Landing  = () => {

    return (
        <div className= 'landing-container'>
            {/* <div className="selfie-div"><img className="avatar" src= {"https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg"} alt="react-logo"/></div> */}
            <div className= "landing-content">
                <h3 className = "title">
                    Adalberto May 
                    <br></br>
                    Full Stack Software Developer
                </h3>
                <div className= 'skills-div'>
                    Hello there, I'm Adalberto but I go Alex for short. Experienced Project Manager with a demonstrated history of working in the e-learning industry. Experience with (and prefer) working with others on a team. Strong program and project management professional. I'm hard working and love learning new things. I'm pretty laid back and get along pretty easily with anyone! In my spare time I like to watch and play sports and games. This site was made from scratch using React.
                </div>
                {/* <div className='links'>
                    <a href= "https://github.com/RockmanExe" target="_blank" rel="noopener noreferrer">
                        <img className= 'github-logo' src= {github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/adalberto-may-387103113/" target="_blank" rel="noopener noreferrer" >
                        <img className= 'linkedin-icon' src= {linkedin} alt="linkedin" />
                    </a>
                </div> */}
            </div>
        </div>
    )
    
};

export default Landing;

