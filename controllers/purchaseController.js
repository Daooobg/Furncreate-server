const purchaseService = require('../services/purchaseService');
const furnitureService = require('../services/furnitureService');
const userService = require('../services/authService');

const catchAsync = require('../utils/catchAsync');

exports.createPurchase = catchAsync(async (req, res, next) => {
  const user = await userService.getUserById(req.user._id);
  furnitureService.decreaseStock(req.body.id, req.body.quantity);
  const data = await purchaseService.create(req.body, user);
  res.status(204).json(data);
});

exports.getOwnPurchases = catchAsync(async (req, res, next) => {
  const result = await purchaseService.getOwnPurchases(req.user);
  res.status(200).json(result);
});

exports.getAllPurchases = catchAsync(async (req, res, next) => {
  const result = await purchaseService.getAllPurchases();
  res.status(200).json(result);
});
