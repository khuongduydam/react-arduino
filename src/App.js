import React, { Component } from 'react';
import './App.css';
import LedContainer from './components/LedContainer'
import './bootstrap.min.css'

const logo = "https://vinova.sg/wp-content/uploads/2015/04/Vinova_Logo.png"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container text-center">
            <img src={logo} />
          </div>
        </header>
        <LedContainer />
      </div>
    );
  }
}

export default App;
