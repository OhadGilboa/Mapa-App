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
          <div className="imgContainer">{user ? <img className="image" src={this.props.userData.user.picture} alt={this.props.userData.user.name} /> : <div></div>}</div>
          <div className="name">{user ? this.props.userData.user.name : null}</div>
          <div className="title">Mapa</div>
        </div>
      </div>)
  }
}
export default Header;