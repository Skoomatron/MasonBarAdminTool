import React from 'react';
import DropDowns from './DropDowns.jsx';

const EndTime = () => {

  const endTimes = ['11:00am', '11:15am'];

  return (
    <DropDowns payload={endTimes} name="End Time"/>
  )
}

export default EndTime;