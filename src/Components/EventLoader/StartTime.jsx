import React from 'react';
import DropDowns from './DropDowns.jsx';
import PMToggle from './PMToggle.jsx';
const times = require('./Times.js');

const StartTime = (props) => {

  return (
    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
      <DropDowns
      payload={times.times}
      name="start"
      clickHandler={props.clickHandler}
      value={props.state.start}/>
      <PMToggle />
    </div>
  )
}

export default StartTime;

