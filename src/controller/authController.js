require('dotenv').config();
const User = require('../model/UserModel');
const CryptoJS = require('crypto-js');
const process = require('process');
const jwt = require('jsonwebtoken');

// user SignUp Api
const signUp = async(req, res) => {
  try {
    console.log(req.file)
    let cipherPassword;
    let existedUser;
    // let image = req.body.profileImg.replace(/^data:image\/\w+;base64,/, '');

    if (req.body.password) {
      cipherPassword = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.JWT_SECRET
      ).toString();
    }
    if (req.body.email) {
      existedUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
    }
    if (req.body.email === existedUser?.email) {
      res.status(403).send({
        success: false,
        message: 'User is already exist! Try with another E-mail',
      });
    } else {
      const user = await User.create({
        email: req.body.email,
        password: cipherPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        profileimg: req.file.path
      });

      if (user) {
        return res.status(200).send({
          success: true,
        });
      } else {
        res.status(403).send({
          success: false,
          error: 'something went wrong ',
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
      stack: error.stack,
    });
  }
};

// user SignIn Api
const logIn = async(req, res) => {
  try {
    const user = await User.findOne({
      where: {email: req.body.email}
    });
    if (!user) {
      return res.status(404).send({
        error: 'No matching user details found!',
      });
    }
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.JWT_SECRET);
    const Password = bytes.toString(CryptoJS.enc.Utf8);
    if (req.body.password === Password) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60});
      res.status(200).send({
        success: true,
        message: 'User logged in successfully!',
        res: {
          id: user.dataValues.id,
          firstName: user.dataValues.firstName,
          lastName: user.dataValues.lastName,
          email: user.dataValues.email,
          profileImg: user.dataValues.profileimg
        },
        token,
      });
    } else {
      res.status(403).send({
        error: 'Invalid Password!',
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
      stack: error.stack,
    });
  }
};

module.exports = { signUp, logIn };
