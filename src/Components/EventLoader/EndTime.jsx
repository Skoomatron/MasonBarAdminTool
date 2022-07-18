import React from 'react';
import DropDowns from './DropDowns.jsx';
import PMToggle from './PMToggle.jsx';
const times = require('./Times.js');




const EndTime = () => {

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <DropDowns payload={times.times} name="End Time"/>
      <PMToggle/>
    </div>
  )
}

export default EndTime;