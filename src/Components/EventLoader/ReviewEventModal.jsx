import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



const ReviewEventModal = (props) => {

  return (
    <>
    <Button variant="primary" onClick={props.clickHandler}>
      Launch demo modal
    </Button>

    <Modal show={props.state.eventModal} onHide={props.clickHandler}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.clickHandler}>
          Close
        </Button>
        <Button variant="primary" onClick={props.clickHandler}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ReviewEventModal;