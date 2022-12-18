const asyncHandler = require('express-async-handler');
const Convo = require('../models/convo');
const User = require('../models/user');

// creating or fetching a single convo
const accessConvo = asyncHandler(async (req, res) => {
  // need current logged in user id to create convo
  const { userId } = req.body;

  if (!userId) {
    console.log('UserId param not sent with request');
    return res.sendStatus(400);
  }

  let isConvo = await Convo.find({
    // should match convo model > users [{}] - the elements inside that object, the user id should equal the current logged in user
    // or the other user in the convo
    // $eq = equals, $and is like && for mongo

    users: { $elemMatch: { $eq: req.user._id } },
    // or should match the other user sent in the convo
    users: { $elemMatch: { $eq: req.userId } },
  })
    .populate('users', '-password')
    .populate('lastMsg');

  // from convo > lastMsg > msg model > sender
  isConvo = await User.populate(isConvo, {
    path: 'lastMsg.sender',
    select: 'name pic email',
  });

  if (isConvo.length > 0) {
    // send first result (there should only be one convo)
    res.send(isConvo[0]);
    // if no convo exists, create one
  } else {
    let convoData = {
      convoName: 'sender',
      users: [req.user._id, userId],
    };

    // query and store new convo in the db
    try {
      const createdConvo = await Convo.create(convoData);
      // return the convo to the user
      const fullConvo = await Convo.findOne({ _id: createdConvo._id }).populate(
        'users',
        '-password'
      );
      res.status(200).send(fullConvo);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

// to get a list of all convos for a user
const getAllConvos = asyncHandler(async (req, res) => {
  try {
    // check which user is logged in, get all chats with their userid
    Convo.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate('users', '-password')
      .populate('lastMsg')
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: 'lastMsg.sender',
          select: 'name pic email',
        });

        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { accessConvo, getAllConvos };
