import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './Top.js'
import Nav from './Nav.js'
import Main from './Main.js'
import './css/materialize.css'
import './css/our.css'
import './css/side.css'
import './css/nav.css'
import './css/material-icons.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top /> 
        <Nav />
        <main>
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
