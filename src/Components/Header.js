import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "../styles/Header.css"

@inject('userData')
@observer
class Header extends Component {
  render() {
    const user = this.props.userData.user
    console.log(this.props.userData.user)
    return (
      <div>
        <div className="imageAndName">
          <div className="imgContainer">{user ? <img className="image" src={user.picture} alt={user.first_name} /> : <div></div>}</div>
          <div className="name">
            <div className="firstName">{user ? user.first_name : null}</div>
            <div className="lsatName">{user ? user.last_name : null}</div>
          </div>
          <div className="title">Mapa</div>
        </div>
      </div>)
  }
}
export default Header;