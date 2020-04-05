import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "../../styles/Conversation.css";


@inject("userData")
@observer
class Conversation extends Component {

  sendBack = () => {
    this.props.userData.getMessagesOfConversation(this.props.userConversation.conversation_id)
    this.props.getBack(this.props.userConversation)
  }


  render() {
    let user = this.props.userConversation
    return (
      <div className="conversation">
        <div className={user.mode === "sos" ? "bigUser sosBackground" : user.current ? "bigUser currentUser" : "bigUser"} >
          <div className="user-conversation" onClick={this.sendBack}>
            <div className="person-picture"><img className="imgContainer-user" src={user.picture} alt={user.facebookId}></img></div>
            <div className="person-name fullName">{user.first_name + ' ' + user.last_name}</div>
          </div>
          <div className="vl"></div>
        </div>
      </div>
    );
  }
}
export default Conversation;
