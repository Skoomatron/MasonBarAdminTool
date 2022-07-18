import React from 'react';
import Month from './Month.jsx';
import Day from './Day.jsx';
import Description from './Description.jsx';
import StartTime from './StartTime.jsx';
import EndTime from './EndTime.jsx';
import EventButtons from './EventButtons.jsx';
import EventTitle from './EventTitle.jsx';
import ReviewEventModal from './ReviewEventModal.jsx';

const EventLoader = (props) => {
  return (
    <div>
      <ReviewEventModal
        clickHandler={props.clickHandler}
        state={props.state}
        submitHandler={props.submitHandler}/>

      <EventTitle
        state={props.state}
        listener={props.listener}/>

      <Month
        state={props.state}
        clickHandler={props.clickHandler}/>
      <input defaultValue={props.state.month}></input>

      <Day
        state={props.state}
        clickHandler={props.clickHandler}/>
      <input defaultValue={props.state.day}></input>

      <StartTime
        state={props.state}
        clickHandler={props.clickHandler}/>
      <input defaultValue={props.state.start}></input>

      <EndTime
        state={props.state}
        clickHandler={props.clickHandler}/>
      <input defaultValue={props.state.end}></input>

      <Description
        state={props.state}
        listener={props.listener}/>

      <EventButtons
        state={props.state}
        clickHandler={props.clickHandler}
        name="eventModal"
        name2="Review Event"/>
    </div>
  )
}

export default EventLoader;