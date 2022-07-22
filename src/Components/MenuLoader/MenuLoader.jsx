import React from 'react';
import CategoryDropDown from './CategoryDropDown.jsx';
import ItemName from './ItemName.jsx';
import ItemDescription from './ItemDescription.jsx';
import PriceDropDown from './PriceDropDown.jsx';
import ReviewMenuButton from './ReviewMenuButton.jsx';
import AllMenu from './AllMenu.jsx';
import MenuReviewModal from './MenuReviewModal.jsx';
import axios from 'axios';

class MenuLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: '',
      name: '',
      description: '',
      price: '',
      show: false,
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.textListener = this.textListener.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  clickHandler(event) {
    if (event.target.name === 'show') {
      this.setState({show: !this.state.show})
    } else if (event.target.name === 'price') {
      const price = '$' + event.target.innerHTML +'.00';
      console.log(price, event.target.value)
      this.setState({price: price});
    } else {
      const currentValue = event.target.innerHTML;
      this.setState({[event.target.name]: currentValue})
    }
    console.log(this.state);
  }

  textListener(event) {
    const currentText = event.target.value;
    this.setState({[event.target.name]: currentText})
  }

  submitHandler() {
    axios.post('/menu', {
      category: this.state.category,
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
    })
    .then((success) => {
      this.setState({show: !this.state.show});
    })
    .catch((error) => {
      alert('Error Posting New Message: ', error);
    })
    this.props.update();
}

  render() {
    return (
      <div>

        <div style={{float: "left"}}>
          <MenuReviewModal state={this.state} clickHandler={this.clickHandler} submitHandler={this.submitHandler}/>
          <CategoryDropDown state={this.state} clickHandler={this.clickHandler}/>
          <div >{this.state.category}</div>
          <br></br>

          <ItemName state={this.state} listener={this.textListener}/>
          <br></br>

          <ItemDescription state={this.state} listener={this.textListener}/>
          <br></br>

          <PriceDropDown state={this.state} clickHandler={this.clickHandler}/>
          <input defaultValue={this.state.price}></input>
          <br></br>

          <ReviewMenuButton name='review' name2='Review Menu Item' clickHandler={this.clickHandler}/>
        </div>
        <div style={{float: "left", width: 'fit-content'}}>
          <AllMenu menus={this.props.menus} delete={this.props.delete}/>
        </div>
      </div>
    )
  }
}

export default MenuLoader;