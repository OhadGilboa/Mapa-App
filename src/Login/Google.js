import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { inject, observer } from "mobx-react";



@inject("userData")
@observer
class Google extends Component {
  constructor() {
    super();
    this.state = {
      auth: false,
      first_name: "",
      last_name: "",
      email: "",
      picture: "",
      facebookId: ""
    };
  }

  responseGoogle = async response => {
    this.setState({
      auth: true,
      first_name: response.profileObj.givenName,
      last_name: response.profileObj.familyName,
      email: response.profileObj.email,
      picture: response.profileObj.imageUrl,
      facebookId: response.profileObj.googleId
    });
    await this.props.userData.loggingIn(this.state.first_name, this.state.last_name, this.state.email, this.state.picture, this.state.facebookId)
    this.props.handleClick()
  }

  render() {

    return (
      <>
        <GoogleLogin
          clientId="1078111533235-0m92tor2vngroac278sucl8fj20ojk6i.apps.googleusercontent.com"
          onSuccess={this.responseGoogle}
        />

      </>
    );
  }
}
export default Google;