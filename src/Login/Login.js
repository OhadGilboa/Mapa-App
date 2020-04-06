import React from "react";
import Facebook from "./Facebook";
import Google from "./Google";
import "../styles/Login.css";

import { inject, observer } from "mobx-react";
import { useHistory } from "react-router-dom";

const Login = inject("userData")(
  observer((props) => {
  
      let history = useHistory();

      function handleClick() {
        history.push("/UsersList");
      }

    return <div>
        <Facebook handleClick={handleClick}/>
        <Google handleClick={handleClick}/>
    </div>;
  })
);

export default Login;
