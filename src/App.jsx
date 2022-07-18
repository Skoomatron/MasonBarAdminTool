import React from "react";
import EventLoader from './Components/EventLoader/EventLoader.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventTitle: '',
    }
    this.textListener = this.textListener.bind(this);
  }

  textListener(event) {
    const currentText = event.target.value;
    this.setState({[event.target.name]: currentText})
  }

  render() {
    return (
      <>
        <h1>
          Mason Bar Database Admin Tool
        </h1>
        <EventLoader state={this.state} listener={this.textListener}/>
      </>
    );
  }
}

export default App;
