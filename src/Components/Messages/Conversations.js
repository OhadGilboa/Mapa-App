import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Conversation from "./Conversation";
import { Link } from "react-router-dom";
import User from "../User/User";
import ChatRoom from "./ChatRoom";

@inject("userData")
@observer
class Conversations extends Component {
    constructor() {
        super()
        this.state = {
            facebookId: ""
        }
    }

    componentDidMount() {
        this.props.userData.user.showChat = false
        console.log(this.props.userData.user.conversations)
    }

    renderList = () => {
        return (
            <div className="conversations">
                <div className="conversation">
                    <div className="userList">
                        <div className="headerPlace"></div>
                        <div className="vl"></div>
                        {this.props.userData.users.map(u => <Conversation getBack={this.getBack} user={u} key={u.facebookId} />)}
                        <div className="footerPlace"></div>
                        <div className="vl"></div>
                    </div>
                </div>
            </div>
        );
    }


    renderRoom = () => {
        return (
            <ChatRoom facebookId={this.state.facebookId} />
        )
    }

    getBack = facebookId => {
        this.setState({
            facebookId
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
