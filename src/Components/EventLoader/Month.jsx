import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Month = () => {

  const months = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'];

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Month
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {months.map((month, index) => {
          return <Dropdown.Item key={month + index} href="#/action-1">{month}</Dropdown.Item>
        })}

      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Month;