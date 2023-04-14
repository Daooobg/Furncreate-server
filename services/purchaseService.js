const Purchase = require('../models/purchaseModule');

exports.create = async (data, user) => {
  data.ownerId = user._id;
  data.date = Date.now();
  data.shippingAddress = user.shippingAddress;
  const purchase = await Purchase.create(data);
  return purchase;
};
