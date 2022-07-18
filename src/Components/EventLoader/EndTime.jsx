import React from 'react';
import DropDowns from './DropDowns.jsx';
import PMToggle from './PMToggle.jsx';
const times = require('./Times.js');




const EndTime = (props) => {

  return (
    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
      <DropDowns
        payload={times.times}
        name="end"
        clickHandler={props.clickHandler}
        value={props.state.end}/>
      <PMToggle/>
    </div>
  )
}

export default EndTime;