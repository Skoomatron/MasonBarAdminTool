import React from "react";
import Container from './Components/Container/Container.jsx';
import axios from 'axios';

class App extends React.Component {
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
    console.log(this.state)
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
        console.log('success!!')
      })
      .catch((error) => {
        console.log('error occurred ' + error)
      })
    }
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
      <>
        <h1 style={{color: 'white'}}>
          Mason Bar Database Admin Tool
        </h1>
        <Container
          state={this.state}
          listener={this.textListener}
          clickHandler={this.clickHandler}
          submitHandler={this.submitHandler}/>
      </>
    );
  }
}

export default App;
