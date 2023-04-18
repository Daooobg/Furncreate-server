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
  res.status(200).json(furniture);
});

exports.deleteOne = catchAsync(async (req, res, next) => {
  console.log(req);
  const furniture = await furnitureService.deleteOne(req.params.slug);

  res.status(204).json({
    status: 'success',
    data: furniture,
  });
});

exports.createComment = catchAsync(async (req, res, next) => {
  const comment = await furnitureService.createComment(req.user, req.body);
  res.status(200).json({
    status: 'success',
    comment
  });
});
