import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

@inject('usersStore')
@observer
class User extends Component {
    render() {

        console.log(this.props.user)
        return (
            <div className="profile-comp">
                <h3>{this.props.user.first_name} {this.props.user.last_name} </h3>
                <div><img src={this.props.user.picture} alt={this.props.user.first_name}></img></div>
                <button className="user-btn" onClick="">press</button>
            </div>
        );
    }
}


export default User;