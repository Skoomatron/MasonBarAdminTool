import React from 'react';
import Month from './Month.jsx';
import Day from './Day.jsx';
import Description from './Description.jsx';
import StartTime from './StartTime.jsx';
import EndTime from './EndTime.jsx';
import EventButtons from './EventButtons.jsx';
import EventTitle from './EventTitle.jsx';
import ReviewEventModal from './ReviewEventModal.jsx';
import axios from 'axios';
import AllEvents from './AllEvents.jsx';


class EventLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventTitle: '',
      eventDescription: '',
      month: '',
      day: '',
      start: '',
      end: '',
      startPM: false,
      endPM: false,
      eventModal: false,
    }
    this.textListener = this.textListener.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.timeParser = this.timeParser.bind(this);
  }

  timeParser(payload, option) {
    console.log(payload)
    const endNum = payload.slice(2);
    const startNum = payload.slice(0, 2);
    const newNum = (Number(startNum) + 12).toString() + endNum;
    this.setState({[option]: newNum});
  }

  textListener(event) {
    const currentText = event.target.value;
    this.setState({[event.target.name]: currentText})
  }

  async submitHandler(payload) {
    if (payload.day.length === 1) {
      this.setState({day: 0 + this.state.day});
    }
    if (payload.startPM === true) {
      await this.timeParser(payload.start, 'start');
    }
    if (payload.endPM === true) {
      await this.timeParser(payload.end, 'end');
    }
    if (
      payload.day &&
      payload.end &&
      payload.eventDescription &&
      payload.eventTitle &&
      payload.month &&
      payload.start &&
      payload.start < payload.end
    ) {
      await axios.post('/event', {
        day: this.state.day,
        month: this.state.month,
        start: this.state.start,
        end: this.state.end,
        eventTitle: this.state.eventTitle,
        eventDescription: this.state.eventDescription,
      })
      .then((success) => {
        this.setState({eventModal: false})
      })
      .catch((error) => {
        alert('error occurred ' + error);
      })
    }
    this.props.update();
  }

  clickHandler(event) {
    if (
      event.target.name === "endPM"
      || event.target.name === "startPM"
      || event.target.name === "eventModal") {
      const currentName = event.target.name;
      const currentValue = this.state[currentName];
      this.setState({[currentName]: !currentValue})
    } else {
      const currentValue = event.target.innerHTML;
      this.setState({[event.target.name]: currentValue})
    }
  }

  render() {
    return (
      <div>
        <div style={{float: "left"}}>
          <ReviewEventModal
            clickHandler={this.clickHandler}
            state={this.state}
            submitHandler={this.submitHandler}/>

          <EventTitle
            state={this.state}
            listener={this.textListener}/>

          <Month
            state={this.state}
            clickHandler={this.clickHandler}/>
          <div>{this.state.month}</div>

          <Day
            state={this.state}
            clickHandler={this.clickHandler}/>
          <div>{this.state.day}</div>

          <StartTime
            state={this.state}
            clickHandler={this.clickHandler}/>
          <div>{this.state.start}</div>

          <EndTime
            state={this.state}
            clickHandler={this.clickHandler}/>
          <div>{this.state.end}</div>

          <Description
            state={this.state}
            listener={this.textListener}/>

          <EventButtons
            state={this.state}
            clickHandler={this.clickHandler}
            name="eventModal"
            name2="Review Event"/>
        </div>
        <div style={{float: "left"}}>
          <AllEvents events={this.props.events} delete={this.props.delete}/>
        </div>
      </div>
    )
  }
}

export default EventLoader;