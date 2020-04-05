import React, { Component } from "react";
import { inject, observer } from "mobx-react";

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
      <div className={"bigUser"}>
        <div className="user" onClick={this.sendBack}>
          <div className="person-name fullName">{user.first_name + ' ' + user.last_name}</div>
        </div>
        <div className="vl"></div>
      </div>
    );
  }
}
export default Conversation;
