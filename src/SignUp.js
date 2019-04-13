import React from 'react'
import DashBoard from './Dashboard'

class SignUp extends React.Component {
  state = {
    name: '',
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
<<<<<<< HEAD
        <form onSubmit={(e) => this.props.sendSignUp(this.state, e)}>
          <input type="text" name="username" placeholder="Username" onChange={this.changeHandler} value={this.state.name}/>
          <input type='email' name='email' placeholder='Email' onChange={this.changeHandler} value={this.state.email} />
=======
        <form onSubmit={console.log}>
          <input type="text" name="name" placeholder="Username" onChange={this.changeHandler} value={this.state.name}/>
>>>>>>> seann
          <input type="password" name="password" placeholder="Password" onChange={this.changeHandler} value={this.state.password}/>
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    )
  }
}

export default SignUp;
