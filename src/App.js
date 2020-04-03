import React, { Component } from "react";
import "./App.css";
import { observer, inject } from "mobx-react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import UsersList from "./Components/User/UsersList";
import Map from "./Components/MapContainer";
import Messages from "./Components/Messages/Messages";
import UserProfile from "./Components/User/UserProfile";
import Header from "./Components/Header";
import Login from "./Login/Login";
// const axios = require('axios')

@inject("userData")

@observer
class App extends Component {

  //getUsersOnline() {
  //return axios.get(`http://localhost:4200/transactions`)
  //}

  //async componentDidMount() {
  // const usersOnline = await this.getUsersOnline()
  //}

  // getUsersOnline() {
  //   return axios.get(`http://localhost:4200/transactions`)
  // }

  // async componentDidMount() {
  //   const usersOnline = await this.getUsersOnline()
  // }


  render() {
    return (
      <Router>
        <div className="mainRoutes">
          <div className="header">
            <Header />
          </div>
          <div className="container">
            <Route path="/" exact render={() => <div> {this.props.userData.user.first_name ? <Redirect to="/" /> : <Login />} </div>} />
            <Route path="/UsersList" exact render={() => <div> {this.props.userData.user.first_name ? <UsersList /> : <Redirect to="/" />}  </div>} />
            <Route path="/Map" exact render={() => <div>{this.props.userData.user.first_name ? <Map /> : <Redirect to="/" />}  </div>} />
            <Route path="/Messages" exact render={() => <div> {this.props.userData.user.first_name ? <Messages /> : <Redirect to="/" />}  </div>} />
            <Route path="/Profile" exact render={() => <div className="userProfileApp"> {this.props.userData.user.first_name ? <UserProfile /> : <Redirect to="/" />} </div>} />
          </div>
          <div className="navbar">
            <Navbar />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
