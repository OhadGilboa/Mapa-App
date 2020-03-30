import React, { Component } from "react";
import "../styles/LoginRegister.css"

class LoginRegister extends Component {
  render() {
    return <div>
      <div id="login">
        <div id="user-password">
          <div className="text text-username">Username:</div>
          <input className="input input-username"></input>
          <div className="text text-password">Password:</div>
          <input className="input input-password"></input>
        </div>
      <button id="button-submit">submit</button>
      </div>
    </div>;
  }
}
export default LoginRegister;
