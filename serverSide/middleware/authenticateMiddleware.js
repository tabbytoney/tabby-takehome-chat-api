const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');

const secure = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      // decodes tokenid
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // find the user in the db, return it without the password
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('This castle is locked! Token has a problem!');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('This castle is locked! You have no magic token!');
  }
});

module.exports = { secure };
