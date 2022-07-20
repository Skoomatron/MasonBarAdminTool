import React from "react";
import Container from './Components/Container/Container.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      menu: [],
      message: [],
      pictures: [],
    }
    this.getAllData = this.getAllData.bind(this);
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData() {
    const promises = [
      axios.get('/menu'),
      axios.get('/event'),
      axios.get('/images'),
      axios.get('/welcome')
    ];

    Promise.all(promises)
    .then((success) => {
      this.setState({menu: success[0].data,
                  events: success[1].data,
                  pictures: success[2].data,
                  message: success[3].data})
    })
    .catch((error) => {
      console.log(error)
    })
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
