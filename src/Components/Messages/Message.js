import React, { Component } from "react";
import Conversation from "./Conversation";

class Message extends Component {
  render() {
    console.log(this.props)
    return <div>
        {this.props.message.message_text}
    </div>;
  }
}
export default Message;
