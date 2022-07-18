const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const masonData = new mongoose.Schema({
  test: String,
})


const Information = mongoose.model('Information', masonData);

module.exports = {Information}