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
import Radio from '@material-ui/core/Radio';
import { inject, observer } from "mobx-react"




const RadioButtons = inject("userData")(observer((props) => {
  const [selectedValue, setSelectedValue] = React.useState(props.userData.user.mode);

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
    props.userData.setMode(event.target.value);
    console.log(event.target.value)
  }




  return(
    <div className = "ModeSelector" >
      <div className="row">
        <img className="iconSettings dog" src={dog} alt="dog"></img>
        <img className="iconSettings sport" src={sport} alt="sport"></img>
        <img className="iconSettings message" src={message}  alt="message"></img>
        <img className="iconSettings sos" src={sos} alt="sos"></img>
        <Radio
          checked={selectedValue === 'dog'}
          onChange={handleChange}
          value="dog"
          color="primary"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'dog' }}
        />
        <Radio
          checked={selectedValue === 'sport'}
          onChange={handleChange}
          value="sport"
          color="primary"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'sport' }}
        />
        <Radio
          checked={selectedValue === 'message'}
          onChange={handleChange}
          value="message"
          color="primary"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'message' }}
        />
        <Radio
          checked={selectedValue === 'sos'}
          onChange={handleChange}
          value="sos"
          color="primary"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'sos' }}
        />
      </div>
      <div className="row">
        <img className="iconSettings cigarette" src={cigarette} alt="cigarette"></img>
        <img className="iconSettings beer" src={beer} alt="beer" ></img>
        <img className="iconSettings coffee" src={coffee} alt="coffee"></img>
        <img className="iconSettings movie" src={movie} alt="movie"></img>
        <Radio
          checked={selectedValue === 'cigarette'}
          onChange={handleChange}
          value="cigarette"
          color="primary"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'cigarette' }}
        />
        <Radio
          checked={selectedValue === 'beer'}
          onChange={handleChange}
          value="beer"
          color="primary"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'beer' }}
        />
        <Radio
          checked={selectedValue === 'coffee'}
          onChange={handleChange}
          value="coffee"
          color="primary"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'coffee' }}
        />
        <Radio
          checked={selectedValue === 'movie'}
          onChange={handleChange}
          value="movie"
          color="primary"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'movie' }}
        />
      </div>
    </div >
  )
}))


export default RadioButtons
