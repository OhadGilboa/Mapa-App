import React from "react";
import Facebook from "./Facebook";
import Google from "./Google";
import "../styles/Login.css";
import loginAvatar from "../Components/User/icons/logo.svg"
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router-dom";

const Login = inject("userData")(
  observer((props) => {

    let history = useHistory();

    function handleClick() {
      history.push("/UsersList");
    }

    return <div className="loginButton">
      <div className="logoTitle">
        <span className="capitalLetter">M</span>
        <span className="smallLetters">eet </span>
        <span className="capitalLetter">A</span>
        <span className="smallLetters">wesome </span>
        <span  className="capitalLetter">P</span>
        <span className="smallLetters">eople </span>
        <span className="capitalLetter">A</span>
        <span className="smallLetters">round </span>
      </div>
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
