const authService = require('../services/authService');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.register = catchAsync(async (req, res, next) => {
  const { name, email, password, repeatPassword } = req.body;

  if (!email || !password || !repeatPassword || !name) {
    return next(new AppError('All fields are required', 400, req.body));
  }
  if (password !== repeatPassword) {
    return next(new AppError('Passwords are not match', 400, req.body));
  }

  const token = await authService.register(
    name,
    email,
    password,
    repeatPassword
  );


  res.status(200).json({ token });
});
