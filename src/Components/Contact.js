import React, { Component } from 'react';
import github from '../github-logo.png';
import linkedin from '../linkedin-icon.png';
import './contact.css'

class Contact  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }

    render() {
    return (
        <div className= 'contact-container' Id="contact" ref={this.props.contactRef}>
            <h4 style= {{color:"white"}}>Send me an email!</h4>
            <h5>Have me make something for you or request my resume</h5>
            <form className="contact-form">
               <div className="form-top">
               <input 
                  type="text"
                  placeholder="   Name"
                  name="taskName"
                  className="name-input"
                //   value={this.state.taskName}
                //   onChange={this.handleChanges}      
               
               />
               <input 
                  type="text"
                  placeholder="   Email"
                  name="email"
                  className="email-input"
                //   value={this.state.taskName}
                //   onChange={this.handleChanges}      
               
               />
               </div>
               <input 
                  type="text"
                  placeholder="   Subject"
                  name="subject"
                  className="subject-input"
                //   value={this.state.taskName}
                //   onChange={this.handleChanges}      
               
               />
               <textarea 
                  name="message"
                  placeholder="  Message"
                  className="message-input"
               />
               
            </form>
            <div className="form-bottom">
               <button className="clear-button"> Clear Form</button>
               <button className="submit-button">Send Message</button>
            </div>
            <div className="line-break">
                <h4 style= {{color:"white"}}>Find me on...</h4>
                
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
    }
};

export default Contact;

