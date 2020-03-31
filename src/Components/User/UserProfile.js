import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Popup from "reactjs-popup";

@inject("userData")
@observer
class UserProfile extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  inputHandler = (e) => {
    
  }

  render() {
    // const user = this.props.user;
    const user = {
      first_name: "Ohad",
      last_name: "Gilboa",
      picture: "https://randomuser.me/api/portraits/med/men/72.jpg",
      age: "21",
      email: "ogilboa3@gmail.com",
      gender: "male",
      gender: "male",
      status: "active",
      mode: "dog"
    };


    return (
      <div className="user-profile">
        <div className="imgContainer">
          <img src={user.picture} alt={user.first_name}></img>
        </div>
        <div className="profile-name">
          <div className="profile-firstName">{user.first_name}</div>
          <div className="profile-lastName">{user.last_name}</div>
        </div>
        <div className="profile-age">{user.age}</div>
        <div className="profile-email">{user.email}</div>
        <div className="profile-gender">{user.gender}</div>
        <div className="profile-status">{user.status}</div>
        
        <Popup trigger={<button><i className="fas fa-pencil-alt"></i></button>} position="right center">
          <div>
          <div>change your status</div>
          <input></input>
          </div>
        </Popup>
        <div className="profile-mode">{user.mode}</div>
        <Popup trigger={<button><i className="fas fa-pencil-alt"></i></button>} position="right center">
        <div>
        <div>change your mode</div>
          <input></input>
        </div>
        </Popup>
      </div>
    );
  }
}
export default UserProfile;
