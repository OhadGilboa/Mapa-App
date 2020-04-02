import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
  width: '50%',
  height: '50%',
};

class MapContainer extends Component {

  render() {
    return(
    <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 32.083543, lng: 34.793194}}
        />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB3UHM8Nv2LOrnh7k7zLfA1h4js0uEIHuY'
})(MapContainer);