const router = require('express').Router();
const furnitureController = require('../controllers/furnitureController');

router
  .route('/')
  .get(furnitureController.getAll)
  .post(furnitureController.postCreate);
router
  .route('/:slug')
  .get(furnitureController.getOne)
  .patch(furnitureController.updateOne)
  .delete(furnitureController.deleteOne);

router.route('/:slug/comments').post(furnitureController.createComment);
module.exports = router;
