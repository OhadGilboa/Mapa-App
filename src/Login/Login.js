import React, { Component } from "react";
import Facebook from "./Facebook";
import Google from "./Google";
import LoginRegister from "../Components/LoginRegister";
import { inject } from "mobx-react";

@inject("userData")
class Login extends Component {
  render() {
    return (
      <div className={this.props.userData.user.facebookId ? "loginDivHidden" : "loginDiv"}>
          <Facebook />
          <Google />
      </div>
    );
  }
}
export default Login;
