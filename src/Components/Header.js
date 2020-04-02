import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Popup from "reactjs-popup";
import "../styles/Header.css"
import Settings from "./Settings"

@inject('userData')
@observer
class Header extends Component {




  render() {
    const user = this.props.userData.user
    return (
      <div>
        <div className="imageAndName">
          <div className="imgContainer">{user ? <img className="image" src={user.picture} alt={user.first_name} /> : <div></div>}</div>
          <div className="name">
            <div className="firstName">{user ? user.first_name : null}</div>
            <div className="lsatName">{user ? user.last_name : null}</div>
          </div>
          <div className="title">Mapa</div>
          <Popup
            trigger={
              <i className="fas fa-sliders-h"></i>
            }
            position="left top">
              <Settings />
          </Popup>
        </div>
      </div>)
  }
}
export default Header;