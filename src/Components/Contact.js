import React, { Component } from 'react';
import github from '../github-logo.png';
import linkedin from '../linkedin-icon.png';
import './contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
            toggleModal:false
        };
        
    }

    handleChanges=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    resetForm = (e) => {
        this.setState({
            user_name: "",
            user_email: "",
            subject: "",
            message: ""
        })
    }

    handleToggle = () => {
        this.setState({toggleModal:!this.state.toggleModal})
        // this.resetForm();
    };

    render() {
    return (
        <div className= 'contact-container' Id="contact" ref={this.props.contactRef}>
            <h4 style= {{color:"white"}}>Send me an email!</h4>
            <h5>Have me make something for you or request my resume</h5>
            <div className={
                this.state.toggleModal===true 
                ? 'modal-display'
                : 'modal-hidden'
            }>
                <h4>Message Sent! I will reply when I get the chance.</h4>
                <h5>Thank you</h5>
                <button className="modal-close" onClick={this.handleToggle}>Close</button>
            </div>
            <form className="contact-form" id="contact-form">
               <div className="form-top">

                <input 
                    type="hidden" 
                    name="contact_number"
                />

               <input 
                  type="text"
                  placeholder="   Name"
                  name="user_name"
                  className="name-input"
                  value={this.state.user_name}
                  onChange={this.handleChanges}      
               
               />
               <input 
                  type="email"
                  placeholder="   Email"
                  name="user_email"
                  className="email-input"
                  value={this.state.user_email}
                  onChange={this.handleChanges}      
               
               />
               </div>
               <input 
                  type="text"
                  placeholder="   Subject"
                  name="subject"
                  className="subject-input"
                  value={this.state.subject}
                  onChange={this.handleChanges}      
               
               />
               <textarea 
                  type="text"
                  name="message"
                  placeholder="  Message"
                  className="message-input"
                  value={this.state.message}
                  onChange={this.handleChanges} 
               />
                <div className="form-bottom">
                    <button onClick={this.resetForm} className="clear-button"> Clear Form</button>

                    <input 
                        type="submit"
                        value="Send"
                        className="submit-button"
                        onClick={this.handleToggle}
                    />
                </div>
            </form>
                {/* <div className="form-top">
                    <input 
                        type="text" 
                        name="user_name"
                        className="name-input"
                        placeholder="Name" 
                    />
                
                    <input 
                        type="text" 
                       name="user_email" 
                        className="email-input"
                        placeholder="Email" 
                    />
                </div>

                <input 
                    type="text" 
                    name="subject"
                    placeholder="subject"
                    className="subject-input"
                />
                
                <textarea
                    type="text" 
                    name="message"
                    className="message-input" 
                    placeholder="Message" 
                />

                <div className="form-bottom">
                    <button onClick={this.resetForm} className="clear-button"> Clear Form</button>
                    <input type="submit" value="Send" className="submit-button" Send/>
                </div>
            </form> */}
           
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

