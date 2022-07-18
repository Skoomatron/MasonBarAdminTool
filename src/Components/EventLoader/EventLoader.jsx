import React from 'react';
import Month from './Month.jsx';
import Day from './Day.jsx';
import Description from './Description.jsx';

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
      <Description/>
    </div>
  )
}

export default EventLoader;