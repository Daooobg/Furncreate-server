const errorHandler = (err, req, res, next) => {
  console.log(err.name);
  if (err.code == 11000) {
    err.statusCode = 401;
    const message = err.message.split('key: ')[1];
    err.message = `${message} already exist`;
  }
  if (err.name === 'ValidationError') {
    err.statusCode = 401;
  }
  if (!err.statusCode) {
    err.statusCode = 500
  }
  res.status(err.statusCode).json(err.message);
};

module.exports = errorHandler;
