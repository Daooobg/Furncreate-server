const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const furnitureRouter = require('./routes/furnitureRouter');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/furniture', furnitureRouter);

module.exports = app;
