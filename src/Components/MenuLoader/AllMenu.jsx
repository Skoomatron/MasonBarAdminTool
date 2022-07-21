import React from 'react';

const AllMenu = (props) => {

  return (
    <div style={{margin: "10px"}}>
      <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>- All Menu Items -</h2>
        {props.menus.map((item, index) => {
          return (
            <div key={item + index} style={{border: "solid 2px black"}}>
            Item Category: {item.category}
            <br></br>
            Item Name: {item.name}
            <br></br>
            Item Description: {item.description}
            <br></br>
            Item Price: {item.price}
            <br></br>
            <button style={{margin: "10px"}} onClick={() => {
              props.delete(item, 'Menu')
            }}>Delete</button>
            </div>
          )
        })}
    </div>
  )
}

export default AllMenu;