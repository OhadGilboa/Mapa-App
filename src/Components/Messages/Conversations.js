import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Conversation from "./Conversation";
import ChatRoom from "./ChatRoom";

@inject("userData")
@observer
class Conversations extends Component {


    componentDidMount() {
        this.props.userData.getConversations()
        this.props.userData.user.showChat = false
    }

    renderList = () => {
        return (
            <div className="conversations">
                {this.props.userData.user.conversations.map(uc => <Conversation getBack={this.getBack} userConversation={uc} key={uc.conversation_id} />)}
                <div className="footerPlace"></div>
            </div>
        );
    }


    renderRoom = () => {
        return (
            <ChatRoom />
        )
    }

    getBack = () => {
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
