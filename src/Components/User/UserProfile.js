import React, { Component } from 'react';
import { inject, observer } from "mobx-react";


@inject('usersStore')
@observer
class UserProfile extends Component {
    render() {
        return (
            <div className="profile-comp">
                <p>{this.props.usersStore.getFirstName()} {this.props.usersStore.getLastName()} </p>
                <span>{this.props.usersStore.getUserPicture()}</span>
            </div>
        );
    }
}
export default UserProfile