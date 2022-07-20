import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const PriceDropDown = (props) => {

  const prices = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14,
    15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25
  ];

  return (
    <Dropdown style={{padding: '5px'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Price
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {prices.map((item, index) => {
          return <Dropdown.Item
          onClick={props.clickHandler}
          name='price'
          key={item + index}
          href="#/action-1">{item}</Dropdown.Item>
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default PriceDropDown;