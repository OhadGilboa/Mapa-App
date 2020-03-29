import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

@observer
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-comp">
        <Link className="link" to="/MainPage">
          <i className="fas fa-list"></i>
        </Link>
        <div className="vl"></div>
        <Link className="link" to="/Map">
          <i className="fas fa-map-marked-alt"></i>
        </Link>
        <div className="vl"></div>
        <Link className="link" to="/Messages">
          <i className="far fa-comments"></i>
        </Link>
        <div className="vl"></div>
        <Link className="link" to="/Profile">
          <i className="fas fa-user"></i>
        </Link>
        <div className="vl"></div>
      </div>
    );
  }
}
export default Navbar;
