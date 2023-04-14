const purchaseService = require('../services/purchaseService');
const furnitureService = require('../services/furnitureService');
const userService = require('../services/authService');

const catchAsync = require('../utils/catchAsync');

exports.createPurchase = catchAsync(async (req, res, next) => {

  const user = await userService.getUserById(req.user._id);
  furnitureService.decreaseStock(req.body.id, req.body.quantity)
  const data = await purchaseService.create(req.body, user);
  res.status(204).json(data);
});
