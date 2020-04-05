import React, { Component } from "react";
import { inject } from "mobx-react";
import * as Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;


@inject("userData")
class Message extends Component {
  render() {
    scroll.scrollToBottom()
    console.log("aviv")
    return (
      <span className={this.props.userData.user.userId === this.props.message.user_sending_id ? "msgSending" : "msgReceiving"}>
        {this.props.message.message_text}
      </span>

    )
  }
}
export default Message;
