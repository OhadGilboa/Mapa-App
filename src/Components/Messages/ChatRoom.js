import Message from "./Message";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import moment from "moment";
import Popup from "reactjs-popup";
import "../../styles/ChatRoom.css";
import movie from "../User/icons/movie.svg"
import cigarette from "../User/icons/cigarette.svg"
import beer from "../User/icons/beer.svg"
import coffee from "../User/icons/coffee.svg"
import dog from "../User/icons/dog.svg"
import sport from "../User/icons/sport.svg"
import message from "../User/icons/message.svg"
import sos from "../User/icons/sos.svg"


@inject("userData")
@observer
class ChatRoom extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            isOpenInfo: false
        };
    }

    iconHandler(mode) {
        switch (mode) {
            case "cigarette":
                return (
                    <img src={cigarette} className="cigarette icon" alt={"cigarette"} />
                )
            case "movie":
                return (
                    <img src={movie} className="movie icon" alt={"movie"} />
                )
            case "beer":
                return (
                    <img src={beer} className="beer icon" alt={"beer"} />
                )
            case "coffee":
                return (
                    <img src={coffee} className="coffee icon" alt={"coffee"} />
                )
            case "dog":
                return (
                    <img src={dog} className="dog icon" alt={"dog"} />
                )
            case "sos":
                return (
                    <img src={sos} className="sos icon" alt={"sos"} />
                )
            case "sport":
                return (
                    <img src={sport} className="sport icon" alt={"sport"} />
                )
            default:
                return (
                    <img src={message} className="message icon" alt={"message"} />
                )
        }
    }

    getNewMsg = () => {
        let inter = setInterval( () => {
            this.props.userData.getMessagesOfConversation(this.props.userData.conversationHolder.conversation_id)
        }, 5000);
        this.props.userData.interval = inter
    }

    HandleOpenInfo = () => this.setState({ isOpenInfo: true })

    sendMessage = () => {
        if (this.state.input) {
            let user_receiving_id, user_sending_id
            if (this.props.userData.conversationHolder.user_id1 === this.props.userData.user.userId) {
                user_receiving_id = this.props.userData.conversationHolder.user_id2
                user_sending_id = this.props.userData.conversationHolder.user_id1
            }
            else {
                user_receiving_id = this.props.userData.conversationHolder.user_id1
                user_sending_id = this.props.userData.conversationHolder.user_id2
            }
            let message = {
                message_date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                message_text: this.state.input,
                conversationId: this.props.userData.conversationHolder.conversation_id,
                user_sending_id,
                user_receiving_id
            }
            this.props.userData.postMessage(message)
            this.setState({
                input: ""
            })
        }
    }


    inputHandler = (e) => {
        this.setState({
            input: e.target.value,
        });
    };


    componentDidMount() {
        this.getNewMsg()

    }




    render() {
        return (
            <div className="chatRoom">
                <div className="headerPlaceMsg"></div>
                <div className="header-container">
                    <i onClick={this.props.userData.setShowChat} className="fas fa-arrow-left"></i>
                    <div className="pictureAndName">
                        <img className="pictureMsg" src={this.props.userData.conversationHolder.picture} alt={this.props.userData.conversationHolder.first_name}></img>
                        <div className="chatPartnerName">{this.props.userData.conversationHolder.first_name + " " + this.props.userData.conversationHolder.last_name}</div>
                    </div>
                    <Popup
                        trigger={<i className="fas fa-info"></i>}
                        position="left top"
                        on="click"
                        open={this.state.isOpenInfo}
                        onOpen={this.HandleOpenInfo}
                    >
                        <div className="infoItems">
                            <div className="infoItem infoItem-picture">
                                <img src={this.props.userData.conversationHolder.picture} alt={this.props.userData.conversationHolder.facebookId}></img>
                            </div>
                            <div className="infoItem"><span className="info-titles">Name</span>:{" "}
                                {this.props.userData.conversationHolder.first_name +
                                    " " +
                                    this.props.userData.conversationHolder.last_name}
                            </div>
                            <div className="infoItem"><span className="info-titles">Age</span>:{" "}
                                {this.props.userData.conversationHolder.age}
                            </div>
                            <div className="infoItem"><span className="info-titles">Gender</span>:{" "}
                                {this.props.userData.conversationHolder.gender}
                            </div>
                            <div className="infoItem"><span className="info-titles">Status</span>:{" "}
                                {this.props.userData.conversationHolder.user_status}
                            </div>
                            {this.props.userData.conversationHolder.email ?
                                <div className="infoItem"><span className="info-titles">Email</span>:{" "}
                                    {this.props.userData.conversationHolder.email}
                                </div> : null}
                            <div className="iconMode infoItem"><span className="info-titles">Mode</span>:{" "}
                                {this.iconHandler(this.props.userData.conversationHolder.mode)}</div>
                        </div>
                    </Popup>
                </div>
                <div className="vlMsgTop"></div>
                <div className="msgContainer">
                    <div className="marginTop"></div>
                    {this.props.userData.messages.map((m, index) => (
                        <Message message={m} key={index} />
                    ))}
                    <div className="marginBottom"></div>
                </div>
                <div className="input-container">
                    <input
                        className="message-input"
                        autocomplete="off"
                        name="message"
                        value={this.state.input}
                        onChange={this.inputHandler}
                    />
                    <button className="btn-message" onClick={this.sendMessage}>
                        <i className="fas fa-paper-plane"></i>

                    </button>
                </div>
            </div>
        );
    }

}

export default ChatRoom;
