import React from 'react';
import Month from './Month.jsx';
import Day from './Day.jsx';
import Description from './Description.jsx';
import StartTime from './StartTime.jsx';
import EndTime from './EndTime.jsx';
import EventButtons from './EventButtons.jsx';
import EventTitle from './EventTitle.jsx';

const EventLoader = (props) => {
  return (
    <div>
      <EventTitle state={props.state} listener={props.listener}/>
      <Month state={props.state} clickHandler={props.clickHandler}/>
      <Day state={props.state} clickHandler={props.clickHandler}/>
      <StartTime/>
      <EndTime/>
      <Description state={props.state} listener={props.listener}/>
      <EventButtons name="Review Event"/>
    </div>
  )
}

export default EventLoader;