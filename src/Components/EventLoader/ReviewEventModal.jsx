import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



const ReviewEventModal = (props) => {

  return (
    <Modal show={props.state.eventModal} onHide={props.clickHandler}>
      <Modal.Header>
        <Modal.Title>Confirm Event Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Event Title: {props.state.eventTitle} <br></br>
        Event Date: {props.state.month} {props.state.day} 2022 <br></br>
        Event Start Time: {props.state.start} <br></br>
        Event End Time: {props.state.end} <br></br>
        Event Descriptions: <br></br>
        {props.state.eventDescription}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" name="eventModal" onClick={props.clickHandler}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {
          props.submitHandler(props.state)}}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ReviewEventModal;