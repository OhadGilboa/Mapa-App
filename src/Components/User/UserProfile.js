import React, { Component } from 'react';
import { inject, observer } from "mobx-react";


@inject('usersStore')
@observer
class UserProfile extends Component {
    render() {
        return (
            <div className="profile-comp">
                <div>USER PROFILE</div>
            </div>
        );
    }
}
export default UserProfile