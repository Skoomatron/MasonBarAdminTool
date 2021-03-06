import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropDowns from './DropDowns.jsx';

const Month = (props) => {

  const months = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'];

  return (
    <DropDowns
      value={props.state.month}
      payload={months}
      name="month"
      name2="Month"
      clickHandler={props.clickHandler}/>
  )
}

export default Month;