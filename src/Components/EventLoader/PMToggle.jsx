import React from 'react';
import Form from 'react-bootstrap/Form';

const PMToggle = () => {

  return (
    <Form style={{position: "relative", top: "50%", bottom: "50%"}}>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Set To PM"
        />
    </Form>
  )
}

export default PMToggle;