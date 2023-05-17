const { Router } = require('express');
const routes = Router();
const authRouter = require('./router/authRouter');
const userRouter = require('./router/userRouter');

routes.use('/auth', authRouter);
routes.use('/user', userRouter);

module.exports = routes;
