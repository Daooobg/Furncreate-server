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

exports.updateOne = async (id, data) => {
  data.slug = `${data.type.toLowerCase()}-${data.name.toLowerCase()}-${data.partNumber.toLowerCase()}`;
  const furniture = Furniture.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return furniture;
};

exports.deleteOne = async (id) => {
  console.log('gr')
  const furniture = Furniture.findByIdAndDelete(id);
  return furniture;
};
