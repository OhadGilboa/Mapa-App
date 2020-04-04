import Message from "./Message";
import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

@inject("userData")
@observer
class ChatRoom extends Component {
    

    render() {
        return (
            <div className='main-container'>
                <div>{this.props.facebookId}</div>
                <div onClick={this.props.userData.setShowChat}>back</div>
                <div className="header-container"></div>
                <div className="messages-container">
                    <Message />
                </div>
                <div className="input-container">
                    <input className="message-input" name="message" />
                    <button className="btn-message" >send</button>
                </div>
            </div>
        );
    }
}

export default ChatRoom