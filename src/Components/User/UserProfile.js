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
@inject("usersStore")
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

  HandleOpenMode = () => this.setState({isOpenMode: true})
  HandleOpenGender = () => this.setState({isOpenGender: true})
  HandleOpenStatus = () => this.setState({isOpenStatus: true})
  HandleOpenAge = () => this.setState({isOpenAge: true})



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
    console.log(user.range);
    
    return (
      <div className="user-profile">
        <img className="profile-image" src={user.picture} alt={user.first_name}></img>
        <div className="profile-name">
          <span className="categories">Name:</span> {user.first_name + " " + user.last_name}
        </div>
        <div className="profile-email"><span className="categories">Email:</span> {user.email}</div>
        <div className="profile-age">
          <span className="categories">Age:</span> {user.age}
          <Popup
            trigger={
              <button className="PopUp">
                <i className="fas fa-pencil-alt"></i>
              </button>
            }
            position="right center"
            on="click"
            open={this.state.isOpenAge}
            onOpen={this.HandleOpenAge}
          >
            <div>
              <div className="list-name">Select Age</div>
              <input
                type="text"
                value={this.state.input}
                onChange={this.changeValue}
              ></input>
              <button onClick={this.updateAge}> save </button>
            </div>
          </Popup>
        </div>
        <div className="profile-gender">
          <span className="categories">Gender:</span> {user.gender}
          <Popup
            trigger={
              <button>
                <i className="fas fa-pencil-alt"></i>
              </button>
            }
            position="right center"
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
              <button onClick={this.updateGender}> save </button>
            </div>
          </Popup>
        </div>
        <div className="profile-status">
          <span className="categories">Status:</span> {user.user_status}
          <Popup
            trigger={
              <button>
                <i className="fas fa-pencil-alt"></i>
              </button>
            }
            position="right center"
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
                <option value="online">online</option>
                <option value="offline">offline</option>
                <option value="doNotDisturb">Do Not Disturb</option>
              </select>
              <button onClick={this.updateStatus}> save </button>
            </div>
          </Popup>
        </div>
        <div className="profile-mode">
          <span className="categories">Mode:</span>{this.iconHandler(user.mode)}
          <Popup
            trigger={
              <button>
                <i className="fas fa-pencil-alt"></i>
              </button>
            }
            position="right center"
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
              <button onClick={this.updateMode}> save </button>
            </div>
          </Popup>
        </div>
        <div className="profile-location">
          <span className="categories">Location:</span> {user.latitude + "," + user.longitude}
        </div>
      </div>
    );
  }
}
export default UserProfile;