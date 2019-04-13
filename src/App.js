import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'
import AnxietyForm from './AnxietyForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp />
        <LogIn />
        <AnxietyForm />
      </div>
    );
  }
}

export default App;
