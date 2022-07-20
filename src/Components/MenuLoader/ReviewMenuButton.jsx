import Button from 'react-bootstrap/Button';
import React from 'react';

const ReviewMenuButton = (props) => {

  return (
    <Button onClick={props.clickHandler} name='show' variant="warning">{props.name2}</Button>
  )
}

export default ReviewMenuButton;