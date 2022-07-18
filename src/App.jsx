import React from "react";
import Container from './Components/Container/Container.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventTitle: '',
      eventDescription: '',
    }
    this.textListener = this.textListener.bind(this);
  }

  textListener(event) {
    console.log(event)
    const currentText = event.target.value;
    this.setState({[event.target.name]: currentText})
  }

  render() {
    return (
      <>
        <h1 style={{color: 'white'}}>
          Mason Bar Database Admin Tool
        </h1>
        <Container state={this.state} listener={this.textListener}/>
      </>
    );
  }
}

export default App;
