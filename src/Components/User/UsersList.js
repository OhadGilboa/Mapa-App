import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import User from "./User";
import "../../styles/userList.css"
import "../../styles/user.css"

@observer
@inject('usersStore')
@inject('userData')
class UsersList extends Component {

  constructor(){
    super()
    this.state= {
      users: []
    }
  }

  addingDistanceToUsers() {
    debugger
    let dis = this.props.userData.user.distance.data
    for (let u of this.state.users) {
      for (let d of dis) {
        if (u.facebookId === d.id) {
          u.distance = d.distance
        }
      }
    }
  }

  removeMyself() {
    let indexToRemove = this.state.users.findIndex(u => u.facebookId === this.props.userData.facebookId)
    this.state.users.splice(indexToRemove, 1)
  }

  componentDidMount(){
    debugger
    this.state.users = this.props.usersStore.users
    this.addingDistanceToUsers(this.state.users)
  }

  render() {
    //this.removeMyself(users)
    return (
      <div className="userList">
        <div className="headerPlace"></div>
        <div className="vl"></div>
        {this.state.users.map(u => <User user={u} key={u.facebookId} />)}
        <div className="footerPlace"></div>
        <div className="vl"></div>
      </div>
    )
  }
}

export default UsersList;