import React from 'react';

const ItemDescription = (props) => {

  return (
    <div>
      <h2>Item Description</h2>
      <textarea
      value={props.state.description}
      placeholer='Name Of the Item'
      onChange={props.listener}
      name='description'
      style={{height: "100px", width: "300px"}}

      >
      </textarea>
    </div>
  )
}

export default ItemDescription;