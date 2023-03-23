const Furniture = require('../models/furnitureModel');

exports.getAll = async () => Furniture.find();
