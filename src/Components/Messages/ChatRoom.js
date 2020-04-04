import Message from "./Message";
import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import moment  from 'moment'

@inject("userData")
@observer
class ChatRoom extends Component {
    constructor(){
        super()
        this.state = {
            input: ""
        }
    }

    inputHandler = e =>{
        this.setState({
            input: e.target.value
        })
    }

    sendMessage = () =>{
        let receiver, sender
        if(this.props.userConversation.user_id1 === this.props.userData.user.userId){
            receiver = this.props.userConversation.user_id2 
            sender = this.props.userConversation.user_id1 
        }
        else{
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
            <div className='main-container'>
                <div>{this.props.userConversation.facebookId}</div>
                
                <div onClick={this.props.userData.setShowChat}>back</div>
                <div className="header-container"></div>
                {this.props.userData.messages.map(m => <Message message={m} key={m.message_id} />)}
                <div className="input-container">
                    <input className="message-input" name="message" value={this.state.input} onChange={this.inputHandler}/>
                    <button className="btn-message" onClick={this.sendMessage} >send</button>
                </div>
            </div>
        );
    }
}

export default ChatRoom