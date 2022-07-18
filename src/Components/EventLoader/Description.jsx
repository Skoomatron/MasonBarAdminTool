import React from 'react';

const Description = () => {

  return (
    <form>
      <label>
        Event Description:
        <input
          placeholder="Event Description"
          type="text"
          style={{height: "100px", width: "300px"}}
        >
        </input>
      </label>
    </form>
  )
}

export default Description;