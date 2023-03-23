const router = require('express').Router();
const furnitureController = require('../controllers/furnitureController');

router.route('/').get(furnitureController.getAll);

module.exports = router;
