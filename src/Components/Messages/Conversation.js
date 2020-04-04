import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import User from "../User/User";
import ChatRoom from "./ChatRoom";

@inject("userData")
@observer
class Conversation extends Component {

  sendBack = () => {
   this.props.getBack(this.props.user.facebookId)
  }


  render() {
    return (
      <div className={this.props.user.mode === "sos" ? "bigUser sosBackground" : this.props.user.current ? "bigUser currentUser" : "bigUser"} >
        <div className="user" onClick={this.sendBack}>
          <div className="person-name" className="fullName">{this.props.user.first_name + ' ' + this.props.user.last_name}</div>
        </div>
        <div className="vl"></div>
      </div>
    );
  }
}
export default Conversation;
