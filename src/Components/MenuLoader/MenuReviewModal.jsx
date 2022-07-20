import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



const MenuReviewModal = (props) => {

  return (
    <Modal show={props.state.show} onHide={props.clickHandler}>
      <Modal.Header>
        <Modal.Title>Confirm Menu Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Item Category: {props.state.category}
        <br></br>
        Item Name: {props.state.name}
        <br></br>
        Item Description: {props.state.description}
        <br></br>
        Item Price: {props.state.price}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" name="show" onClick={props.clickHandler}>
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

export default MenuReviewModal;