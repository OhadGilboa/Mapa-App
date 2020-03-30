import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import User from "./User";

@inject('usersStore')
@observer
class UsersList extends Component {
  render() {
    let users = this.props.usersStore.getUsersList()
    return (
      <div className="mainPage-comp">
        {users.map(u => <User key={u.getEmail()}/>)}
      </div>
    )
  }
}

export default UsersList;