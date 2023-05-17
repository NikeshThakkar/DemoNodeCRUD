const { Router } = require('express');
const authRouter = Router();
const { signUp, logIn } = require('../controller/authController');
const upload = require('../middleware/multerConfig');
const { signInBodyValidate, signUpBodyValidate } = require('../middleware/reqBodyValidator');

authRouter.post('/signup',upload, signUp);
authRouter.post('/login',signInBodyValidate, logIn);

module.exports = authRouter;
