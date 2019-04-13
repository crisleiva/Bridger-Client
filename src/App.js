import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'
import AnxietyForm from './AnxietyForm'
import HomePage from './HomePage'
import DashBoard from './Dashboard'


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

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <SignUp sendSignUp={this.sendSignUp}/>
        <LogIn />
      </div>
    );
  }
}

export default App;
