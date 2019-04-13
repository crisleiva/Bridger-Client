import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'
import AnxietyForm from './AnxietyForm'
import HomePage from './HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <SignUp />
        <LogIn />
        <AnxietyForm />
      </div>
    );
  }
}

export default App;
