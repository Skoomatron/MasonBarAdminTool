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
      name2="Start Time"
      clickHandler={props.clickHandler}
      value={props.state.start}/>
      <PMToggle clickHandler={props.clickHandler} name="startPM"/>
    </div>
  )
}

export default StartTime;

