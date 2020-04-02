import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import User from "./User";
import "../../styles/userList.css"
import "../../styles/user.css"

@observer
@inject('usersStore')
@inject('userData')
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

  sortUsersList(users){
    users.sort()
  }
  
  render() {
    let users = this.props.usersStore.users
    this.addingDistanceToUsers(users)
    this.sortUsersList(users)
    //this.removeMyself(users)
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