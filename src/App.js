import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'
import AnxietyForm from './AnxietyForm'
import HomePage from './HomePage'
import DashBoard from './Dashboard'
import {Route, Switch, Link, withRouter} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" render={() => <LogIn user={this.state.user}/>}/>
          <Route path="/signup" render={() => <SignUp user={this.state.user} sendSignUp={this.sendSignUp}/>}/>
          <Route path="/" component={HomePage}/>f
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
