import React from 'react';

const MenuItem = (props) => {

  return (
    <div>
      <h2>Item Name</h2>
      <input
      value={props.state.name}
      placeholer='Name Of the Item'
      onChange={props.listener}
      name='name'
      >
      </input>
    </div>
  )
}

export default MenuItem;