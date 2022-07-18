import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropDowns from './DropDowns.jsx';

const Day = (props) => {

  const days = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31
    ]

  return (
    <DropDowns
    value={props.state.day}
    payload={days}
    name="day"
    name2="Day"
    clickHandler={props.clickHandler} />
  )
}

export default Day;