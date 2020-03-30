import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "../styles/Header.css"

@inject('userData')
@observer
class Header extends Component {
  render() {
    const user = this.props.userData.user
    //const user = this.props.userData.getUser();
    console.log(user)
    return <div>
    <div className="title"> Mapa - Meet awesome people around</div>
        <div>
          {user ? this.props.userData.user.name : null}</div>
    </div>;
  }
}
export default Header;