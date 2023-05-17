const { Router } = require('express');
const userRouter = Router();
const authenticate = require('../middleware/authtoken');
const { getUserById, getAllUsers, updateUser } = require('../controller/userController');

userRouter.get('/getUserById/:id', authenticate, getUserById);
userRouter.get('/getAllUsers', authenticate, getAllUsers);
userRouter.put('/updateuser/:id',authenticate, updateUser);

module.exports = userRouter;
