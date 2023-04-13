const User = require('../models/userModel');
const dotenv = require('dotenv');
const jwt = require('../lib/jsonwebtoken');
const AppError = require('../utils/AppError');

dotenv.config({ path: './config.env' });

const SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const createAndSendToken = async (user) => {
  const payload = { name: user.name, email: user.email, _id: user._id };
  const token = await jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });

  const response = {
    AccessToken: token,
    name: user.name,
    email: user.email,
    userId: user._id,
  };
  return response;
};

exports.getUserByEmail = (email) => User.findOne({ email });

exports.getUserById = (_id) => User.findById({ _id }).select('-password -__v');

exports.getAllUsers = () => User.find();

exports.updateUser = (id, data) => {

  const user = User.findByIdAndUpdate(
    data.id,
    { role: data.role },
    {
      runValidators: true,
    }
  );
  return user;
};

exports.register = async (name, email, password, repeatPassword) => {
  const user = await User.create({ name, email, password, repeatPassword });
  return createAndSendToken(user);
};

exports.login = async (email, password) => {
  const user = await this.getUserByEmail(email);

  if (!user) {
    throw new AppError('Invalid Username or Password!', 401, {
      email,
      password,
    });
  }

  const isValid = await user.validatePassword(password);

  if (!isValid) {
    throw new AppError('Invalid Username or Password!', 401, {
      email,
      password,
    });
  }

  return createAndSendToken(user);
};
