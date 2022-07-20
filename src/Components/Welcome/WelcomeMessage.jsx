import React from 'react';
import Button from 'react-bootstrap/Button';

const WelcomeMessage = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: "column", width: "400px"}}>

      <form className="welcomeForm">
        <label>
          <textarea
            value={props.state.welcomeMessage}
            type="text"
            placeholder={"Input or Update Welcome Message"}
            name="welcomeMessage"
            onChange={props.listener}
            className="welcomeText"
            ></textarea>
        </label>
      </form>

      <br></br>

      <button
        style={{padding: "10px"}}
        type="button"
        name="Review Message Details"
        className="btn btn-warning"
        onClick={props.clickHandler}>Review Message</button>
    </div>
  )
}

export default WelcomeMessage;