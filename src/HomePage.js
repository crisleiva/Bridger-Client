import React, {Component} from "react"
import {Route, Switch, Link} from 'react-router-dom'


class HomePage extends Component{
  render(){
    return(
      <div id="HomePage">
      {/* Login/Signout button div */}
        <div id="LoginSignoutButton">
          <Link to="/login">
            <h3 id="Login" className="displayInline" >Login</h3>
          </Link>
          <h3 className="displayInline" >/</h3>
          <Link to="/signup">
            <h3 id="Signout"className="displayInline" >Sign Up</h3>
          </Link>
        </ div>
      {/* MainPage logo div */}
        <div id="MainPageLogo">
          <img src="https://cdn.pixabay.com/photo/2017/04/04/18/59/bonsai-2202769__340.png" height="100px" width="100px"/>
        </div>
      </div>
    )
  }
}

export default HomePage
