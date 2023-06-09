const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const furnitureRouter = require('./routes/furnitureRouter');
const purchaseRouter = require('./routes/purchaseRouter');
const authMiddleware = require('./middlewares/authMiddleware');
const errorHandler = require('./middlewares/errors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(authMiddleware.authentication);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/furniture', furnitureRouter);
app.use('/api/v1/purchase', purchaseRouter);

app.use(errorHandler);

module.exports = app;
