import React, { Component } from "react";
import Facebook from "./Facebook";
import Google from "./Google";


class Login extends Component { 
    render() {
    return (
      <>
        <Facebook />
        <Google />
      </>
    );
  }
}
export default Login;
