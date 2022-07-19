import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const WelcomeModal = (props) => {

  const message = props.state.modalMessage;

  const imageBody = `
    \nImage URL: ${props.state.photoURL}
    \nImage Caption: ${props.state.photoCaption}`;

  const messageBody = `
    \nWelcome Message:
    \n${props.state.welcomeMessage}`;

  const evaluation = "Review Image Details";

  const bodyMessage = message === evaluation ? imageBody : messageBody;


  return (
    <Modal show={props.state.welcomeModal} onHide={props.clickHandler}>
      <Modal.Header>
        <Modal.Title>{props.state.modalMessage}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {bodyMessage}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" name="welcomeModal" onClick={props.clickHandler}>
          Close
        </Button>
        <Button
          name={props.state.modalMessage}
          variant="primary"
          onClick={() => {
            props.onSubmit(event)}}>
            Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default WelcomeModal;