import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

@observer
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-comp">
        <Link className="link" to="/UsersList">
          <i className="fas fa-list"></i>
        </Link>
        <Link className="link" to="/Map">
          <i className="fas fa-map-marked-alt"></i>
        </Link>

        <Link className="link" to="/Messages">
          <i className="far fa-comments"></i>
        </Link>

        <Link className="link" to="/Profile">
          <i className="fas fa-user"></i>
        </Link>

      </div>
    );
  }
}
export default Navbar;
