import React from 'react';

const EventTitle = (props) => {

  return (
    <input
        placeholder="Event Title"
        value={props.state.eventTitle}
        name="eventTitle"
        onChange={props.listener}
      >
      </input>
  )
}

export default EventTitle;