import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp'
import LogIn from './LogIn'
import AnxietyForm from './AnxietyForm'
import HomePage from './HomePage'
import DashBoard from './Dashboard'



class App extends Component {
  state ={
    user: {}
  }

  componentDidMount(){
    fetch('http://localhost:3001/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        user: json
      })
    })
  }

  render() {
    return (
      <div className="App">
        <HomePage user={this.state.user}/>
        <SignUp user={this.state.user}/>
        <LogIn user={this.state.user}/>
      </div>
    );
  }
}

export default App;
