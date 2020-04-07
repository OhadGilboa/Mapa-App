import React from "react";
import Facebook from "./Facebook";
import Google from "./Google";
import "../styles/Login.css";
import loginAvatar from "./loginAvatar.png"
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router-dom";

const Login = inject("userData")(
  observer((props) => {

    let history = useHistory();

    function handleClick() {
      history.push("/UsersList");
    }

    return <div className="loginButton">
      <img className="loginAvatar" src={loginAvatar} alt={null}></img>
      <div>
        <Facebook handleClick={handleClick} />
      </div>
      <div>
        <Google handleClick={handleClick} />
      </div>
    </div>
  })
);

export default Login;
