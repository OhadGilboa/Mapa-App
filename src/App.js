import React, { Component } from "react";
import "./App.css";
import { observer } from "mobx-react";

import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Map from "./Components/Map";
import Messages from "./Components/Messages/Messages";
import UserProfile from "./Components/UserProfile";
import Header from "./Components/Header";
import Main from "./Components/Main";



@observer
class App extends Component {
  optionsForGeolocation = {
    maximumAge: 10000,
    timeout: 5000,
    enableHighAccuracy: true
  }

  calcDistanceBetweenTwoPeopleInKM = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const radLat1 = this.toRad(lat1);
    const tadLat2 = this.toRad(lat2);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(radLat1) * Math.cos(tadLat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  }

  changeDegreesToRadians(value) {
    return value * Math.PI / 180;
  }


  showPosition(position) {
    const data = position.coords.latitude + ", " + position.coords.longitude;
    console.log(data);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.toDoIfGetCurrentPositionSuccess, this.toDoIfGetCurrentPositionFail, this.options);
    }
  }


  toDoIfGetCurrentPositionSuccess(position) {
    console.log(position);
    //add position to the user
  }


  toDoIfGetCurrentPositionFail() {
    //don't know what to do after... maybe try again?
  }



  render() {
    this.getLocation()
    return (
        <Router>
          <div className="mainRoutes">

            <div className="header">Hackthon
                <Header />
            </div>

            <div className="container">
              <Route exact path="/" render={() => <div> signup </div>} />
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
