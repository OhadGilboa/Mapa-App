import React, { Component } from 'react';
import Slider from "./Sliders/Slider"
import ModeChanger from "./Sliders/ModeChanger"
import "../styles/Settings.css";
import movie from "./User/icons/movie.svg"
import cigarette from "./User/icons/cigarette.svg"
import beer from "./User/icons/beer.svg"
import coffee from "./User/icons/coffee.svg"
import dog from "./User/icons/dog.svg"
import sport from "./User/icons/sport.svg"
import message from "./User/icons/message.svg"
import sos from "./User/icons/sos.svg"


class Settings extends Component {
    render() {
        return (
            <div>
                <div className="rangeTitle">Range:</div>
                <Slider />
                <ModeChanger />
            </div>
        );
    }
}
export default Settings