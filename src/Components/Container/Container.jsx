import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
import MenuLoader from '../MenuLoader/MenuLoader.jsx';
import EventLoader from '../EventLoader/EventLoader.jsx';

const Container = (props) => {

  return (
    <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="event" title="Event Tool">
          <EventLoader
            state={props.state}
            listener={props.listener}
            clickHandler={props.clickHandler}
            submitHandler={props.submitHandler}/>
        </Tab>
        <Tab eventKey="menu" title="Menu Tool">
          <MenuLoader />
        </Tab>
        <Tab eventKey="welcome" title="Welcome Tool">
          {/* <Sonnet /> */}
        </Tab>
      </Tabs>
  )
}

export default Container;