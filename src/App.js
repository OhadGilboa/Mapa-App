import React, { Component } from "react";

import "./App.css";
import { observer } from "mobx-react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Map from "./Components/Map";
import Messages from "./Components/Messages/Messages";
import UserProfile from "./Components/UserProfile";
var geolocation = require("geolocation");

@observer
class App extends Component {
  showPosition(position) {
    const data = position.coords.latitude + ", " + position.coords.longitude;
    console.log(data);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        null,
        this.options
      );
    } else {
      const data = "Geolocation is not supported by this browser.";
      console.log(data);
    }
  }

  options = {
    maximumAge: 10000,
    timeout: 5000,
    enableHighAccuracy: true
  };

  render() {
    return (
      <div className="App">
        {this.getLocation()}
        <Router>
          <div className="mainRoutes">
            <Route exact path="/" render={() => <div> signup </div>} />
            <Route path="/MainPage" exact render={() => <div> <MainPage/> </div>} />
            <Route path="/Map" exact render={() => <div> <Map/> </div>} />
            <Route path="/Messages" exact render={() => <div> <Messages/> </div>} />
            <Route path="/Profile" exact render={() => <div> <UserProfile/> </div>} />
          </div>
          <Navbar />
        </Router>
      </div>
    );
  }
}

export default App;
