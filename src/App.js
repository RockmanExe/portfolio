import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import Landing from './Components/Landing';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';


import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path= "/" component={Landing} />
          <Route path= "/resume" component={Resume} />
          <Route path= "/aboutme" component={About} />
          <Route path= "/projects" component={Projects} />
          <Route path= "/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
