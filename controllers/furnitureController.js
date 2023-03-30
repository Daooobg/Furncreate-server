const furnitureService = require('../services/furnitureService');
const catchAsync = require('../utils/catchAsync');

exports.getAll = catchAsync(async (req, res, next) => {
  const data = await furnitureService.getAll();
  console.log('get All');
  res.status(200).json(data);
});

exports.postCreate = catchAsync(async (req, res, next) => {
  console.log('post create');
  const data = await furnitureService.create(req.body, req.user);
  res.status(200).json(data);
});

exports.getOne = catchAsync(async (req, res, next) => {
  const furniture = await furnitureService.getOne(req.params.slug);

  res.status(200).json(furniture[0]);
});

exports.updateOne = catchAsync(async (req, res, next) => {
  const furniture = await furnitureService.updateOne(req.params.slug, req.body);
  console.log(furniture);
  res.status(200).json(furniture);
});
