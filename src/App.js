//=========App.js File=========

//Dependencies
import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
//Components
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage/Home';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
//Includes
import './App.css';
import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

//Run
class App extends Component {
  render() {
    return (
      // <Router>
      //   <div className="App">
      //       {
      //         /*<LoginPage />*/ <Home />
      //       }
      //       <Footer />
      //   </div>
      // </Router>

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
       </Routes>
        <div className="App" >
          <Outlet />
        </div>  
      </Router>
    );
  }
}

export default App;