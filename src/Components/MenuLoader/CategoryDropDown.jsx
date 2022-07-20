import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const CategoryDropDown = (props) => {

  const categories = ['Shareables', 'SoupsSalads', 'Sandwiches', 'Taters'];

  return (
    <Dropdown style={{padding: '5px'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Menu Section
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((item, index) => {
          return <Dropdown.Item
          onClick={props.clickHandler}
          name='category'
          key={item + index}
          href="#/action-1">{item}</Dropdown.Item>
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default CategoryDropDown;