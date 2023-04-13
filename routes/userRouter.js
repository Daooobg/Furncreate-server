const router = require('express').Router();

const authController = require('../controllers/authController');

router.route('/login').post(authController.login);
router.route('/register').post(authController.register);
router.route('/getUser').get(authController.getUser);
router.route('/getAllUsers').get(authController.getAllUsers);

module.exports = router;
