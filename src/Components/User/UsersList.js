import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import User from "./User";
import "../../styles/userList.css"

@inject('usersStore')
@observer
class UsersList extends Component {

  componentDidMount(){
    this.props.usersStore.getUsers()
  }
  render() {
    let users = this.props.usersStore.users
    console.log(users)
    return (
      <div className="userList">
        {users.map(u => <User user={u} key={u.email}/>)}
      </div>
    )
  }
}

export default UsersList;