const router = require('express').Router();
const controller = require('./Controller/index.js');

console.log('In The Router')

router.post('/event', controller.addEvent);

module.exports = router;