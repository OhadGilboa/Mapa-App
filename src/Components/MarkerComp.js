import React, { Component, Fragment } from 'react';
import { InfoWindow, Marker } from "google-maps-react";


class MarkerComp extends Component {
    state = {
        showingInfoWindow: false, //Hides or the shows the infoWindow
        activeMarker: {}, //Shows the active marker upon click
        selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    }
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    render() {
        let { user } = this.props
        return (
            <Fragment>
                <Marker
                    key={user.latitude}
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
            </Fragment>
        );
    }
}
export default MarkerComp