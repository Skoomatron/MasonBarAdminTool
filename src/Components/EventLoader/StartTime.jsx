import React from 'react';
import DropDowns from './DropDowns.jsx';

const StartTime = () => {

  const startTimes = ['11:00am', '11:15am'];

  return (
    <DropDowns payload={startTimes} name="Start Time"/>
  )
}

export default StartTime;