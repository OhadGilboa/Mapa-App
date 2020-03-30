import React, { Component } from "react";
import "./App.css";
import { observer, inject } from "mobx-react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./Components/User/UsersList";
import Map from "./Components/Map";
import Messages from "./Components/Messages/Messages";
import UserProfile from "./Components/User/UserProfile";
import Header from "./Components/Header";
import LoginFacebook from "./Components/Facebook";
const axios = require('axios')

@inject("usersStore")

@observer
class App extends Component {

  getUsersOnline() {
    return axios.get(`http://localhost:4200/transactions`)
  }

  async componentDidMount() {
    const usersOnline = await this.getUsersOnline()
    this.props.usersStore.updateUsersInRange(usersOnline.data)
  }

  render() {
    return (
      <Router>
        <div className="mainRoutes">
          <div className="header">
                <Header />
          </div>
          <div className="container">
          <Route exact path="/" render={() => <div> <LoginFacebook /> </div>} />
            <Route path="/MainPage" exact render={() => <div> <MainPage /> </div>} />
            <Route path="/Map" exact render={() => <div> <Map /> </div>} />
            <Route path="/Messages" exact render={() => <div> <Messages /> </div>} />
            <Route path="/Profile" exact render={() => <div> <UserProfile /> </div>} />
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
