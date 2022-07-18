const model = require('../Model/index.js');

const addEvent = (req, res) => {
  console.log('made it to router with data: ', req.body);
  model.postEvent(req.body)
  .then((success) => {
    res.status(201).send();
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

module.exports = {
  addEvent,
}