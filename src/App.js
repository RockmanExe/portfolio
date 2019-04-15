import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import Landing from './Components/Landing';
import Stats from './Components/Stats';
import Projects from './Components/Projects';
import About from './Components/About';



import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path= "/" component={Landing} />
          <Route path= "/stats" component={Stats} />
          <Route path= "/aboutme" component={About} />
          <Route path= "/projects" component={Projects} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
