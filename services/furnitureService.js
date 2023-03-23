const Furniture = require('../models/furnitureModel');

exports.getAll = async () => Furniture.find();

exports.create = async (data, user) => {
  console.log(user)
  data.ownerId = user._id;

  return await Furniture.create(data);
};
