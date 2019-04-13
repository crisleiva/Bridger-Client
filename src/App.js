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
        })
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
      body: JSON.stringify({user: userObj })
    })
    .then(res => res.json())
    .then(userData => {
      this.setState({
        user: userData.user
      }, () => {
        localStorage.setItem("token", userData.jwt)
        this.props.history.push('/dashboard')
      })
    })
  }

  handleLogin = (userObj, e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: userObj})
    })
    .then(res => res.json())
    .then(userData => {
      localStorage.setItem('token', userData.jwt)
      this.setState({
        user: userData.user
      }, () => this.props.history.push('/dashboard'))
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
      <nav>
        <li onClick={this.handleLogOut}>
          logout
        </li>
      </nav>
        <Switch>
          <Route path="/dashboard" render={() => <DashBoard user={this.state.user}/>}/>
          <Route path="/login" render={() => <LogIn user={this.state.user} handleLogin={this.handleLogin}/>}/>
          <Route path="/signup" render={() => <SignUp user={this.state.user} sendSignUp={this.sendSignUp}/>}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
