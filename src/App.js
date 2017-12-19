import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './Top.js'
import Nav from './Nav.js'
import './css/materialize.css'
import './css/material-icons.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top /> 
        <Nav />
      </div>
    );
  }
}

export default App;
