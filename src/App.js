import React, { Component } from "react";

import "./App.css";
import { observer } from "mobx-react";
var geolocation = require('geolocation')


@observer
class App extends Component {

  showPosition(position) {
    const data = position.coords.latitude + ", " + position.coords.longitude;
    console.log(data)
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, null,this.options);
    } else {
      const data = "Geolocation is not supported by this browser.";
      console.log(data)
    }
  }

  options = {
    maximumAge: 10000,
    timeout: 5000,
    enableHighAccuracy: true
  }

  render() {
    return (
      <div className="App">
        {this.getLocation()}
      </div>
    );
  }
}

export default App;
