import React from "react";
import Container from './Components/Container/Container.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

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
