import React from 'react';
import './projects.css';
// import FairShare from '../fairshare.png';
import './projects.css';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
// import { url } from 'inspector';

const Projects  = () => {

    return (
        <div className= 'project-container' Id="projects">
            <h3>Some recent projects</h3>
            <div className="projects-div">
            <div className="project">
                <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://erecipe.com/wp-content/uploads/2017/08/tacos.jpg) center / cover'}}></CardTitle>
                    <CardTitle>Taco Logs</CardTitle>
                    <CardText>
                        The go to place for taco enthusiasts to log tacos and earn Tacomplishments! Made with: React, Node, Redux, Sqlite3, Knex.js
                    </CardText>
                    <CardActions border>
                        <a href= "https://taco-logs.netlify.com/" target="_blank" rel="noopener noreferrer"> 
                            <Button colored>Site</Button> 
                        </a>
                        <a href= "https://github.com/RockmanExe/labs10-taco-log" target="_blank" rel="noopener noreferrer">
                            <Button colored>Github</Button>
                        </a>
                    </CardActions>
                  
                </Card>
            </div>

            <div className="project">
                <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://files.slack.com/files-pri/T4JUEB3ME-FJGEU77M0/download/87fsi.png) center / cover'}}></CardTitle>
                    <CardTitle>FairShare</CardTitle>
                    <CardText>
                        An app to keep track of everyone's contributions in a living or workspace! Made with: React, Node, Redux, Sqlite3, Knex.js
                    </CardText>
                    <CardActions border>
                        <a href= "https://goofy-sinoussi-c017bd.netlify.com" target="_blank" rel="noopener noreferrer"> 
                            <Button colored>Site</Button> 
                        </a>
                        <a href= "https://github.com/labs12-chores-1" target="_blank" rel="noopener noreferrer">
                            <Button colored>Github</Button>
                        </a>
                    </CardActions>
                </Card>
            </div>
   
            <div className="project">
                <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://cdn.oceanwp.org/wp-content/uploads/2017/07/portfolio-image.png) center / cover'}}></CardTitle>
                    <CardTitle>This Portfolio!</CardTitle>
                    <CardText>
                        This portfolio was made from scratch using React. Layout modeled after a template.
                    </CardText>
                    <CardActions border>
                        <a href= "https://may-alex-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
                            <Button colored>Site</Button> 
                        </a>
                        <a href= "https://github.com/RockmanExe/portfolio" target="_blank" rel="noopener noreferrer">
                            <Button colored>Github</Button>
                        </a>
                    </CardActions>
                </Card>
            </div>
            </div>
            <a href="#contact"><button className="projects-button">Get in Contact</button></a>
        </div>
    )
    
};

export default Projects;

