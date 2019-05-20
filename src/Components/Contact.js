import React, { Component } from 'react';
import './contact.css'

class Contact  extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
    return (
        <div className= 'contact-container'>
           <form className="contact-form">
               <input 
                  type="text"
                  placeholder="name"
                  name="taskName"
                  className="name-input"
                //   value={this.state.taskName}
                //   onChange={this.handleChanges}      
               
               />
               <input 
                  type="text"
                  placeholder="email"
                  name="email"
                  className="email-input"
                //   value={this.state.taskName}
                //   onChange={this.handleChanges}      
               
               />
               <input 
                  type="text"
                  placeholder="subject"
                  name="subject"
                  className="subject-input"
                //   value={this.state.taskName}
                //   onChange={this.handleChanges}      
               
               />
               <textarea 
                  name="message"
                  placeholder="message"
                  className="message-input"
               />
               
           </form>
        </div>
    )
    }
};

export default Contact;

