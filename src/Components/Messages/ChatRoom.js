import Message from "./Message";
import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import moment from 'moment'
import "../../styles/ChatRoom.css"

@inject("userData")
@observer
class ChatRoom extends Component {
    constructor() {
        super()
        this.state = {
            input: ""
        }
    }

    inputHandler = e => {
        this.setState({
            input: e.target.value
        })
    }

    sendMessage = () => {
        let receiver, sender
        if (this.props.userConversation.user_id1 === this.props.userData.user.userId) {
            receiver = this.props.userConversation.user_id2
            sender = this.props.userConversation.user_id1
        }
        else {
            receiver = this.props.userConversation.user_id1
            sender = this.props.userConversation.user_id2
        }
        let message = {
            message_date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            text: this.state.input,
            conversationId: this.props.userConversation.conversation_id,
            sender,
            receiver
        }
        this.props.userData.postMessage(message)
    }


    render() {
        return (
            <div className="chatRoom">
                <div className="headerPlace"></div>
                <div className="header-container">
                    <div onClick={this.props.userData.setShowChat}><i className="fas fa-long-arrow-alt-left"></i></div>
                    <div className="chatPartnerName">{this.props.userConversation.first_name + " " + this.props.userConversation.last_name}</div>
                    <i className="fas fa-info"></i>
                </div>
                <div className="vlMsgTop"></div>
                <div className="msgContainer">
                    <div className="marginTop"></div>
                    {this.props.userData.messages.map(m => <Message message={m} key={m.message_id} />)}
                    <div className="marginBottom"></div>

                </div>
                <div className="input-container">
                    <div className="vlMsgBottom"></div>
                    <input className="message-input" name="message" value={this.state.input} onChange={this.inputHandler} />
                    <button className="btn-message" onClick={this.sendMessage} >send</button>
                </div>
            </div>
        );
    }
}

export default ChatRoom