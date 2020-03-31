import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Popup from "reactjs-popup";

@inject("userData")
@inject("usersStore")
@observer
class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  changeValue = async e => {
    await this.setState({
      input: e.target.value
    });
  };

  updateStatus = async () => {
    this.props.userData.updateUserProfile("user_status", this.state.input);
    this.setState({
      input: ""
    });
  };

  updateMode = async () => {
    this.props.userData.updateUserProfile("mode", this.state.input);
    this.setState({
      input: ""
    });
  };

  updateAge = async () => {
    this.props.userData.updateUserProfile("age", this.state.input);
    this.setState({
      input: ""
    });
  };

  updateGender = async () => {
    this.props.userData.updateUserProfile("gender", this.state.input);
    this.setState({
      input: ""
    });
  };

  render() {
    const user = this.props.userData.user;
    return (
      <div className="user-profile">
        <div className="imgContainer">
          <img src={user.picture} alt={user.first_name}></img>
        </div>
        <div className="profile-name">
          <div className="profile-firstName">{user.first_name}</div>
          <div className="profile-lastName">{user.last_name}</div>
        </div>
        <div className="profile-age">age: {user.age}</div>
        {user.age === "---" ? (
          <Popup
            trigger={
              <button>
                <i className="fas fa-pencil-alt"></i>
              </button>
            }
            position="right center"
          >
            <div>
              <div>state your age</div>
              <input
                value={this.state.input}
                onChange={this.changeValue}
              ></input>
              <button onClick={this.updateAge}> save </button>
            </div>
          </Popup>
        ) : null}
        <div className="profile-email">email: {user.email}</div>
        <div className="profile-gender">gender: {user.gender}</div>
        {user.gender === "---" ? (
          <Popup
            trigger={
              <button>
                <i className="fas fa-pencil-alt"></i>
              </button>
            }
            position="right center"
          >
            <div>
              <div>state your gender</div>
              <input
                value={this.state.input}
                onChange={this.changeValue}
              ></input>
              <button onClick={this.updateGender}> save </button>
            </div>
          </Popup>
        ) : null}
        <div className="profile-status">status: {user.user_status}</div>
        <Popup
          trigger={
            <button>
              <i className="fas fa-pencil-alt"></i>
            </button>
          }
          position="right center"
        >
          <div>
            <div>change your status</div>
            <input value={this.state.input} onChange={this.changeValue}></input>
            <button onClick={this.updateStatus}> save </button>
          </div>
        </Popup>
        <div className="profile-mode">mode: {user.mode}</div>
        <Popup
          trigger={
            <button>
              <i className="fas fa-pencil-alt"></i>
            </button>
          }
          position="right center"
        >
          <div>
            <div>change your mode</div>
            <input value={this.state.input} onChange={this.changeValue}></input>
            <button onClick={this.updateMode}> save </button>
          </div>
        </Popup>
      </div>
    );
  }
}
export default UserProfile;
