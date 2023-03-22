const router = require('express').Router();

const authController = require('../controllers/authController');

router.route('/register').post(authController.register);

module.exports = router;
