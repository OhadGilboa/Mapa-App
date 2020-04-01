import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../../styles/user.css"
import movie from "./icons/movie.svg"
import cigarette from "./icons/cigarette.svg"
import beer from "./icons/beer.svg"
import coffee from "./icons/coffee.svg"
import dog from "./icons/dog.svg"
import sport from "./icons/sport.svg"
import message from "./icons/message.svg"
import sos from "./icons/sos.svg"

@inject('usersStore')
@observer
class User extends Component {
    iconHandler(user) {
        switch (user.mode) {
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

    render() {
        const user = this.props.user
        return (
            <div className={user.mode ==="sos" ? "bigUser sosBackground" : "bigUser"}>
                <div className="user">
                    <div className="person-name" className="fullName">{user.first_name + ' ' + user.last_name}</div>
                    <div className="distance"> {user.distance}km</div>
                    {this.iconHandler(user)}
                </div>
                <div className="vl"></div>
            </div>
        );
    }
}


export default User;