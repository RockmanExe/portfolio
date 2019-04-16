import React from 'react';
import './projects.css';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

const Projects  = () => {

    return (
        <div className= 'project-container'>
            <div className="project">
                <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://erecipe.com/wp-content/uploads/2017/08/tacos.jpg) center / cover'}}>Taco Logs</CardTitle>
                    <CardText>
                        The go to place for taco enthusiasts to log tacos and earn Tacomplishments! Made with React.
                    </CardText>
                    <CardActions border>
                        <a href= "https://taco-logs.netlify.com/" target="_blank" rel="noopener noreferrer"> 
                            <Button colored>Site</Button> 
                        </a>
                        <a href= "https://github.com/RockmanExe/labs10-taco-log" target="_blank" rel="noopener noreferrer">
                            <Button colored>Github</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>

            <div className="project">
                <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'yellow', height: '176px', background: 'url(https://fbcd.co/product-lg/72dee529da636fedbb8bce04f204f75d_resize.jpg) center / cover'}}> Secret Santa App</CardTitle>
                    <CardText>
                        An app that automates the whole process for secret santa either online or locally on one phone or computer!
                    </CardText>
                    <CardActions border>
                        <Button colored> Currently in Progress!</Button> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
   
            <div className="project">
                <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '176px', background: 'url(http://melodrive.com/blog/wp-content/uploads/2017/02/score.jpg) center / cover'}}>Mystery Project</CardTitle>
                    <CardText>
                        An idea in my head that I would like to start after the secret santa app. The image is a hint!
                    </CardText>
                    <CardActions border>
                        <Button colored> Come back later!</Button> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        </div>
    )
    
};

export default Projects;

