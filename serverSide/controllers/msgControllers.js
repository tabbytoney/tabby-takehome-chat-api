const asyncHandler = require('express-async-handler');
const Msg = require('../models/msg');
const User = require('../models/user');
const Convo = require('../models/convo');

const sendMsg = asyncHandler(async (req, res) => {
  // sender of the msg = the logged in user
  const { content, convoId } = req.body;

  // check if content or convo id exists
  if (!convoId || !content) {
    console.log('This convo does not exist');
    return res.sendStatus(400);
  }

  let newMsg = {
    sender: req.user._id,
    content: content,
    convo: convoId,
  };

  // query the db
  try {
    // create a new msg with info from newMsg
    let msg = await Msg.create(newMsg);
    // populate msg content
    msg = await msg.populate('sender', 'name pic');
    // populate everything in this chat
    msg = await msg.populate('convo');
    // populate each of the users' info
    msg = await User.populate(msg, {
      path: 'convo.users',
      select: 'name pic email',
    });
    // update with the latest message
    await Convo.findByIdAndUpdate(req.body.convoId, {
      lastMsg: msg,
    });

    res.json(msg);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// get all messages in a certain convo
const allMsgs = asyncHandler(async (req, res) => {
  try {
    // find that convo by its id
    const msgs = await Msg.find({ convo: req.params.convoId })
      .populate('sender', 'name pic email')
      .populate('convo');
    res.json(msgs);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// search messages for a particular string
const searchMsg = asyncHandler(async (req, res) => {
  try {
    const searchString = { search: req.query.search };
    const msgs = await Msg.find(searchString);
    res.send(msgs);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { sendMsg, allMsgs, searchMsg };
