import React, { Component } from "react";
import "./App.css";
import { observer, inject } from "mobx-react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersList from "./Components/User/UsersList";
import Map from "./Components/MapContainer";
import Messages from "./Components/Messages/Messages";
import UserProfile from "./Components/User/UserProfile";
import Header from "./Components/Header";
import Login from "./Login/Login";
// const axios = require('axios')

@inject("usersStore")
@inject("userData")

@observer
class App extends Component {

  //getUsersOnline() {
    //return axios.get(`http://localhost:4200/transactions`)
  //}

  //async componentDidMount() {
  // const usersOnline = await this.getUsersOnline()
    //this.props.usersStore.updateUsersInRange(usersOnline.data)
   //}
  
  // getUsersOnline() {
  //   return axios.get(`http://localhost:4200/transactions`)
  // }

  // async componentDidMount() {
  //   const usersOnline = await this.getUsersOnline()
  //   this.props.usersStore.updateUsersInRange(usersOnline.data)
  // }

    
  render() {
    return (
      <Router>
        <div className="mainRoutes">
          <div className="header">
                <Header />
          </div>
          <div className="container">
          <Route exact path="/" render={() => <div> <Login /> </div>} />
            <Route path="/UsersList" exact render={() => <div> {this.props.userData.user.first_name ? <UsersList /> : <Login />}  </div>} />
            <Route path="/Map" exact render={() => <div>{this.props.userData.user.first_name ? <Map />: <Login />}  </div>} />
            <Route path="/Messages" exact render={() => <div> {this.props.userData.user.first_name ?<Messages />: <Login />}  </div>} />
            <Route path="/Profile" exact render={() => <div className="userProfileApp"> {this.props.userData.user.first_name ?<UserProfile /> : <Login />} </div>} />
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
