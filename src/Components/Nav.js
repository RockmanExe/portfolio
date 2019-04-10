import React from 'react';
import { Layout, Navigation, Header, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return (
        <div className= "nav-container" style={{height: '300px', position: 'relative'}}>
            <Layout>
                <Header transparent title="Adalberto May" style={{color: 'white'}}> 
                    <Navigation>
                        <Link to="/projects">Projects</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <a href="#">Link</a>
                    </Navigation>
                </Drawer>
            </Layout>
        </div>
            )
};

export default Nav;