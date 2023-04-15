const router = require('express').Router();
const purchaseController = require('../controllers/purchaseController');

router
  .route('/')
  .post(purchaseController.createPurchase)
  .get(purchaseController.getOwnPurchases);

router.route('/all').get(purchaseController.getAllPurchases);

module.exports = router;
