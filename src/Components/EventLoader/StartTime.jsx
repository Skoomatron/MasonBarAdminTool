import React from 'react';
import DropDowns from './DropDowns.jsx';
import PMToggle from './PMToggle.jsx';
const times = require('./Times.js');

const StartTime = () => {

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <DropDowns payload={times.times} name="Start Time"/>
      <PMToggle/>
    </div>
  )
}

export default StartTime;