import React, { Component} from 'react';
// import { NavLink, Link } from 'react-router-dom';
import './nav.css'



class Nav extends Component {
   

    handleSectionScroll = (e, section) => {
        e.preventDefault();
        // window.scrollTo(0, 550)
        if (section === 'top'){
            window.scroll({
                top:0,
                behavior:'smooth'
            });
        }
        // else if (section === 'contact') {
        //     var element = document.getElementsByClassName('contact-container');
        //     element.scrollTo({
        //         behavior:'smooth'
        //     })
        // }
       
    }

   render() {
       var styles= {cursor:'pointer',marginRight:10, color:'white', textDecoration:'none'}
    return (
        <div className= "nav-container">
            <div className="nav-bar">        
                <nav style= {{display:'flex'}}> 
                    <div style={{cursor:'pointer',marginRight:10}} onClick={(evenet)=>this.handleSectionScroll(evenet,'top')}>Top</div>
                    <a href= "#skills" style={styles}>Skills</a>
                    <a href= "#projects" style={styles}>Projects</a>
                    <a href= "#contact" style={styles}>Contact</a>
                </nav>
            </div>
        </div>
    )
    }
};

export default Nav;