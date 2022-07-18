import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropDowns = (props) => {
  return (
    <Dropdown style={{padding: '5px'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {props.name2}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.payload.map((item, index) => {
          return <Dropdown.Item
          onClick={props.clickHandler}
          name={props.name}
          key={item + index}
          href="#/action-1">{item}</Dropdown.Item>
        })}

      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDowns;