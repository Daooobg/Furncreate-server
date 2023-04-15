const Purchase = require('../models/purchaseModule');

exports.create = async (data, user) => {
  data.ownerId = user._id;
  data.date = Date.now();
  data.shippingAddress = user.shippingAddress;
  const purchase = await Purchase.create(data);
  return purchase;
};

exports.getOwnPurchases = async (user) => {
  const id = user._id;
  const purchases = await Purchase.find({ ownerId: id });
  return purchases;
};

exports.getAllPurchases = async () => {
  const purchases = await Purchase.find().populate('ownerId');
  return purchases;
};
