import React from 'react';
// import { ProgressBar } from 'react-mdl';
import './stats.css'

const Resume  = () => {

    return (
        <div className= 'stats-container'>
            <h3>Stats</h3>
            <div className="stats-content">
                <div className="learning-container">
                    <span style={{fontSize:20, marginBottom:20}}>Subjects I'm interested in studying next:</span>
                    <div className="subjects" style={{fontSize:18, marginBottom:20}}>
                        <li>React Hooks</li>
                        <li>React Native</li>
                        <li>Angular</li>
                        <li>Unity</li>
                        <li>Improve on all of the above</li>
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default Resume;

