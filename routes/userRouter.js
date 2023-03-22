const router = require('express').Router();

const authController = require('../controllers/authController');

router.route('/login').post(authController.login);
router.route('/register').post(authController.register);

module.exports = router;
