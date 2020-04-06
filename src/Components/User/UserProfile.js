import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Popup from "reactjs-popup";
import "../../styles/UserProfile.css";
import movie from "./icons/movie.svg"
import cigarette from "./icons/cigarette.svg"
import beer from "./icons/beer.svg"
import coffee from "./icons/coffee.svg"
import dog from "./icons/dog.svg"
import sport from "./icons/sport.svg"
import message from "./icons/message.svg"
import sos from "./icons/sos.svg"

@inject("userData")
@observer
class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      isOpenAge: false,
      isOpenMode: false,
      isOpenStatus: false,
      isOpenGender: false
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

  HandleOpenMode = () => this.setState({ isOpenMode: true, isOpenGender:false, isOpenStatus:false, isOpenAge:false })
  HandleOpenGender = () => this.setState({ isOpenGender: true, isOpenMode:false, isOpenStatus:false, isOpenAge:false })
  HandleOpenStatus = () => this.setState({ isOpenStatus: true,isOpenGender:false, isOpenMode:false, isOpenAge:false })
  HandleOpenAge = () => this.setState({ isOpenAge: true, isOpenGender:false, isOpenStatus:false, isOpenMode:false })



  changeValue = async e => {
    await this.setState({
      input: e.target.value
    });
  };
  updateStatus = async () => {
    this.props.userData.updateUserProfile("user_status", this.state.input);
    this.setState({
      input: "",
      isOpenStatus: false
    });
  };

  updateMode = async () => {
    console.log("im here")
    this.props.userData.updateUserProfile("mode", this.state.input);
    this.setState({
      input: "",
      isOpenMode: false
    });
  };
  updateAge = async () => {
    this.props.userData.updateUserProfile("age", this.state.input);
    this.setState({
      input: "",
      isOpenAge: false
    });
  };
  updateGender = async () => {
    this.props.userData.updateUserProfile("gender", this.state.input);
    this.setState({
      input: "",
      isOpenGender: false
    });
  };
  render() {
    const user = this.props.userData.user;
    return (
      <div className="user-profile">
        <img className="profile-image" src={user.picture} alt={user.first_name}></img>
        <div className="profile-name">
          <span className="nameTitle userProfileTitle">Name:</span>
          <div className="userFullName"> {user.first_name + " " + user.last_name}</div>
        </div>
        <div className="vlOnUserProfile"></div>
        <div className="profile-email">
          <span className="emailTitle userProfileTitle">Email:</span>
          <div className="userEmail">{user.email}</div>
        </div>
        <div className="vlOnUserProfile"></div>
        <div className="profile-mode">
          <div className="modeTitleAndIcon">
            <div className="modeTitleProfilePage userProfileTitle">Mode:</div>
            <div className="iconMode">{this.iconHandler(user.mode)}</div>
          </div>
          <Popup
            trigger={
              <i className="fas fa-pencil-alt logoForProfilePage"></i>
            }
            position="left top"
            on="click"
            open={this.state.isOpenMode}
            onOpen={this.HandleOpenMode}
          >
            <div>
              <div className="list-name">Select Mode</div>
              <select
                value={this.state.input}
                onChange={this.changeValue}
                className="List">
                <option value="">-select-</option>
                <option value="message">Chat</option>
                <option value="sos">Help</option>
                <option value="sport">Sport</option>
                <option value="coffee">Coffee</option>
                <option value="dog">Dog Walking</option>
                <option value="cigarette">Smoking</option>
                <option value="beer">let's Drink</option>
                <option value="movie">Movie</option>
              </select>
              <div className="buttonInPopUp" onClick={this.updateMode}> save </div>
            </div>
          </Popup>
        </div>
        <div className="vlOnUserProfile"></div>
        <div className="profile-age">
          <div>
            <div className="ageTitle userProfileTitle">Age:</div>
            <div className="text">{user.age}</div>
          </div>
          <Popup
            trigger={
              <i className="fas fa-pencil-alt logoForProfilePage"></i>
            }
            position="left top"
            on="click"
            open={this.state.isOpenAge}
            onOpen={this.HandleOpenAge}
          >
            <div>
              <div className="list-name">Select Age</div>
              <input
                type="number"
                value={this.state.input}
                onChange={this.changeValue}
              ></input>
              <div className="buttonInPopUp" onClick={this.updateAge}> save </div>
            </div>
          </Popup>
        </div>
        <div className="vlOnUserProfile"></div>
        <div className="profile-gender">
          <div>
            <div className="genderTitle userProfileTitle">Gender:</div>
            <div className="text">{user.gender === "undefined" ? null  : user.gender}</div>
          </div>
          <Popup
            trigger={
              <i className="fas fa-pencil-alt logoForProfilePage"></i>
            }
            position="left top"
            on="click"
            open={this.state.isOpenGender}
            onOpen={this.HandleOpenGender}
          >
            <div>
              <div className="list-name">Select Gender</div>
              <select
                value={this.state.input}
                onChange={this.changeValue}
                className="List">
                <option value="love">-select</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="Bigender">Bigender</option>
              </select>
              <div className="buttonInPopUp" onClick={this.updateGender}> save </div>
            </div>
          </Popup>
        </div>
        <div className="vlOnUserProfile"></div>
        <div className="profile-status">
          <div>
            <div className="statusTitle userProfileTitle">Status:</div>
            <div className="text">{user.user_status}</div>
          </div>
          <Popup
            trigger={
              <i className="fas fa-pencil-alt logoForProfilePage"></i>
            }
            position="left top"
            on="click"
            open={this.state.isOpenStatus}
            onOpen={this.HandleOpenStatus}
          >
            <div>
              <div className="list-name">Select Status</div>
              <select
                value={this.state.input}
                onChange={this.changeValue}
                className="List">
                <option value="love">-select</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="doNotDisturb">Do Not Disturb</option>
              </select>
              <div className="buttonInPopUp" onClick={this.updateStatus}> Save </div>
            </div>
          </Popup>
        </div>
        <div className="vlOnUserProfile"></div>
        <div className="profile-location">
          <div>
            <div className="locationTitle userProfileTitle">Location:</div>
            <div className="locationResult"> {Math.round(user.latitude * 100000) / 100000 + ", " + Math.round(user.longitude * 100000) / 100000}</div>
          </div>
          <i className="fas fa-map-marker-alt logoForProfilePage" onClick={this.props.userData.addPosition()}></i>
        </div>
      </div>
    );
  }
}
export default UserProfile;