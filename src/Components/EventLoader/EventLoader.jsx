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
      <input value={props.state.month}></input>
      <Day state={props.state} clickHandler={props.clickHandler}/>
      <input value={props.state.day}></input>
      <StartTime state={props.state} clickHandler={props.clickHandler}/>
      <input value={props.state.start}></input>
      <EndTime state={props.state} clickHandler={props.clickHandler}/>
      <input value={props.state.end}></input>
      <Description state={props.state} listener={props.listener}/>
      <EventButtons name="Review Event"/>
    </div>
  )
}

export default EventLoader;