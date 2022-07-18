import React from 'react';

const Description = (props) => {
  return (
    <form>
      <label>
        <h1 style={{color: 'black', backgroundColor: 'white', fontSize: '24px'}}>Event Description:</h1>
        <textarea
          placeholder="Event Description"
          type="text"
          name="eventDescription"
          value={props.state.eventDescription}
          style={{height: "100px", width: "300px"}}
          onChange={props.listener}
        >
        </textarea>
      </label>
    </form>
  )
}

export default Description;