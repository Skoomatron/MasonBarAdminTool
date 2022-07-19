import React from 'react';
import WelcomeMessage from './WelcomeMessage.jsx';
import WelcomeModal from './WelcomeModal.jsx';
import AddImage from './AddImage.jsx';

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
  }

  textListener(event) {
    const currentText = event.target.value;
    this.setState({[event.target.name]: currentText});
  }

  clickHandler(event) {
    this.setState({modalMessage: event.target.name});
    this.setState({welcomeModal: !this.state.welcomeModal});
  }

  render() {
    return (
      <div>
        <WelcomeModal state={this.state} clickHandler={this.clickHandler}/>
        <WelcomeMessage state={this.state} listener={this.textListener} clickHandler={this.clickHandler}/>
        <br></br>
        <AddImage state={this.state} listener={this.textListener} clickHandler={this.clickHandler}/>
      </div>
    )
  }
}

export default WelcomeLoader;