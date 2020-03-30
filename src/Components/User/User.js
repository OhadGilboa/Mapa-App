import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

@inject('usersStore')
@observer
class User extends Component {
    render() {
        return (
            <div className="profile-comp">
                <h3>{this.props.usersStore.getFirstName()} {this.props.usersStore.getLastName()} </h3>
                <span>{this.props.usersStore.getUserPicture()}</span>
                <button className="user-btn" onClick="">press</button>
            </div>
        );
    }
}


export default User;