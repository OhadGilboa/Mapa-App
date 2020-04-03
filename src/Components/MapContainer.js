import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Map } from "google-maps-react";
import "../styles/MapContainer.css";
import { observer, inject } from "mobx-react";
const mapStyles = {
  width: "100%",
  height: "100%"
};
@inject("usersStore")
@observer
class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    stores: [
      {
        first_name: "mozi",
        latitude: 47.49855629475769,
        longitude: -122.14184416996333
      },
      { first_name: "mozi", latitude: 47.359423, longitude: -122.021071 },
      {
        first_name: "mozi",
        latitude: 47.2052192687988,
        longitude: -121.988426208496
      },
      { first_name: "mozi", latitude: 47.6307081, longitude: -122.1434325 },
      { first_name: "mozi", latitude: 47.3084488, longitude: -122.2140121 },
      { first_name: "mozi", latitude: 47.5524695, longitude: -122.0425407 }
    ]
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  userMarker = () => {
    let users = this.props.usersStore.users;
    // let users = this.state.stores;
    users.map((user, index) => {
      return (
        <>
          <Marker
            key={index}
            name={user.first_name}
            position={{
              lat: user.latitude,
              lng: user.longitude
            }}
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            key={user.id}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </>
      );
    });
  };

  render() {
    return (
      <div className="Map-class">
        <Map
          google={this.props.google}
          zoom={9}
          style={mapStyles}
          initialCenter={{ lat: 32.083, lng: 34.793 }}
        >
        {this.userMarker()}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyB3UHM8Nv2LOrnh7k7zLfA1h4js0uEIHuY"
})(MapContainer);
