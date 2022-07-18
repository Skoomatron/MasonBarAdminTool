import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


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
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">January</Dropdown.Item>
          <Dropdown.Item href="#/action-2">February</Dropdown.Item>
          <Dropdown.Item href="#/action-3">March</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default EventLoader;