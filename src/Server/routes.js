const router = require('express').Router();
const controller = require('./Controller/index.js');

console.log('In The Router')

router.post('/event', controller.addEvent);
router.post('/images', controller.addImage);
router.post('/welcome', controller.addWelcome);
router.post('/menu', controller.addMenu);

router.get('/event', controller.getEvent);
router.get('/images', controller.getImage);
router.get('/welcome', controller.getWelcome);
router.get('/menu', controller.getMenu);

router.post('/delete', controller.deleteData);

module.exports = router;