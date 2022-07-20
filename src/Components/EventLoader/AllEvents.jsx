import React from 'react';

const AllEvents = (props) => {

  return (
    <div style={{margin: "10px"}}>
      <h2 style={{display: "flex", alignItems: "center", justifyContent: "center"}}>- All Events -</h2>
      {
        props.events.map((event, index) => {
          return (

            <div key={event + index} style={{border: "solid 2px black"}}>
              {event.month} {event.day}
              <div>{event.eventTitle}</div>
              <button style={{margin: "10px"}} onClick={() => {
                props.delete(event, "Event")
              }}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default AllEvents;