import React from "react";
import Container from './Components/Container/Container.jsx';

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
  }

  textListener(event) {
    console.log(event)
    const currentText = event.target.value;
    this.setState({[event.target.name]: currentText})
  }

  clickHandler(event) {
    console.log(event)
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
        <Container state={this.state} listener={this.textListener} clickHandler={this.clickHandler}/>
      </>
    );
  }
}

export default App;
