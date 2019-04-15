import React from 'react';
import { Layout, Navigation, Header } from 'react-mdl';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return (
        <div className= "nav-container" style={{height: '70px', position: 'relative'}}>
            <Layout>
                <Header className="nav-bar" title={<Link style={{textDecoration: 'none', color: 'white'}} to= "/"> Adalberto May </Link>}>
                    <Navigation>
                        <Link to="/projects">Projects</Link>
                        <Link to="/stats"> Stats</Link>
                        <Link to="/aboutme">About/Contact</Link>
                    </Navigation>
                </Header>
                {/* <Drawer title="Title">
                    <Navigation>
                        <a href="/">Home</a>
                    </Navigation>
                </Drawer> */}
            </Layout>
        </div>
            )
};

export default Nav;