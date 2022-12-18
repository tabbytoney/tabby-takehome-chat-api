const asyncHandler = require('express-async-handler');
const generateToken = require('../dbConfig/generateToken');
const User = require('../models/user');

// for user registration

const regUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Missing information from required fields!');
  }

  // Does user aleady exist?
  // find.One is a MongoDb query
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('You are already registered!');
  }

  // create new user
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Something went wrong! We couldnt create the user!');
  }
});

// login
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // find if user exists
  const user = await User.findOne({ email });
  // if user exists AND password matches
  if (user && (await user.matchPass(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Email and password do not match!');
  }
});

module.exports = { regUser, authUser };
