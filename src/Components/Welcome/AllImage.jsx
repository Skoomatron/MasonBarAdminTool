import React from 'react';

const AllImage = (props) => {
  return (
    <div style={{margin: '10px'}}>
      <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>- All Images -</h2>
      <div style={{height: '40vw', overflow: 'auto'}}>
        {props.pictures.map((picture, index) => {
          return (
            <div key={picture.photoURL + index} style={{border: 'solid 2px black'}}>
              <img style={{height: '100px', width: '100px'}} src={picture.photoURL}></img>
              <div>{picture.photoCaption}</div>
              <button>Delete</button>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default AllImage;