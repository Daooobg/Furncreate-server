const router = require('express').Router();
const furnitureController = require('../controllers/furnitureController');

router
  .route('/')
  .get(furnitureController.getAll)
  .post(furnitureController.postCreate);
router.route('/:slug').get(furnitureController.getOne);

module.exports = router;
