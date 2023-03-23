const Furniture = require('../models/furnitureModel');

exports.getAll = async () => Furniture.find();

exports.create = async (data, user) => {
  data.ownerId = user._id;

  return await Furniture.create(data);
};

exports.getOne = async (slug) => {
  let furniture = Furniture.find({ slug: slug });

  return await furniture;
};
