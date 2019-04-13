import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp />
        <LogIn />
      </div>
    );
  }
}

export default App;
