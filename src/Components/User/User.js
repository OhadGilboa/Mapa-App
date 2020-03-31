import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../../styles/user.css"


@inject('usersStore')
@observer
class User extends Component {
    render() {
        const user = this.props.user

        return (
            <div className="user">
                {/* <div className="status">{user.user_status}</div> */}
                <div className="person-name" className="firstName">{user.first_name}</div>
                <div className="person-name" className="lastName">{user.last_name}</div>
                <div className="mode" className={user.mode}></div>
                {/* <div className="imgContainer">
                <img src={user.picture} alt={user.first_name}></img>
                </div> */}
            </div>
        );
    }
}


export default User;