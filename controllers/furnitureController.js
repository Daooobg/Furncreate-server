const furnitureService = require('../services/furnitureService');
const catchAsync = require('../utils/catchAsync');


exports.getAll = catchAsync(async (req, res, next) => {
  const data = await furnitureService.getAll();
  console.log('get All');
  res.status(200).json(data);
});

exports.postCreate = catchAsync(async (req, res) => {
    console.log("post create");
    const data = await furnitureService.create(req.body, req.user);
    res.status(200).json({ data });
  });
