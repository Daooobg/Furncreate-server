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

exports.getOneById = async (id) => {
  let furniture = await Furniture.findById({ _id: id });
  return furniture;
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
  console.log('gr');
  const furniture = Furniture.findByIdAndDelete(id);
  return furniture;
};

exports.decreaseStock = async (id, quantity) => {
  const furniture = await this.getOneById(id);
  const updatedStock = furniture.quantity - quantity;
  const decreasedFurniture = await Furniture.findByIdAndUpdate(
    id,
    { quantity: updatedStock },
    { runValidators: true }
  );
  console.log('dec', decreasedFurniture, updatedStock);
};
