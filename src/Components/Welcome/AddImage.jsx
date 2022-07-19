import React from 'react';
import Button from 'react-bootstrap/Button';


const AddImage = (props) => {

  return (
    <div style={{display: 'flex', flexDirection: "column", width: "400px"}}>

      <input
        className="welcomeInput"
        type="text"
        value={props.state.photoURL}
        placeholder="Copy Image URL Here"
        name="photoURL"
        onChange={props.listener}>
        </input>

      <br></br>

      <textarea
        className="welcomeText"
        type="text"
        value={props.state.photoCaption}
        placeholder="Add A Caption To The Photo (Optional)"
        name="photoCaption"
        onChange={props.listener}>
      </textarea>

      <br></br>

      <button
        type="button"
        name="Review Image Details"
        class="btn btn-warning"
        onClick={props.clickHandler}>Review</button>

    </div>
  )
}

export default AddImage;