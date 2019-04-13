import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'
import AnxietyForm from './AnxietyForm'
import HomePage from './HomePage'
import DashBoard from './Dashboard'
import {Route, Switch, Link} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
