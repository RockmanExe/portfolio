import React, { Component } from 'react';
import github from '../github-logo.png';
import linkedin from '../linkedin-icon.png';
import './contact.css'

class Contact  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "FEATURE NOT YET FUNCTIONAL",
            toggleModal:false
        };
        
    }

    handleChanges=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    resetForm = (e) => {
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: "FEATURE NOT YET FUNCTIONAL"
        })
    }

    handleToggle = () => {
        this.setState({toggleModal:!this.state.toggleModal})
        this.resetForm();
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
                <h4>This feature is not yet functional, this custom modal will update once it works!</h4>
                <h5>Thank you</h5>
                <button className="modal-close" onClick={this.handleToggle}>Close</button>
            </div>
            <form className="contact-form" id="contact-form">
               <div className="form-top">
               <input 
                  type="text"
                  placeholder="   Name"
                  name="name"
                  className="name-input"
                  value={this.state.name}
                  onChange={this.handleChanges}      
               
               />
               <input 
                  type="text"
                  placeholder="   Email"
                  name="email"
                  className="email-input"
                  value={this.state.email}
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
                  name="message"
                  placeholder="  Message"
                  className="message-input"
                  value={this.state.message}
                  onChange={this.handleChanges} 
               />
               
            </form>
            <div className="form-bottom">
               <button onClick={this.resetForm} className="clear-button"> Clear Form</button>
               <button onClick={this.handleToggle} className="submit-button">Send Message</button>
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

