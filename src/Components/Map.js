import React, { Component } from "react";

class Map extends Component {
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




  toDoIfGetCurrentPositionSuccess(position) {
    console.log(position);
    //add position to the user
  }


  toDoIfGetCurrentPositionFail() {
    //don't know what to do after... maybe try again?
  }
  render() {
    return <div className="map-comp">GOOGLE MAPS!!!</div>;
  }
}
export default Map;
