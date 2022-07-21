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

const addMenu = (req, res) => {
  model.postMenu(req.body)
  .then((success) => {
    res.status(201).send();
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

const getMenu = (req, res) => {
  model.findMenu()
  .then((success) => {
    res.status(201).send(success);
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

const getImage = (req, res) => {
  model.findImage()
  .then((success) => {
    res.status(201).send(success);
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

const getWelcome = (req, res) => {
  model.findWelcome()
  .then((success) => {
    res.status(201).send(success);
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

const getEvent = (req, res) => {
  model.findEvent()
  .then((success) => {
    res.status(201).send(success);
  })
  .catch((error) => {
    res.status(409).send(error);
  })
}

const deleteData = (req, res) => {
  if (req.body.key === 'Event') {
    model.removeEventData(req.body)
    .then((success) => {
      res.status(201).send(success);
    })
    .catch((error) => {
      res.status(409).send(error);
    })
  } else if (req.body.key === 'Image') {
    model.removeImageData(req.body)
    .then((success) => {
      res.status(201).send(success);
    })
    .catch((error) => {
      res.status(409).send(error);
    })
  } else if (req.body.key === 'Menu') {
    model.removeMenuData(req.body)
    .then((success) => {
      res.status(201).send(success);
    })
    .catch((error) => {
      res.status(409).send(error);
    })
  }
}






module.exports = {
  addEvent,
  addImage,
  addWelcome,
  addMenu,
  getEvent,
  getMenu,
  getWelcome,
  getImage,
  deleteData
}