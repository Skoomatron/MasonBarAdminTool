import React from 'react';
import Month from './Month.jsx';
import Day from './Day.jsx';
import Description from './Description.jsx';
import StartTime from './StartTime.jsx';
import EndTime from './EndTime.jsx';
import EventButtons from './EventButtons.jsx';

const EventLoader = (props) => {

  return (
    <div>
      <input
        placeholder="Event Title"
        value={props.state.eventTitle}
        name="eventTitle"
        onChange={props.listener}
      >
      </input>
      <Month/>
      <Day/>
      <StartTime/>
      <EndTime/>
      <Description/>
      <EventButtons name="Review Event"/>
    </div>
  )
}

export default EventLoader;