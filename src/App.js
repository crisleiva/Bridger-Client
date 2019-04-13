import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'
import AnxietyForm from './AnxietyForm'
import HomePage from './HomePage'
import DashBoard from './Dashboard'
import Chart from './chart.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <SignUp />
        <LogIn />
        <Chart />
      </div>
    );
  }
}

export default App;
