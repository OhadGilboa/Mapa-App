import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import User from "./User";
import "../../styles/userList.css"
import "../../styles/user.css"

@inject('usersStore')
@inject('userData')
@observer
class UsersList extends Component {

  addingDistanceToUsers(users) {
    let dis = this.props.userData.user.distance.data
    for (let u of users) {
      for (let d of dis) {
        if (u.facebookId === d.id) {
          u.distance = d.distance
        }
      }
    }
  }

  removeMyself(users) {
    let indexToRemove = users.findIndex(u => u.facebookId === this.props.userData.facebookId)
    users.splice(indexToRemove, 1)
  }

  componentDidMount() {
    this.props.usersStore.getUsers()
  }
  
  render() {
    let users = this.props.usersStore.users
    //this.removeMyself(users)
    { this.addingDistanceToUsers(users) }
    console.log(users)
    return (
      <div className="userList">
        <div className="headerPlace"></div>
        <div className="vl"></div>
        {users.map(u => <User user={u} key={u.facebookId} />)}
        <div className="footerPlace"></div>
        <div className="vl"></div>
      </div>
    )
  }
}

export default UsersList;