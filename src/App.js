import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'
import AnxietyForm from './AnxietyForm'
import HomePage from './HomePage'
import DashBoard from './Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <SignUp />
        <LogIn />
        <DashBoard />
      </div>
    );
  }
}

export default App;
