const jwt = require('jsonwebtoken');
const process = require('process');


//token middleware
const authToken = async(req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(200).send({ message: 'Token is required' });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (verifyToken) {
      req.id = verifyToken.payload;
      next();
    } else {
      return res.status(200).send({ message: 'Token is Invalid' });
    }
  } catch (error) {
    return res.status(500).send({
      message: error.message,
      stack: error.stack,
    });
  }
};

module.exports = authToken;
