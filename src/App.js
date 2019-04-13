import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'
import AnxietyForm from './AnxietyForm'
import HomePage from './HomePage'
import DashBoard from './Dashboard'
import {Route, Switch, Link, withRouter} from 'react-router-dom'



class App extends Component {
  state ={
    user: {}
  }

  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      fetch('http://localhost:3001/current_user', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      })
      .then( res => res.json())
      .then(userJson => {
        this.setState({
          user: userJson.user
        }, () => console.log(this.state))
      })
    }
  }

  sendSignUp = (userObj,e) => {
    e.preventDefault()
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: {...userObj, email: 'anythng' }  })
    })
    .then(res => res.json())
    .then(userData => {
      this.setState({
        user: userData.user
      }, () => {
        localStorage.setItem("token", userData.jwt);
      })
    })
  }

  handleLogOut = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem('token')
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" render={() => <LogIn user={this.state.user}/>}/>
          <Route path="/signup" render={() => <SignUp user={this.state.user} sendSignUp={this.sendSignUp}/>}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
