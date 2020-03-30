import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { inject, observer } from 'mobx-react';


@inject("userData")
@observer
class Facebook extends Component {
    constructor() {
        super()
        this.state = {
            auth: false,
            name: '',
            email: '',
            picture: ''
        };
    }

    responseFacebook = response => {
        if (response.status !== 'unknown') {
            this.setState({
                auth: true,
                name: response.name,
                email: response.email,
                picture: response.picture.data.url
            });
            if (this.state.name) {
                this.props.userData.addUser(this.state.name, this.state.email, this.state.picture)
            }
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
                fields="name,email,picture"
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