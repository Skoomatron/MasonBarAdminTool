import Button from 'react-bootstrap/Button';
import React from 'react';

const EventButtons = (props) => {

  return (
    <Button variant="warning">{props.name}</Button>
  )
}

export default EventButtons;