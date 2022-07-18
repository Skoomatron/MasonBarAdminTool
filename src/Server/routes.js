const router = require('express').Router();
const controller = require('./Controller/index.js');

console.log('In The Router')

router.post('/welcome', controller.welcomePost);

module.exports = router;