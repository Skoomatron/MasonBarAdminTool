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
    this.deleteData = this.deleteData.bind(this);
    this.updateData = this.updateData.bind(this);
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

  deleteData(data, key) {
    axios.post('/delete', {_id: data._id, key: key})
    .then((success) => {
      alert('Information Has Been Deleted')
    })
    .catch((error) => {
      alert('Failed to delete information, the following error occured: ', error)
    })
    this.getAllData();
  }

  updateData(data) {
    console.log(data)
    // axios.post()
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
          delete={this.deleteData}
          clickHandler={this.clickHandler}
          submitHandler={this.submitHandler}
          update={this.getAllData}/>
      </>
    );
  }
}

export default App;
