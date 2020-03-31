import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../../styles/user.css"


@inject('usersStore')
@observer
class User extends Component {
    render() {
        const user = this.props.user

        return (
            <div className="bigUser">
                <div className="user">
                    <div className="person-name" className="fullName">{user.first_name + ' ' + user.last_name}</div>
                    <div className="mode" className={user.mode}></div>
                    <div className="distance"> 78KM</div>
                </div>
                <div className="vl"></div>
            </div>
        );
    }
}


export default User;