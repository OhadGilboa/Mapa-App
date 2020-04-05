import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Conversation from "./Conversation";
import ChatRoom from "./ChatRoom";

@inject("userData")
@observer
class Conversations extends Component {
    constructor() {
        super()
        this.state = {
            userConversation: ""
        }
    }

    componentDidMount() {
        this.props.userData.getConversations()
        this.props.userData.user.showChat = false
    }

    renderList = () => {
        return (
            <div className="conversations">
                <div className="conversation">
                        <div className="headerPlace"></div>
                        <div className="vl"></div>
                        {this.props.userData.user.conversations.map(uc => <Conversation getBack={this.getBack} userConversation={uc} key={uc.conversation_id} />)}
                        <div className="footerPlace"></div>
                        <div className="vl"></div>
                </div>
            </div>
        );
    }


    renderRoom = () => {
        return (
            <ChatRoom userConversation={this.state.userConversation} />
        )
    }

    getBack = userConversation => {
        this.setState({
            userConversation
        })
        this.props.userData.setShowChat()
    }

    render() {
        return (
            <div>
                {this.props.userData.user.showChat ? this.renderRoom() : this.renderList()}
            </div>
        );
    }
}


export default Conversations;
