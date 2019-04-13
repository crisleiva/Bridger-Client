import React from 'react'
import DashBoard from './Dashboard.js'

class LogIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  render(){
    return (
      <div>
        <form onSubmit={() => this.props.handleLogin(this.state)}>
          <input type="text" name="email" placeholder="Username" onChange={this.changeHandler} value={this.state.email}/>
          <input type="password" name="password" placeholder="Password" onChange={this.changeHandler} value={this.state.password}/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    )
  }
}

export default LogIn;
