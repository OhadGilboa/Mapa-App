import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Map } from "google-maps-react";
import "../styles/MapContainer.css";
import { observer, inject } from "mobx-react";
import MarkerComp from "./MarkerComp";
const mapStyles = {
  width: "100%",
  height: "83%"
};

@inject("userData")
@observer
class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    stores: []
  }


  async componentDidMount() {
    await this.setState({ stores: this.props.userData.users })
    console.log(this.state.stores)
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
        onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
      <div className="Map-class">
        <Map
          google={this.props.google}
          zoom={9}
          style={mapStyles}
          initialCenter={{ lat: 32.083, lng: 34.793 }}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyB3UHM8Nv2LOrnh7k7zLfA1h4js0uEIHuY"
})(MapContainer);
