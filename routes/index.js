const express  = require ('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log('Router Loaded');

router.get('/', homeController.homePage);
router.use('/file/uploads', homeController.uploadFile);

module.exports = router;