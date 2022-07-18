import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const Day = () => {

  const days = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31
    ]

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Day
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          days.map((day, index) => {
            return <Dropdown.Item key={day + index} href="#/action-1">{day}</Dropdown.Item>
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Day;