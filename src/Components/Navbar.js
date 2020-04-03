import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-comp">
        <Link className="link" to="/UsersList">
          <i className="fas fa-list navbarIcons"></i>
        </Link>
        <Link className="link" to="/Map">
          <i className="fas fa-map-marked-alt navbarIcons"></i>
        </Link>

        <Link className="link" to="/Messages">
          <i className="far fa-comments navbarIcons"></i>
        </Link>

        <Link className="link" to="/Profile">
          <i className="fas fa-user navbarIcons"></i>
        </Link>

      </div>
    );
  }
}
export default Navbar;
