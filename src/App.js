import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import Landing from './Components/Landing';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
// import About from './Components/About';
// import Stats from './Components/Stats';



import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <Skills />
        <Projects />
        <Contact />
        {/* <Stats />
        <About /> */}
      </div>
    );
  }
}

export default App;
