import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'
import AnxietyForm from './AnxietyForm'
import HomePage from './HomePage'

class App extends Component {

  state = {  
    user:{}
  }

  componentDidMount = () => {
    if (localStorage.getItem('token')) {
      fetch('http://localhost:3000/current_user', {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
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

  sendSignUp = userObj => {
    fetch('http://localhost:3000/current_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify({user: userObj})
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
