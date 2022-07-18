import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropDowns from './DropDowns.jsx';

const Month = () => {

  const months = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'];

  return (
    <DropDowns payload={months} name="Month"/>
  )
}

export default Month;