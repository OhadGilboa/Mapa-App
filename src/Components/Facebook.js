import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersList from './User/UsersList';



@inject("userData")
@observer
class Facebook extends Component {
    constructor() {
        super()
        this.state = {
            auth: false,
            first_name: '',
            last_name: '',
            email: '',
            picture: ''
        };
    }

    responseFacebook = response => {
        console.log(response)
        this.setState({
            auth: true,
            first_name: response.first_name,
            last_name: response.last_name,
            email: response.email,
            picture: response.picture.data.url
        });
        if (this.state.first_name) {
            this.props.userData.loggingIn(this.state.first_name, this.state.last_name, this.state.email, this.state.picture)
            this.props.userData.addUserToDataBase()
        }
    }

    componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    render() {
        let facebookData;
        this.state.auth ?
            facebookData = null :
            facebookData = (<FacebookLogin
                appId="578720732730431"
                autoLoad={true}
                fields="first_name,last_name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);
        return (
            <>
                {facebookData}
            </>
        );
    }
}

export default Facebook