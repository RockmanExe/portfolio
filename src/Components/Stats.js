import React from 'react';
import { ProgressBar } from 'react-mdl';
import './stats.css'

const Resume  = () => {

    return (
        <div className= 'stats-container'>
            <h3>Stats</h3>
            <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-1911b781fc56ae356749d284f850fa8f.png" alt="stats"/>
            <div style= {{margin:10}}>
                This is the stats page! An on the surface look at how I rate myself currently, will update monthly.
            </div>
            <p>All ratings are out of a 100, 100 is where I think a senior devs progress bar would begin.</p>
            <div className="stats-content">
                <div className="progress-container">
                    <div className="progress-bar">
                        <span >React (90/100)</span>
                        <ProgressBar progress={90} />
                    </div>
                    <div className="progress-bar">
                        <span>React-Redux (70/100)</span>
                        <ProgressBar progress={70} />
                    </div>
                    <div className="progress-bar">
                        <span>Javascript (80/100)</span>
                        <ProgressBar progress={80} />
                    </div>
                    <div className="progress-bar">
                        <span>HTML/CSS (90/100)</span>
                        <ProgressBar progress={90} />
                    </div>
                    <div className="progress-bar">
                        <span>Node.js (75/100)</span>
                        <ProgressBar progress={75} />
                    </div>
                    <div className="progress-bar">
                        <span>Sqlite3 (75/100)</span>
                        <ProgressBar progress={75} />
                    </div>
                    <div className="progress-bar">
                        <span>Python (70/100)</span>
                        <ProgressBar progress={70} />
                    </div>
                    <div className="progress-bar">
                        <span>Django (60/100)</span>
                        <ProgressBar progress={60} />
                    </div>
                    <div className="progress-bar">
                        <span>Spanish (90/100)</span>
                        <ProgressBar progress={90} />
                    </div>
                    <div className="progress-bar">
                        <span>C (20/100)</span>
                    <   ProgressBar progress={20} />
                    </div>
                    <div className="progress-bar">
                        <span> UI/UX (30/100)</span>
                        <ProgressBar progress={30} />
                    </div>
                </div>
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

