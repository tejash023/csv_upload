const express  = require ('express');
const { home } = require('nodemon/lib/utils');
const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log('Router Loaded');

router.get('/', homeController.homePage);
router.use('/file/uploads', homeController.uploadFile);
router.use('/view/:id', homeController.displayCSV);
router.use('/delete/:id', homeController.deleteCSV);

module.exports = router;