import React, { Component } from 'react';
import './skills.css';
import { Card, CardTitle, CardText} from 'react-mdl';

class Skills extends Component {
    constructor() {
        super();
        this.state= {
            toggleCards:false
        };

    }

    handleToggle= (e) => {
        this.setState({
            toggleCards:!this.state.toggleCards
    }); console.log('LOOK HERE',this.state.toggleCards);
    }

    render() {
    return (
        <div className= "skills-container" Id="skills">
            <div className="skills-header">
                <h3>Skills</h3>
                {/* <div style= {{fontSize:'20px'}}>An Ever Growing List!</div> */}
            </div>

            <div className="skill-cards-1">
            <Card shadow={0} style={{width: '320px', margin: '20px'}}>
                <div style={{color: 'white', height: '190px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                </div>
                React
            </Card>
            <Card shadow={0} style={{width: '320px', margin: '20px'}}>
                <div style={{color: 'black', height: '190px', background: 'url(https://sledsworth.gallerycdn.vsassets.io/extensions/sledsworth/react-redux-es6-snippets/0.5.3/1530106605209/Microsoft.VisualStudio.Services.Icons.Default) center / cover'}}>
                </div>
                React-Redux
            </Card>
            <Card shadow={0} style={{width: '320px', margin: '20px'}}>
                <div style={{color: 'white', height: '190px', background: 'url(https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png) center / cover'}}>
                </div>
                Node.js
            </Card>
            </div>
            <h5 onClick={this.handleToggle}
                className={
                    this.state.toggleCards===false
                    ? "see-more"
                    : "see-more-hidden"}>
                ...See More
            </h5>

            <div className={
                this.state.toggleCards===false
                ? "skill-cards-2-hidden"
                : "skill-cards-2-display"}>

            <Card shadow={0} style={{width: '320px', margin: '20px'}}>
                <div style={{color: 'white', height: '190px', background: 'url(https://www.ihomeautomate.com/images/2017/02/sqlite3.png) center / cover'}}>
                </div>
                Sqlite3
            </Card>
            <Card shadow={0} style={{width: '320px', margin: '20px'}}>
                <div style={{color: 'white', height: '190px', background: 'url(https://cdn-images-1.medium.com/max/2400/1*Rxzsy_E2MgxPP5oVmh1Q_g.jpeg) center / cover'}}>
                </div>
                Javascript
            </Card>
            <Card shadow={0} style={{width: '320px', margin: '20px'}}>
                <div style={{color: 'white', height: '190px', background: 'url(https://i2.wp.com/www.serdarilarslan.com/wp-content/uploads/2019/01/python_logo.gif?fit=800%2C480) center / cover'}}>
                </div>
                Python
            </Card>
            <Card shadow={0} style={{width: '320px', margin: '20px'}}>
                <div style={{color: 'white', height: '190px', background: 'url(data:image/png;base64,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) center / cover'}}>
                </div>
                Django
            </Card>
            <Card shadow={0} style={{width: '320px', margin: '20px'}}>
                <div style={{color: 'white', height: '190px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tr8UOzGwoGY2wMgKJKocfRbBL-cU3yva2bHARd-XonRAKH6W1g) center / cover'}}>
                </div>
                HTML/CSS
            </Card>
            <Card shadow={0} style={{width: '320px', margin: '20px'}}>
                <div style={{color: 'white', height: '190px', background: 'url(http://www.stickpng.com/assets/images/58480a1ccef1014c0b5e4912.png) center / cover'}}>
                </div>
                Knex.js
            </Card>
            </div>
            <h5 onClick={this.handleToggle} 
                className={
                this.state.toggleCards===true
                ?"see-less"
                :"see-less-hidden"}>
                ...See Less
            </h5>
            <div className="project">
                <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '176px', background: 'url(https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/articles/waystobecomearelentlesslearner.jpg) center / cover'}}></CardTitle>
                    <CardText>
                        Here's a list of skills I plan on learning next:
                        <ul>
                            <li>Angular</li>
                            <li>React Hooks</li>
                            <li>React Native</li>
                            <li>Unity</li>
                            <li>Improve on all of the above</li>
                        </ul>
                    </CardText>
                </Card>
            </div>

            <span style={{fontSize:'20px', margin: '20px'}}>If it has good documentation, I can learn it!</span>
            <a href="#projects"> <button className="button">See some of my recent work</button> </a>
        </div>
    )
    }
}

export default Skills;