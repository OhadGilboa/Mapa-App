import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import { inject } from "mobx-react";


@inject("userData")
class Navbar extends Component {

clearInterval= ()=>{
  clearInterval(this.props.userData.interval)
}

  render() {
    return (
      <div className="navbar-comp">
        <Link onClick={this.clearInterval}className="link" to="/UsersList">
          <i className="fas fa-list navbarIcons"></i>
        </Link>
        <Link onClick={this.clearInterval}className="link" to="/Map">
          <i className="fas fa-map-marked-alt navbarIcons"></i>
        </Link>

        <Link onClick={this.clearInterval} className="link" to="/Messages">
          <i className="far fa-comments navbarIcons"></i>
        </Link>

        <Link onClick={this.clearInterval} className="link" to="/Profile">
          <i className="fas fa-user navbarIcons"></i>
        </Link>

      </div>
    );
  }
}
export default Navbar;
