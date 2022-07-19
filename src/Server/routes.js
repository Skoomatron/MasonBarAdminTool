const router = require('express').Router();
const controller = require('./Controller/index.js');

console.log('In The Router')

router.post('/event', controller.addEvent);
router.post('/images', controller.addImage);
router.post('/welcome', controller.addWelcome);

module.exports = router;