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


const Event = mongoose.model('Event', masonEvents);

module.exports = {Event}