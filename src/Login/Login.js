// import React, { Component } from "react";
import Facebook from "./Facebook";
import Google from "./Google";
// import { inject, observer } from "mobx-react";
import "../styles/Login.css";

import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router-dom";

const Login = inject("userData")(
  observer((props) => {

    let history = useHistory();

    function handleClick() {
      history.push("/UsersList");
    }

    return <div className="loginButton">
      <div>
        <Facebook handleClick={handleClick} />
      </div>
      <div>
        <Google handleClick={handleClick} />
      </div>
    </div>;
  })
);

export default Login;
