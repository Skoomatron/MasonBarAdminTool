import React from 'react';

const Description = (props) => {
  console.log(props)
  return (
    <form>
      <label>
        Event Description:
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