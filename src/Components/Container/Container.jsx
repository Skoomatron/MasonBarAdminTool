import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
import MenuLoader from '../MenuLoader/MenuLoader.jsx';
import EventLoader from '../EventLoader/EventLoader.jsx';
import WelcomeLoader from '../Welcome/WelcomeLoader.jsx';

const Container = (props) => {
  return (
    <Tabs
        defaultActiveKey="welcome"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="welcome" title="Welcome Tool">
          <WelcomeLoader message={props.state.message[0]} pictures={props.state.pictures}/>
        </Tab>
        <Tab eventKey="event" title="Event Tool">
          <EventLoader events={props.state.events}/>
        </Tab>
        <Tab eventKey="menu" title="Menu Tool">
          <MenuLoader menus={props.state.menu}/>
        </Tab>
      </Tabs>
  )
}

export default Container;