import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import User from "./User";
import "../../styles/userList.css"
import "../../styles/user.css"

@inject('userData')
@observer
class UsersList extends Component {

  // index = this.props.userData.users.length

  // addingDistanceToUsers() {
  //   let dis = this.props.userData.user.distance.data
  //   for (let u of this.props.userData.users) {
  //     for (let d of dis) {
  //       if (u.facebookId === d.id) {
  //           u.distance = d.distance
  //       }
  //     }
  //   }
  // }

  removeFarPeople() {
    this.index = this.props.userData.users.findIndex(u => u.distance > this.props.userData.user.range)
  }

  removeMyself() {
    let indexToRemove = this.props.userData.users.findIndex(u => u.facebookId === this.props.userData.facebookId)
    this.props.userData.users.splice(indexToRemove, 1)
  }

  markYourself() {
    let index = this.props.userData.users.findIndex(u => u.id === this.props.userData.user.id)
    this.props.userData.users[index].current = true;
  }

  render() {
    this.props.userData.users.map(u => console.log(u.mode))
    return (
      <div className="userList">
        {this.props.userData.users.map((u, index) => this.props.userData.user.indexForRange > index && this.props.userData.user.modeSelected === "all" ? <User user={u} key={u.facebookId} /> : null)}
        {this.props.userData.users.map((u, index) => this.props.userData.user.indexForRange > index && this.props.userData.user.modeSelected === u.mode ? <User user={u} key={u.facebookId} /> : null)}
        <div className="footerPlace"></div>
      </div>
    )
  }
}

export default UsersList;