const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const masonEvents = new mongoose.Schema({
  day: String,
  month: String,
  start: String,
  end: String,
  eventTitle: String,
  eventDescription: String,
})

const masonWelcome = new mongoose.Schema({
  welcomeMessage: String,
})

const masonWelcomeImage = new mongoose.Schema({
  photoURL: String,
  photoCaption: String,
})

const masonMenu = new mongoose.Schema({
  category: String,
  name: String,
  description: String,
  price: String,
})


const Event = mongoose.model('Event', masonEvents);
const Welcome = mongoose.model('Welcome', masonWelcome);
const WelcomeImage = mongoose.model('WelcomeImage', masonWelcomeImage);
const Menu = mongoose.model('Menu', masonMenu);

module.exports = {
  Event,
  Welcome,
  WelcomeImage,
  Menu
}