import Button from 'react-bootstrap/Button';
import React from 'react';

const EventButtons = (props) => {

  return (
    //warning only defines the styling, not an actual warning
    <Button variant="warning">{props.name}</Button>
  )
}

export default EventButtons;