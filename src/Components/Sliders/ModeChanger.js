import movie from "../User/icons/movie.svg"
import cigarette from "../User/icons/cigarette.svg"
import beer from "../User/icons/beer.svg"
import coffee from "../User/icons/coffee.svg"
import dog from "../User/icons/dog.svg"
import sport from "../User/icons/sport.svg"
import message from "../User/icons/message.svg"
import sos from "../User/icons/sos.svg"
import "../../styles/Settings.css";
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';



export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="ModeSelector">
      <div className="row">
        <img className="icon dog" src={dog}></img>
        <img className="icon dog" src={sport}></img>
        <img className="icon dog" src={message}></img>
        <img className="icon dog" src={sos}></img>
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'A' }}
        />
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'B' }}
        />
        <Radio
          checked={selectedValue === 'c'}
          onChange={handleChange}
          value="c"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'C' }}
        />
        <Radio
          checked={selectedValue === 'd'}
          onChange={handleChange}
          value="d"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'D' }}
        />
      </div>
      <div className="row">
        <img className="icon dog" src={cigarette}></img>
        <img className="icon dog" src={beer}></img>
        <img className="icon dog" src={coffee}></img>
        <img className="icon dog" src={movie}></img>
        <Radio
          checked={selectedValue === 'e'}
          onChange={handleChange}
          value="e"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'E' }}
        />
        <Radio
          checked={selectedValue === 'f'}
          onChange={handleChange}
          value="f"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'F' }}
        />
        <Radio
          checked={selectedValue === 'g'}
          onChange={handleChange}
          value="g"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'G' }}
        />
        <Radio
          checked={selectedValue === 'h'}
          onChange={handleChange}
          value="h"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'H' }}
        />
      </div>
    </div>
  );
}
