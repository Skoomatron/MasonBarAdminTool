import React from 'react';
import WelcomeMessage from './WelcomeMessage.jsx';
import WelcomeModal from './WelcomeModal.jsx';
import AddImage from './AddImage.jsx';
import AllImage from './AllImage.jsx';
import axios from 'axios';

class WelcomeLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      welcomeMessage: '',
      photoURL: '',
      photoCaption: '',
      welcomeModal: false,
      modalMessage: '',
    }
    this.textListener = this.textListener.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  textListener(event) {
    const currentText = event.target.value;
    this.setState({[event.target.name]: currentText});
  }

  clickHandler(event) {
    this.setState({modalMessage: event.target.name});
    this.setState({welcomeModal: !this.state.welcomeModal});
  }

  onSubmit(event) {
    const clickTag = event.target.name;
    if (clickTag === 'Review Image Details') {
      axios.post('/images', {
        photoURL: this.state.photoURL,
        photoCaption: this.state.photoCaption,
      })
      .then((success) => {
        this.setState({welcomeModal: !this.state.welcomeModal});
      })
      .catch((error) => {
        alert('Error Posting New Images: ', error)
      })
    } else {
      axios.post('/welcome', {
        welcomeMessage: this.state.welcomeMessage
      })
      .then((success) => {
        this.setState({welcomeModal: !this.state.welcomeModal});
      })
      .catch((error) => {
        alert('Error Posting New Message: ', error)
      })
    }
    this.props.update();
  }


  render() {
    return (
      <div>
        <div style={{float: 'left'}}>
          <WelcomeModal state={this.state} clickHandler={this.clickHandler} onSubmit={this.onSubmit}/>
          <WelcomeMessage state={this.state} listener={this.textListener} message={this.props.message} clickHandler={this.clickHandler}/>
          <br></br>
          <AddImage state={this.state} listener={this.textListener} clickHandler={this.clickHandler}/>
        </div>
        <div style={{float: 'left'}}>
          <AllImage pictures={this.props.pictures} delete={this.props.delete}/>
        </div>
      </div>
    )
  }
}

export default WelcomeLoader;