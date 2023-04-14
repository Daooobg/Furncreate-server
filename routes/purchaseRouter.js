const router = require('express').Router();
const purchaseController = require('../controllers/purchaseController');

router.route('/').post(purchaseController.createPurchase);

module.exports = router;
