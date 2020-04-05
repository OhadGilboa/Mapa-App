import React, { Component } from "react";
import Facebook from "./Facebook";
import Google from "./Google";
import { inject, observer } from "mobx-react";
import "../styles/Login.css"

@observer
@inject("userData")
class Login extends Component {

  renderLoginBtn = () => {
    return (
      <div className={this.props.userData.user.facebookId ? "loginDivHidden" : "loginDiv"}>
        <Facebook />
        <Google />
      </div>
    )
  }

  renderWelcome = () => {
    return (
      <div className="welcome">
        <div className="welcomeDiv"> Welcome + {this.props.userData.user.first_name}</div>
        <div className="welcomeBtn">Continue</div>
      </div>
    )
  }


  render() {
    console.log(this.props.userData.user.first_name)
    return (
      <>
        {this.props.userData.user.first_name ? this.renderWelcome() : this.renderLoginBtn()}
      </>
    );
  }
}
export default Login;
