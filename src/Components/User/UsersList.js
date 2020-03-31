import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import User from "./User";
import "../../styles/userList.css"
import "../../styles/user.css"

@inject('usersStore')
@observer
class UsersList extends Component {

  componentDidMount() {
    this.props.usersStore.getUsers()
  }
  render() {
    let users = this.props.usersStore.users
    console.log(users)
    return (
      <div className="userList">
        <div className="headerPlace"></div>
        <div className="vl"></div>
        {users.map(u => <User user={u} key={u.email} />)}
        <div className="footerPlace"></div>
        <div className="vl"></div>
        </div>
    )
  }
}

export default UsersList;