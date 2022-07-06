//=========App.js File=========

//Dependencies
import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
//Components
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage/Home';
import Footer from './Components/Footer/Footer';
//Includes
import './App.css';

//Run
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            {
              <LoginPage /> /*<Home />*/
            }
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;