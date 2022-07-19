const model = require('../Model/index.js');

const addEvent = (req, res) => {
  model.postEvent(req.body)
  .then((success) => {
    res.status(201).send();
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

const addImage = (req, res) => {
  console.log('made it to addImage with data: ', req.body);
  model.postImage(req.body)
  .then((success) => {
    res.status(201).send();
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

const addWelcome = (req, res) => {
  console.log('made it to addWelcome with data: ', req.body);
  model.postWelcome(req.body)
  .then((success) => {
    res.status(201).send();
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

module.exports = {
  addEvent,
  addImage,
  addWelcome,
}